/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import {
  importSwcJsMinifierOptions,
  importLightningCssMinimizerOptions,
} from './importFaster';
import type {CustomOptions, CssNanoOptions} from 'css-minimizer-webpack-plugin';
import type {WebpackPluginInstance} from 'webpack';
import type {CurrentBundler, FasterConfig} from '@docusaurus/types';

export type MinimizersConfig = {
  faster: Pick<FasterConfig, 'swcJsMinimizer'>;
  currentBundler: CurrentBundler;
};

// See https://github.com/webpack-contrib/terser-webpack-plugin#parallel
function getTerserParallel() {
  let terserParallel: boolean | number = true;
  if (process.env.TERSER_PARALLEL === 'false') {
    terserParallel = false;
  } else if (
    process.env.TERSER_PARALLEL &&
    parseInt(process.env.TERSER_PARALLEL, 10) > 0
  ) {
    terserParallel = parseInt(process.env.TERSER_PARALLEL, 10);
  }
  return terserParallel;
}

async function getJsMinimizer({faster}: MinimizersConfig) {
  if (faster.swcJsMinimizer) {
    const terserOptions = await importSwcJsMinifierOptions();
    return new TerserPlugin({
      parallel: getTerserParallel(),
      minify: TerserPlugin.swcMinify,
      terserOptions,
    });
  }

  return new TerserPlugin({
    parallel: getTerserParallel(),
    terserOptions: {
      parse: {
        // We want uglify-js to parse ecma 8 code. However, we don't want it
        // to apply any minification steps that turns valid ecma 5 code
        // into invalid ecma 5 code. This is why the 'compress' and 'output'
        // sections only apply transformations that are ecma 5 safe
        // https://github.com/facebook/create-react-app/pull/4234
        ecma: 2020,
      },
      compress: {
        ecma: 5,
      },
      mangle: {
        safari10: true,
      },
      output: {
        ecma: 5,
        comments: false,
        // Turned on because emoji and regex is not minified properly using
        // default. See https://github.com/facebook/create-react-app/issues/2488
        ascii_only: true,
      },
    },
  });
}

async function getLightningCssMinimizer() {
  return new CssMinimizerPlugin({
    minify: CssMinimizerPlugin.lightningCssMinify,
    minimizerOptions: await importLightningCssMinimizerOptions(),
  });
}

function getAdvancedCssMinifier() {
  // Using the array syntax to add 2 minimizers
  // see https://github.com/webpack-contrib/css-minimizer-webpack-plugin#array
  return new CssMinimizerPlugin<[CssNanoOptions, CustomOptions]>({
    minimizerOptions: [
      // CssNano options
      {
        preset: require.resolve('@docusaurus/cssnano-preset'),
      },
      // CleanCss options
      {
        inline: false,
        level: {
          1: {
            all: false,
            removeWhitespace: true,
          },
          2: {
            all: true,
            restructureRules: true,
            removeUnusedAtRules: false,
          },
        },
      },
    ],
    minify: [
      CssMinimizerPlugin.cssnanoMinify,
      CssMinimizerPlugin.cleanCssMinify,
    ],
  });
}

async function getCssMinimizer(): Promise<WebpackPluginInstance> {
  // This is an historical env variable to opt-out of the advanced minifier
  // Sometimes there's a bug in it and people are happy to disable it
  const useSimpleCssMinifier = process.env.USE_SIMPLE_CSS_MINIFIER === 'true';

  // TODO wire this to options
  const useLightningCssMinimizer = true;

  if (useLightningCssMinimizer) {
    if (useSimpleCssMinifier) {
      throw new Error(
        "You can't use LightningCSS and the USE_SIMPLE_CSS_MINIFIER=true env variable at the same time",
      );
    }
    return getLightningCssMinimizer();
  }

  if (useSimpleCssMinifier) {
    return new CssMinimizerPlugin();
  } else {
    return getAdvancedCssMinifier();
  }
}

async function getWebpackMinimizers(
  params: MinimizersConfig,
): Promise<WebpackPluginInstance[]> {
  return Promise.all([getJsMinimizer(params), getCssMinimizer()]);
}

async function getRspackMinimizers({
  currentBundler,
}: MinimizersConfig): Promise<WebpackPluginInstance[]> {
  console.log('currentBundler', currentBundler.name);
  throw new Error('TODO Rspack minimizers not implemented yet');
}

export async function getMinimizers(
  params: MinimizersConfig,
): Promise<WebpackPluginInstance[]> {
  return params.currentBundler.name === 'rspack'
    ? getRspackMinimizers(params)
    : getWebpackMinimizers(params);
}
