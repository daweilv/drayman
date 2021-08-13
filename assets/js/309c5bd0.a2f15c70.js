"use strict";(self.webpackChunk_drayman_docs=self.webpackChunk_drayman_docs||[]).push([[573],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return t?i.createElement(h,o(o({ref:n},m),{},{components:t})):i.createElement(h,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7514:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Configuration",sidebar_position:4},c=void 0,s={unversionedId:"introduction/configuration",id:"introduction/configuration",isDocsHomePage:!1,title:"Configuration",description:"Drayman configuration can be managed inside drayman.config.js file.",source:"@site/docs/introduction/configuration.mdx",sourceDirName:"introduction",slug:"/introduction/configuration",permalink:"/docs/introduction/configuration",editUrl:"https://github.com/Claviz/drayman/blob/main/docs/docs/introduction/configuration.mdx",version:"current",sidebarPosition:4,frontMatter:{title:"Configuration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Server and client combined",permalink:"/docs/introduction/server-and-client-combined"},next:{title:"Component lifecycle",permalink:"/docs/components-in-depth/component-lifecycle"}},m=[{value:"Drayman initialization",id:"drayman-initialization",children:[{value:"browserCommands",id:"browsercommands",children:[]},{value:"elementOptions",id:"elementoptions",children:[]}]}],d={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Drayman configuration can be managed inside ",(0,a.kt)("inlineCode",{parentName:"p"},"drayman.config.js")," file."),(0,a.kt)("p",null,"A default configuration looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="drayman.config.js"',title:'"drayman.config.js"'},'module.exports = {\n  componentsDir: "src/components",\n  componentsOutputDir: "dist/components",\n  publicDir: "public",\n};\n')),(0,a.kt)("p",null,"You can manage where your components are stored, where to put compiled components and where your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," is located."),(0,a.kt)("h2",{id:"drayman-initialization"},"Drayman initialization"),(0,a.kt)("p",null,"Drayman initialization can be configured when executing ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeDraymanFramework()")," function which is by default located inside ",(0,a.kt)("inlineCode",{parentName:"p"},"public/index.html")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <title>Drayman Framework</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="/drayman-framework-client.js"><\/script>\n  </head>\n\n  <body>\n    <drayman-element component="home"></drayman-element>\n\n    <script>\n      // highlight-next-line\n      initializeDraymanFramework();\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"This function accepts an object with some configurable options which are described below."),(0,a.kt)("h3",{id:"browsercommands"},"browserCommands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},"...\n\n<script>\n  initializeDraymanFramework({\n    // highlight-start\n    browserCommands: () => ({\n      alert: async ({ text }) => {\n        alert(text);\n      },\n      getCurrentUrl: async () => {\n        return window.location.href;\n      },\n    }),\n    // highlight-end\n  });\n<\/script>\n\n...\n")),(0,a.kt)("p",null,"Can be used to describe commands which are executed inside user browser.\nMore detailed description of this functionality can be found here - ",(0,a.kt)("a",{parentName:"p",href:"../components-in-depth/helpers/the-browser-object"},"The Browser\nobject"),"."),(0,a.kt)("h3",{id:"elementoptions"},"elementOptions"),(0,a.kt)("p",null,"Can be used to configure default behavior of elements. Contains dictionary which describes each element and it's attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="public/index.html"',title:'"public/index.html"'},'...\n\n<script>\n  initializeDraymanFramework({\n    // highlight-start\n    elementOptions: {\n      h3: { style: "color: red;" },\n      input: {\n        oninput: { debounce: 500 },\n      },\n    },\n    // highlight-end\n  });\n<\/script>\n\n...\n')),(0,a.kt)("p",null,"Using this example will modify default behavior of elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All ",(0,a.kt)("inlineCode",{parentName:"li"},"<h3>")," elements will have red text."),(0,a.kt)("li",{parentName:"ul"},"All ",(0,a.kt)("inlineCode",{parentName:"li"},"<input>")," elements will be debounced by 500ms before data is sent to server.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Element event configuration is described in detail ",(0,a.kt)("a",{parentName:"p",href:"../components-in-depth/handling-events#configuring-events"},"here"),"."))))}p.isMDXComponent=!0}}]);