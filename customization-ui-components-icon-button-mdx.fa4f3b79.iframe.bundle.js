"use strict";(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[327],{"./node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/internal/storybook-doc-page/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ws:()=>MdxCssSelectorTable,Nk:()=>MdxDocPage});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@6.1.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),DocCategory=__webpack_require__("./packages/internal/storybook-doc-page/src/lib/components/doc-page/DocCategory.tsx"),DocPage=__webpack_require__("./packages/internal/storybook-doc-page/src/lib/components/doc-page/DocPage.tsx");const MdxDocPage=({children,groupTitle})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(DocPage.w,{hideCckThemeSwitcher:!1,children:(0,jsx_runtime.jsxs)(StyledWrapper,{children:[groupTitle&&(0,jsx_runtime.jsx)(DocCategory.j,{children:groupTitle}),children]})})}),StyledWrapper=styled_components_browser_esm.Ay.div`
    position: relative;
    width: 100%;
    margin: auto;
    padding: var(--cck-storybook-size-64) var(--cck-storybook-size-32) var(--cck-storybook-size-128) var(--cck-storybook-size-32);
    overflow: hidden;
`;var DocMarkdown=__webpack_require__("./packages/internal/storybook-doc-page/src/lib/components/doc-page/DocMarkdown.tsx"),src=__webpack_require__("./packages/common/core/src/index.ts"),storybook_theme_switcher_src=__webpack_require__("./packages/internal/storybook-theme-switcher/src/index.ts");function MdxCssSelectorTable({componentName}){const coreClassNames=src.TD[componentName],selectedCckTheme=(0,storybook_theme_switcher_src.RJ)();if(!selectedCckTheme)return;const{additional,component,...restProp}=selectedCckTheme.uiComponentConfig[componentName];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH2,{children:"Layout Elements"}),(0,jsx_runtime.jsx)("p",{children:"Selectors in this group will always be added to the DOM element, regardless of the variant."}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Render Condition:"})," Selectors in this group will be added always to the DOM element, no patter of the variant."]}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(StyledTh,{children:"Selector"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Element"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Description"})]})}),(0,jsx_runtime.jsx)("tbody",{children:Object.entries(coreClassNames.elements).map((([key,value])=>(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:value.selectors}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:key}),(0,jsx_runtime.jsx)(StyledTd,{children:(0,jsx_runtime.jsx)(DocMarkdown.A,{children:value.description})})]},key)))})]}),(0,jsx_runtime.jsx)(StyledH2,{children:"Variants"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Render Condition:"})," These selectors will be added to the DOM when the corresponding variant group is added to the component."]}),Object.entries(restProp).map((([key,config])=>{if(config)return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH3,{children:key}),(0,jsx_runtime.jsxs)("p",{children:["Selectors in this group act as ",(0,jsx_runtime.jsx)("code",{children:key})," variants and are applied to specific layout elements."]}),config.description&&(0,jsx_runtime.jsx)(DocMarkdown.A,{children:config.description}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(StyledTh,{children:"Selector"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Package"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Element"})]})}),(0,jsx_runtime.jsx)("tbody",{children:Object.values(config.values).map((value=>(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"type"===key?(0,src.Rc)(coreClassNames.prefix,value):(0,src.Rc)(coreClassNames.prefix,key,value)}),(0,jsx_runtime.jsx)(StyledTd,{children:selectedCckTheme.name}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"Host Element"})]},value.toString())))})]})]})})),additional&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH2,{children:"Theme Variants"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Render Condition:"})," These selectors will be added to the DOM when the corresponding variant group is added to the component."]}),Object.entries(additional).map((([key,config])=>{if(config)return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH3,{children:key}),config.description&&(0,jsx_runtime.jsx)(DocMarkdown.A,{children:config.description}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(StyledTh,{children:"Selector"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Package"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Element"})]})}),(0,jsx_runtime.jsx)("tbody",{children:Object.values(config.values).map((value=>(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"type"===key?(0,src.Rc)(coreClassNames.prefix,value):(0,src.Rc)(coreClassNames.prefix,key,value)}),(0,jsx_runtime.jsx)(StyledTd,{children:selectedCckTheme.name}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"Host Element"})]},value.toString())))})]})]})}))]})]})}const StyledH2=styled_components_browser_esm.Ay.h2`
    margin-top: var(--cck-storybook-size-48)
`,StyledH3=styled_components_browser_esm.Ay.h3`
    margin-top: var(--cck-storybook-size-48)
`,StyledTable=styled_components_browser_esm.Ay.table`
    width: 100%;
    border: var(--cck-storybook-size-1) solid var(--cck-storybook-color-bg-body-inverse-alpha-5);
    border-radius: var(--cck-storybook-size-6);
    border-spacing: 0;

    & p {
        color: inherit;
        font: inherit;
    }
`,StyledTr=styled_components_browser_esm.Ay.tr`
    font: var(--cck-storybook-text-sm-medium);
    color: var(--cck-storybook-color-font-contrast-4);
    padding: var(--cck-storybook-size-12) var(--cck-storybook-size-24);

    &:nth-child(even) {
        background-color: var(--cck-storybook-color-bg-table-even);
    }
`,StyledTd=styled_components_browser_esm.Ay.td`
    font: var(--cck-storybook-text-sm-regular);
    color: var(--cck-storybook-color-font-contrast-2);
    padding: var(--cck-storybook-size-12) var(--cck-storybook-size-24);
    border-top: var(--cck-storybook-size-1) solid var(--cck-storybook-color-border-alpha-default);

    ${props=>props.noWrap&&styled_components_browser_esm.AH`
        white-space: nowrap;
    `}
    &:first-child {
        font: var(--cck-storybook-text-sm-medium);
        color: var(--cck-storybook-color-font-contrast-3);
    }

    & code {
        font: var(--cck-storybook-text-xs-regular);
        padding: var(--cck-storybook-size-2) var(--cck-storybook-size-6);
    }
    
    & p {
        margin: 0;
    }
`,StyledTh=styled_components_browser_esm.Ay.th`
    font: var(--cck-storybook-text-sm-medium);
    color: var(--cck-storybook-color-font-contrast-4);
    padding: var(--cck-storybook-size-12) var(--cck-storybook-size-24);
    text-align: left;
`},"./packages/common/core/stories/customization/ui-components/_override-styles.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MDXContent});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.2.0/node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",...(0,_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"override-styles",children:"Override Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All selectors from core and theme packages use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":where()"})," pseudo-class, ensuring 0 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",rel:"nofollow",children:"specificity"}),".\nThis allows easy style overrides without needing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"!important"})," or deeply nested selectors."]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./packages/common/core/stories/customization/ui-components/_overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MDXContent});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.2.0/node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components={h2:"h2",hr:"hr",p:"p",...(0,_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This document outlines the CSS selectors used in the component, detailing their application contexts and the associated package names.\nThis guide helps designers and developers understand when and how these selectors are applied to DOM elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./packages/common/core/stories/customization/ui-components/icon-button.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.3_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@8.0.10_encoding@0.1.13/node_modules/@storybook/addon-docs/dist/index.mjs"),_overview_mdx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/common/core/stories/customization/ui-components/_overview.mdx"),_override_styles_mdx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/common/core/stories/customization/ui-components/_override-styles.mdx"),_internal_storybook_doc_page_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/internal/storybook-doc-page/src/index.ts");function _createMdxContent(props){const _components={h1:"h1",...(0,_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Customization/UI Components/IconButton"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_internal_storybook_doc_page_src__WEBPACK_IMPORTED_MODULE_5__.Nk,{groupTitle:"Customization",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"styling-svgicon-component",children:"Styling SvgIcon Component"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_overview_mdx__WEBPACK_IMPORTED_MODULE_3__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_internal_storybook_doc_page_src__WEBPACK_IMPORTED_MODULE_5__.ws,{componentName:"iconButton"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_override_styles_mdx__WEBPACK_IMPORTED_MODULE_4__.A,{})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_miladfaghihi_Desktop_projects_personal_CocoKits_node_modules_pnpm_storybook_addon_docs_8_0_10_encoding_0_1_13_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);
//# sourceMappingURL=customization-ui-components-icon-button-mdx.fa4f3b79.iframe.bundle.js.map