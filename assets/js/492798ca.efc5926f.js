"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10880],{15995:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(62540);r(63696);var i=r(11750);function l({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_pnkT",r),hidden:n,children:e})}},27446:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(62540),i=r(63696),l=r(11750),a=r(7846),s=r(49519),o=r(96439),d=r(19739),c=r(66904),u=r(79244);function h(e){var n,r;return null!==(r=null===(n=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var g=r(10709);function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}function x({className:e,block:n,selectedValue:r,selectValue:i,tabValues:s}){let o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{let n=e.currentTarget,t=s[o.indexOf(n)].value;t!==r&&(d(n),i(t))},u=e=>{var n,r;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=null!==(n=o[r])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;t=null!==(r=o[n])&&void 0!==r?r:o[o.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:s.map(({value:e,label:n,attributes:i})=>(0,t.jsx)("li",j(m({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>o.push(e),onKeyDown:u,onClick:c},i),{className:(0,l.A)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e))})}function f({lazy:e,children:n,selectedValue:r}){let a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=a.find(e=>e.props.value===r);return e?(0,i.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,l=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=null!=n?n:h(r).map(({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t}));return!function(e){let n=(0,c.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[a,g]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:n}){var r;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(r=n.find(e=>e.default))&&void 0!==r?r:n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[m,j]=function({queryString:e=!1,groupId:n}){let r=(0,s.W6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,d.aZ)(t),(0,i.useCallback)(e=>{var n,i;if(!t)return;let l=new URLSearchParams(r.location.search);l.set(t,e),r.replace((n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({},r.location),i=i={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}),n))},[t,r])]}({queryString:r,groupId:t}),[x,f]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[r,t]=(0,u.Dv)(n);return[r,(0,i.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:t}),b=(()=>{let e=null!=m?m:x;return p({value:e,tabValues:l})?e:null})();return(0,o.A)(()=>{b&&g(b)},[b]),{selectedValue:a,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);g(e),j(e),f(e)},[j,f,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(x,m({},n,e)),(0,t.jsx)(f,m({},n,e))]})}function y(e){let n=(0,g.A)();return(0,t.jsx)(b,j(m({},e),{children:h(e.children)}),String(n))}},59273:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(62540),i=r(63696),l=r(52711),a=r(49519);let s=i.forwardRef(function({name:e,children:n},r){let s=function(e){let n=e;for(;(0,i.isValidElement)(n);)[n]=i.Children.toArray(n.props.children);if("string"!=typeof n)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return n}(n),o=e?`${e}-${s}`:s,d=`#${o}`,c=(0,a.W6)();return(0,l.A)().collectAnchor(o),(0,t.jsx)("tr",{id:o,tabIndex:0,ref:c.location.hash===d?r:void 0,onClick:e=>{"A"!==e.target.tagName.toUpperCase()&&c.push(d)},onKeyDown:e=>{"Enter"===e.key&&c.push(d)},children:n.props.children})});function o({children:e,name:n}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,l]=i.Children.toArray(e.props.children),a=(0,i.useRef)(null);(0,i.useEffect)(()=>{var e;null===(e=a.current)||void 0===e||e.focus()},[a]);let o=i.Children.map(l.props.children,e=>(0,t.jsx)(s,{name:n,ref:a,children:e}));return(0,t.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,t.jsx)("tbody",{children:o})]})}},74168:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=r(62540),i=r(43023),l=r(27446),a=r(15995),s=r(59273);let o={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},d="\u{1F4E6} plugin-ideal-image",c={id:"api/plugins/plugin-ideal-image",title:"\u{1F4E6} plugin-ideal-image",description:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder).",source:"@site/docs/api/plugins/plugin-ideal-image.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-ideal-image",permalink:"/docs/api/plugins/@docusaurus/plugin-ideal-image",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-ideal-image.mdx",tags:[],version:"current",lastUpdatedBy:"Olexandr Radovenchyk",lastUpdatedAt:1725278075e3,sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-ideal-image"},sidebar:"api",previous:{title:"\u{1F4E6} plugin-google-tag-manager",permalink:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager"},next:{title:"\u{1F4E6} plugin-pwa",permalink:"/docs/api/plugins/@docusaurus/plugin-pwa"}},u={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-plugin-ideal-image",children:"\u{1F4E6} plugin-ideal-image"})}),"\n","\n",(0,t.jsx)(n.p,{children:"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["By default, the plugin is ",(0,t.jsx)(n.strong,{children:"inactive in development"})," so you could always view full-scale images. If you want to debug the ideal image behavior, you could set the ",(0,t.jsx)(n.a,{href:"#disableInDev",children:(0,t.jsx)(n.code,{children:"disableInDev"})})," option to ",(0,t.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,t.jsx)(a.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-ideal-image\n"})})}),(0,t.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-ideal-image\n"})})}),(0,t.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-ideal-image\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"This plugin supports the PNG and JPG formats only."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your React code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["This plugin registers a ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/loaders/",children:"Webpack loader"})," that changes the type of imported/require images:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:["After: ",(0,t.jsx)(n.code,{children:'{preSrc: string, src: import("@theme/IdealImage").SrcImage}'})]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,t.jsx)(s.A,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ideal-img/[name].[hash:hex:7].[width].[ext]"})}),(0,t.jsx)(n.td,{children:"Filename template for output files."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sizes"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"original size"})}),(0,t.jsx)(n.td,{children:"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"size"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"original size"})}),(0,t.jsx)(n.td,{children:"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"min"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["As an alternative to manually specifying ",(0,t.jsx)(n.code,{children:"sizes"}),", you can specify ",(0,t.jsx)(n.code,{children:"min"}),", ",(0,t.jsx)(n.code,{children:"max"})," and ",(0,t.jsx)(n.code,{children:"steps"}),", and the sizes will be generated for you."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"max"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.code,{children:"min"})," above"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"steps"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"4"})}),(0,t.jsxs)(n.td,{children:["Configure the number of images generated between ",(0,t.jsx)(n.code,{children:"min"})," and ",(0,t.jsx)(n.code,{children:"max"})," (inclusive)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"quality"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"85"})}),(0,t.jsx)(n.td,{children:"JPEG compression quality"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"disableInDev"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["You can test ideal image behavior in dev mode by setting this to ",(0,t.jsx)(n.code,{children:"false"}),". ",(0,t.jsx)(n.strong,{children:"Tip"}),": use ",(0,t.jsx)(n.a,{href:"https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome",children:"network throttling"})," in your browser to simulate slow networks."]})]})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      // highlight-start\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n        disableInDev: false,\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function g(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(63696);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);