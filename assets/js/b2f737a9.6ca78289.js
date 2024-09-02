"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64310],{15995:(e,n,r)=>{r.d(n,{A:()=>a});var t=r(62540);r(63696);var s=r(11750);function a({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",r),hidden:n,children:e})}},27446:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(62540),s=r(63696),a=r(11750),i=r(7846),l=r(49519),o=r(96439),c=r(19739),d=r(66904),u=r(79244);function h(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var f=r(10709);function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}function g({className:e,block:n,selectedValue:r,selectValue:s,tabValues:l}){let o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{let n=e.currentTarget,t=l[o.indexOf(n)].value;t!==r&&(c(n),s(t))},u=e=>{var n,r;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=null!==(n=o[r])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;t=null!==(r=o[n])&&void 0!==r?r:o[o.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},e),children:l.map(({value:e,label:n,attributes:s})=>(0,t.jsx)("li",m(j({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>o.push(e),onKeyDown:u,onClick:d},s),{className:(0,a.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e))})}function x({lazy:e,children:n,selectedValue:r}){let i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===r);return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:h(r).map(({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t}));return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,f]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:n}){var r;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(r=n.find(e=>e.default))&&void 0!==r?r:n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[j,m]=function({queryString:e=!1,groupId:n}){let r=(0,l.W6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(t),(0,s.useCallback)(e=>{var n,s;if(!t)return;let a=new URLSearchParams(r.location.search);a.set(t,e),r.replace((n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({},r.location),s=s={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}),n))},[t,r])]}({queryString:r,groupId:t}),[g,x]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[r,t]=(0,u.Dv)(n);return[r,(0,s.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:t}),b=(()=>{let e=null!=j?j:g;return p({value:e,tabValues:a})?e:null})();return(0,o.A)(()=>{b&&f(b)},[b]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),m(e),x(e)},[m,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(g,j({},n,e)),(0,t.jsx)(x,j({},n,e))]})}function y(e){let n=(0,f.A)();return(0,t.jsx)(b,m(j({},e),{children:h(e.children)}),String(n))}},80553:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(62540),s=r(43023),a=r(27446),i=r(15995);let l={id:"git",slug:"/i18n/git"},o="i18n - Using git",c={id:"i18n/git",title:"i18n - Using git",description:"A possible translation strategy is to version control the translation files with Git (or any other VCS).",source:"@site/docs/i18n/i18n-git.mdx",sourceDirName:"i18n",slug:"/i18n/git",permalink:"/docs/i18n/git",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-git.mdx",tags:[],version:"current",lastUpdatedBy:"Olexandr Radovenchyk",lastUpdatedAt:1725278075e3,frontMatter:{id:"git",slug:"/i18n/git"},sidebar:"docs",previous:{title:"Tutorial",permalink:"/docs/i18n/tutorial"},next:{title:"Using Crowdin",permalink:"/docs/i18n/crowdin"}},d={},u=[{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",level:3},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",level:3},{value:"Translate the files",id:"translate-the-files",level:3},{value:"Repeat",id:"repeat",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Markdown translations",id:"markdown-translations",level:3},{value:"JSON translations",id:"json-translations",level:3},{value:"Localize edit URLs",id:"localize-edit-urls",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"i18n---using-git",children:"i18n - Using git"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"possible translation strategy"})," is to ",(0,t.jsx)(n.strong,{children:"version control the translation files"})," with Git (or any other ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Version_control",children:"VCS"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,t.jsx)(n.p,{children:"This strategy has advantages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Easy to get started"}),": just commit the ",(0,t.jsx)(n.code,{children:"i18n"})," folder to Git"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Easy for developers"}),": Git, GitHub and pull requests are mainstream developer tools"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Free"})," (or without any additional cost, assuming you already use Git)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Low friction"}),": does not require signing up to an external tool"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rewarding"}),": contributors are happy to have a nice contribution history"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Using Git also present some shortcomings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hard for non-developers"}),": they do not master Git and pull-requests"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hard for professional translators"}),": they are used to SaaS translation software and advanced features"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hard to maintain"}),": you have to keep the translated files ",(0,t.jsx)(n.strong,{children:"in sync"})," with the untranslated files"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Some ",(0,t.jsx)(n.strong,{children:"large-scale technical projects"})," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."]}),(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3317",children:"Docusaurus i18n RFC"})," for our notes and links studying these systems."]})]}),"\n",(0,t.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsxs)(n.p,{children:["This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,t.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"i18n tutorial"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"prepare-the-docusaurus-site",children:"Prepare the Docusaurus site"}),"\n",(0,t.jsx)(n.p,{children:"Initialize a new Docusaurus site:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest website classic\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add the site configuration for the French language:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Translate the homepage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"initialize-the-i18n-folder",children:["Initialize the ",(0,t.jsx)(n.code,{children:"i18n"})," folder"]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command to initialize the JSON translation files for the French locale:"]}),"\n",(0,t.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"--messagePrefix '(fr) '"})," option to make the untranslated strings stand out."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Hello"})," will appear as ",(0,t.jsx)(n.code,{children:"(fr) Hello"})," and makes it clear a translation is missing."]})]}),"\n",(0,t.jsx)(n.p,{children:"Copy your untranslated Markdown files to the French folder:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add all these files to Git."}),"\n",(0,t.jsx)(n.h3,{id:"translate-the-files",children:"Translate the files"}),"\n",(0,t.jsxs)(n.p,{children:["Translate the Markdown and JSON files in ",(0,t.jsx)(n.code,{children:"i18n/fr"})," and commit the translation."]}),"\n",(0,t.jsx)(n.p,{children:"You should now be able to start your site in French and see the translations:"}),"\n",(0,t.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn run start --locale fr\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run start --locale fr\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"You can also build the site locally or on your CI:"}),"\n",(0,t.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n# or\nnpm run build -- --locale fr\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\n# or\nyarn build --locale fr\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n# or\npnpm run build --locale fr\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"repeat",children:"Repeat"}),"\n",(0,t.jsx)(n.p,{children:"Follow the same process for each locale you need to support."}),"\n",(0,t.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,t.jsxs)(n.p,{children:["Keeping translated files ",(0,t.jsx)(n.strong,{children:"consistent"})," with the originals ",(0,t.jsx)(n.strong,{children:"can be challenging"}),", in particular for Markdown documents."]}),"\n",(0,t.jsx)(n.h3,{id:"markdown-translations",children:"Markdown translations"}),"\n",(0,t.jsxs)(n.p,{children:["When an untranslated Markdown document is edited, it is ",(0,t.jsx)(n.strong,{children:"your responsibility to maintain the respective translated files"}),", and we unfortunately don't have a good way to help you do so."]}),"\n",(0,t.jsxs)(n.p,{children:["To keep your translated sites consistent, when the ",(0,t.jsx)(n.code,{children:"website/docs/doc1.md"})," doc is edited, you need ",(0,t.jsx)(n.strong,{children:"backport these edits"})," to ",(0,t.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"json-translations",children:"JSON translations"}),"\n",(0,t.jsxs)(n.p,{children:["To help you maintain the JSON translation files, it is possible to run again the ",(0,t.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command:"]}),"\n",(0,t.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"New translations will be appended, and existing ones will not be overridden."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Reset your translations with the ",(0,t.jsx)(n.code,{children:"--override"})," option."]})}),"\n",(0,t.jsx)(n.h3,{id:"localize-edit-urls",children:"Localize edit URLs"}),"\n",(0,t.jsxs)(n.p,{children:["When the user is browsing a page at ",(0,t.jsx)(n.code,{children:"/fr/doc1"}),", the edit button will link by default to the unlocalized doc at ",(0,t.jsx)(n.code,{children:"website/docs/doc1.md"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Your translations are on Git, and you can use the ",(0,t.jsx)(n.code,{children:"editLocalizedFiles: true"})," option of the docs and blog plugins."]}),"\n",(0,t.jsxs)(n.p,{children:["The edit button will link to the localized doc at ",(0,t.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(63696);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);