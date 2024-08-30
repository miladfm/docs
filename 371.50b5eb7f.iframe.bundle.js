"use strict";(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[371],{"./node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.4_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/internal/storybook-doc-page/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ws:()=>MdxCssSelectorTable,Nk:()=>MdxDocPage,r:()=>MdxTokenTable});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@6.1.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),DocCategory=__webpack_require__("./packages/internal/storybook-doc-page/src/lib/components/doc-page/DocCategory.tsx"),DocPage=__webpack_require__("./packages/internal/storybook-doc-page/src/lib/components/doc-page/DocPage.tsx");const MdxDocPage=({children,groupTitle})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(DocPage.w,{hideCckThemeSwitcher:!1,children:(0,jsx_runtime.jsxs)(StyledWrapper,{children:[groupTitle&&(0,jsx_runtime.jsx)(DocCategory.j,{children:groupTitle}),children]})})}),StyledWrapper=styled_components_browser_esm.Ay.div`
    position: relative;
    width: 100%;
    margin: auto;
    padding: var(--cck-storybook-size-64) var(--cck-storybook-size-32) var(--cck-storybook-size-128) var(--cck-storybook-size-32);
`;var DocMarkdown=__webpack_require__("./packages/internal/storybook-doc-page/src/lib/components/doc-page/DocMarkdown.tsx"),src=__webpack_require__("./packages/common/core/src/index.ts"),storybook_theme_switcher_src=__webpack_require__("./packages/internal/storybook-theme-switcher/src/index.ts");function MdxCssSelectorTable({componentName}){const coreClassNames=src.TD[componentName],selectedCckTheme=(0,storybook_theme_switcher_src.RJ)();if(!selectedCckTheme)return;const{additional,component,...restProp}=selectedCckTheme.uiComponentConfig[componentName],hasVariants=Object.values(restProp).filter(Boolean).length>0||Object.values(additional??{}).filter(Boolean).length>0;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH2,{children:"Layout Elements"}),(0,jsx_runtime.jsx)("p",{children:"Selectors in this group will always be added to the DOM element, regardless of the variant."}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Render Condition:"})," Selectors in this group will be added always to the DOM element, no patter of the variant."]}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(StyledTh,{children:"Selector"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Element"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Description"})]})}),(0,jsx_runtime.jsx)("tbody",{children:Object.entries(coreClassNames.elements).map((([key,value])=>(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:value.selectors}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:key}),(0,jsx_runtime.jsx)(StyledTd,{children:(0,jsx_runtime.jsx)(DocMarkdown.A,{children:value.description})})]},key)))})]}),hasVariants&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH2,{children:"Variants"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Render Condition:"})," These selectors will be added to the DOM when the corresponding variant group is added to the component."]}),Object.entries(restProp).map((([key,config])=>{if(config)return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH3,{children:key}),(0,jsx_runtime.jsxs)("p",{children:["Selectors in this group act as ",(0,jsx_runtime.jsx)("code",{children:key})," variants and are applied to specific layout elements."]}),config.description&&(0,jsx_runtime.jsx)(DocMarkdown.A,{children:config.description}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(StyledTh,{children:"Selector"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Package"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Element"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:(0,src.Rc)({block:coreClassNames.prefix,modifier:`default-${config.name}`})}),(0,jsx_runtime.jsx)(StyledTd,{children:selectedCckTheme.name}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!1,children:`Applied to the Host Element when no ${config.name} is defined within the component, defaulting to the selected theme's ${config.name}.`})]},config.name+"default"),Object.values(config.values).map((value=>(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"type"===key?(0,src.Rc)({block:coreClassNames.prefix,element:value}):(0,src.Rc)({block:coreClassNames.prefix,element:key,modifier:value})}),(0,jsx_runtime.jsx)(StyledTd,{children:selectedCckTheme.name}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"Host Element"})]},value.toString())))]})]})]})})),additional&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH2,{children:"Theme Variants"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Render Condition:"})," These selectors will be added to the DOM when the corresponding variant group is added to the component."]}),Object.entries(additional).map((([key,config])=>{if(config)return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledH3,{children:key}),config.description&&(0,jsx_runtime.jsx)(DocMarkdown.A,{children:config.description}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(StyledTh,{children:"Selector"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Package"}),(0,jsx_runtime.jsx)(StyledTh,{children:"Element"})]})}),(0,jsx_runtime.jsx)("tbody",{children:Object.values(config.values).map((value=>(0,jsx_runtime.jsxs)(StyledTr,{children:[(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"type"===key?(0,src.Rc)({block:coreClassNames.prefix,element:value}):(0,src.Rc)({block:coreClassNames.prefix,element:key,modifier:value})}),(0,jsx_runtime.jsx)(StyledTd,{children:selectedCckTheme.name}),(0,jsx_runtime.jsx)(StyledTd,{noWrap:!0,children:"Host Element"})]},value.toString())))})]})]})}))]})]})]})}const StyledH2=styled_components_browser_esm.Ay.h2`
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
`;var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),utils_src=__webpack_require__("./packages/common/utils/src/index.ts");function TokenSection({title,children}){return(0,jsx_runtime.jsxs)(StylesWrapper,{children:[(0,jsx_runtime.jsxs)(StylesTitle,{children:[title,":"]}),children]})}const StylesWrapper=styled_components_browser_esm.Ay.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,StylesTitle=styled_components_browser_esm.Ay.div`
    font: var(--cck-storybook-text-xs-regular);
    color: var(--cck-storybook-color-font-contrast-1);
`;function TokenValuePreview({token,tokenMap}){const itemsValue=Object.keys(token.modes).flatMap((mode=>(mode=>{const tokenValues=token.modes[mode];if(tokenValues.aliasHierarchies&&tokenValues.aliasHierarchies.length>0)return tokenValues.aliasHierarchies.flatMap((alias=>{const lastAliasToke=alias.at(-1);return lastAliasToke?[tokenMap[lastAliasToke.tokenId].modes[lastAliasToke.modeName].value]:[]}));return[tokenValues.value]})(mode))),gridSize=Math.ceil(Math.sqrt(itemsValue.length));return"color"===token.type?(0,jsx_runtime.jsx)(TokenValuePreview_StylesWrapper,{gridSize,children:itemsValue.map((bgColor=>(0,jsx_runtime.jsx)(StylesColorItem,{bg:bgColor})))}):"dimension"===token.type?(0,jsx_runtime.jsx)(TokenValuePreview_StylesWrapper,{gridSize,children:itemsValue.map((dimension=>(0,jsx_runtime.jsx)(StylesDimensionItem,{children:dimension})))}):void 0}const TokenValuePreview_StylesWrapper=styled_components_browser_esm.Ay.div`
    width: 100px;
    display: grid;
    grid-template-columns: ${({gridSize})=>`repeat(${gridSize}, 1fr)`};
    grid-template-rows: ${({gridSize})=>`repeat(${gridSize}, 1fr)`};
    gap: 4px;
`,StylesColorItem=styled_components_browser_esm.Ay.div`
    aspect-ratio: 1 / 1;
    border-radius: 6px;
    background-color: ${({bg})=>`${bg}`};
    border: 1px solid var(--cck-storybook-color-border-alpha-default);
`,StylesDimensionItem=styled_components_browser_esm.Ay.div`
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--cck-storybook-color-border-alpha-default);
    font: var(--cck-storybook-text-xs-regular);
    color: var(--cck-storybook-color-font-contrast-4);
`;function TokenColorIcon(){return(0,jsx_runtime.jsxs)(StylesColorSvgIcon,{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M5.25 8C5.80228 8 6.25 7.55228 6.25 7C6.25 6.44772 5.80228 6 5.25 6C4.69772 6 4.25 6.44772 4.25 7C4.25 7.55228 4.69772 8 5.25 8Z"}),(0,jsx_runtime.jsx)("path",{d:"M8.75 5C8.75 5.55228 8.30229 6 7.75 6C7.19772 6 6.75 5.55228 6.75 5C6.75 4.44772 7.19772 4 7.75 4C8.30229 4 8.75 4.44772 8.75 5Z"}),(0,jsx_runtime.jsx)("path",{d:"M10.75 7C11.3023 7 11.75 6.55228 11.75 6C11.75 5.44772 11.3023 5 10.75 5C10.1977 5 9.75 5.44772 9.75 6C9.75 6.55228 10.1977 7 10.75 7Z"}),(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14 7.5C14 9.03144 12.6866 9.43713 11.669 9.75148C11.0253 9.9503 10.5 10.1126 10.5 10.5V11.5C10.5 13.5 9.04555 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.5 2 14 3.5 14 7.5ZM8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C9.62994 3 10.864 3.35255 11.6768 4.02193C12.4539 4.66187 13 5.71978 13 7.5C13 7.85645 12.8893 8.0357 12.7546 8.16724C12.5832 8.33456 12.3107 8.47897 11.9137 8.62076C11.7383 8.68339 11.5622 8.73781 11.3722 8.79651L11.3117 8.81522C11.1118 8.87712 10.8809 8.94932 10.6717 9.03399C10.4724 9.11467 10.2052 9.23997 9.97809 9.44624C9.72138 9.67938 9.5 10.0345 9.5 10.5V11.5C9.5 12.2259 9.25348 12.5396 9.03769 12.7033C8.7743 12.9031 8.389 13 8 13Z"})]})}function TokenDimensionIcon(){return(0,jsx_runtime.jsx)(StylesDimensionSvgIcon,{viewBox:"0 0 17 18",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.4597 0.670462C5.91803 0.712111 6.24803 1.11528 6.19803 1.57342L5.84303 4.76042H11.573L11.9447 1.42348C11.9947 0.967005 12.408 0.628812 12.8664 0.670462C13.3247 0.712111 13.6547 1.11528 13.6047 1.57342L13.2497 4.76042H15.833C16.293 4.76042 16.6664 5.1336 16.6664 5.59341C16.6664 6.05322 16.293 6.4264 15.833 6.4264H13.0664L12.5097 11.4243H15.833C16.293 11.4243 16.6664 11.7975 16.6664 12.2573C16.6664 12.7171 16.293 13.0903 15.833 13.0903H12.3247L11.9364 16.5772C11.8864 17.0336 11.473 17.3718 11.0147 17.3302C10.5564 17.2885 10.2264 16.8854 10.2764 16.4272L10.648 13.0903H4.91636L4.52969 16.5772C4.47969 17.0336 4.06636 17.3718 3.60803 17.3302C3.14969 17.2885 2.81803 16.8854 2.8697 16.4272L3.23969 13.0903H0.833028C0.373028 13.0903 -0.000305176 12.7171 -0.000305176 12.2573C-0.000305176 11.7975 0.373028 11.4243 0.833028 11.4243H3.42636L3.98136 6.4264H0.833028C0.373028 6.4264 -0.000305176 6.05322 -0.000305176 5.59341C-0.000305176 5.1336 0.373028 4.76042 0.833028 4.76042H4.16636L4.53803 1.42348C4.58803 0.967005 5.00136 0.628812 5.4597 0.670462ZM10.833 11.4243L11.388 6.4264H5.65803L5.10136 11.4243H10.833Z"})})}function TokenTextIcon(){return(0,jsx_runtime.jsx)(StylesTextSvgIcon,{viewBox:"0 0 16 15",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.49967 1.99967V2.67275C2.49967 3.13299 2.12658 3.50609 1.66634 3.50609C1.2061 3.50609 0.833008 3.13299 0.833008 2.67275V1.64711C0.833008 0.928888 1.4118 0.333008 2.14253 0.333008H14.5235C15.2542 0.333008 15.833 0.92889 15.833 1.64711V2.67275C15.833 3.13299 15.4599 3.50609 14.9997 3.50609C14.5394 3.50609 14.1663 3.13299 14.1663 2.67275V1.99967H9.16634V12.833H11.1902C11.6504 12.833 12.0235 13.2061 12.0235 13.6663C12.0235 14.1266 11.6504 14.4997 11.1902 14.4997H5.47587C5.01563 14.4997 4.64253 14.1266 4.64253 13.6663C4.64253 13.2061 5.01563 12.833 5.47587 12.833H7.49967V1.99967H2.49967Z"})})}function TokenEffectIcon(){return(0,jsx_runtime.jsx)(StylesEffectSvgIcon,{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M280 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24s24 10.7 24 24zm157 84.9l-45.3 45.3c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L403.1 75c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM108.9 75l45.3 45.3c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L75 108.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM24 232l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm400 0l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM154.2 391.8L108.9 437c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l45.3-45.3c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm237.6-33.9L437 403.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-45.3-45.3c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM280 424l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24s24 10.7 24 24zm40-168a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-176 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z"})})}function TokenArrowDownIcon(){return(0,jsx_runtime.jsx)(StylesArrowDownSvgIcon,{height:"17",viewBox:"0 0 9 17",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M4.14645 16.3536C4.34171 16.5488 4.65829 16.5488 4.85355 16.3536L8.03553 13.1716C8.2308 12.9763 8.2308 12.6597 8.03553 12.4645C7.84027 12.2692 7.52369 12.2692 7.32843 12.4645L4.5 15.2929L1.67157 12.4645C1.47631 12.2692 1.15973 12.2692 0.964466 12.4645C0.769203 12.6597 0.769203 12.9763 0.964466 13.1716L4.14645 16.3536ZM4 1C4 1.27614 4.22386 1.5 4.5 1.5C4.77614 1.5 5 1.27614 5 1L4 1ZM5 3C5 2.72386 4.77614 2.5 4.5 2.5C4.22386 2.5 4 2.72386 4 3L5 3ZM4 5C4 5.27614 4.22386 5.5 4.5 5.5C4.77614 5.5 5 5.27614 5 5L4 5ZM5 7C5 6.72386 4.77614 6.5 4.5 6.5C4.22386 6.5 4 6.72386 4 7L5 7ZM4 9C4 9.27614 4.22386 9.5 4.5 9.5C4.77614 9.5 5 9.27614 5 9L4 9ZM5 11C5 10.7239 4.77614 10.5 4.5 10.5C4.22386 10.5 4 10.7239 4 11L5 11ZM4 13C4 13.2761 4.22386 13.5 4.5 13.5C4.77614 13.5 5 13.2761 5 13L4 13ZM5 15C5 14.7239 4.77614 14.5 4.5 14.5C4.22386 14.5 4 14.7239 4 15L5 15ZM4 -2.18557e-08L4 1L5 1L5 2.18557e-08L4 -2.18557e-08ZM4 3L4 5L5 5L5 3L4 3ZM4 7L4 9L5 9L5 7L4 7ZM4 11L4 13L5 13L5 11L4 11ZM4 15L4 16L5 16L5 15L4 15Z"})})}function TokenArrowHeadRightIcon(){return(0,jsx_runtime.jsx)(StylesArrowHeadIcon,{viewBox:"0 0 8 14",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M5.53585 7L0.29285 1.72124C-0.0976156 1.32748 -0.0976165 0.689074 0.292849 0.295317C0.683314 -0.0984392 1.31638 -0.0984391 1.70685 0.295318L7.65674 6.28693C8.04727 6.68075 8.04727 7.31925 7.65674 7.71307L1.70685 13.7047C1.31638 14.0984 0.683314 14.0984 0.292849 13.7047C-0.0976164 13.3109 -0.0976162 12.6725 0.292849 12.2788L5.53585 7Z"})})}function TokenArrowHeadLeftIcon(){return(0,jsx_runtime.jsx)(StylesArrowHeadIcon,{viewBox:"0 0 8 14",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M2.41379 7L7.65679 12.2788C8.04725 12.6725 8.04725 13.3109 7.65679 13.7047C7.26632 14.0984 6.63325 14.0984 6.24279 13.7047L0.292893 7.71307C-0.0976314 7.31925 -0.0976308 6.68075 0.292894 6.28693L6.24279 0.295317C6.63325 -0.0984392 7.26632 -0.0984391 7.65679 0.295318C8.04725 0.689074 8.04725 1.32748 7.65679 1.72124L2.41379 7Z"})})}const StylesArrowHeadIcon=styled_components_browser_esm.Ay.svg`
    flex-shrink: 0;
    width: 18px;
    height: 14px;

    & path {
        fill: var(--cck-storybook-color-font-contrast-2);
    }
`,StylesEffectSvgIcon=styled_components_browser_esm.Ay.svg`
    flex-shrink: 0;
    width: 18px;
    height: 17px;
    fill: var(--cck-storybook-color-font-contrast-2);
`,StylesTextSvgIcon=styled_components_browser_esm.Ay.svg`
    flex-shrink: 0;
    width: 13px;
    height: 12px;
    fill: none;

    & path {
        fill: var(--cck-storybook-color-font-contrast-2);
    }
`,StylesDimensionSvgIcon=styled_components_browser_esm.Ay.svg`
    flex-shrink: 0;
    width: 14px;
    height: 15px;
    fill: none;

    & path {
        fill: var(--cck-storybook-color-font-contrast-2);
    }
`,StylesColorSvgIcon=styled_components_browser_esm.Ay.svg`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: none;

    & path {
        fill: var(--cck-storybook-color-font-contrast-2);
    }
`,StylesArrowDownSvgIcon=styled_components_browser_esm.Ay.svg`
    flex-shrink: 0;
    width: 9px;
    fill: none;

    & path {
        fill: var(--cck-storybook-color-font-contrast-2);
    }
`;function TokenTag({type,text,collectionName,modeName,compact=!1}){return(0,jsx_runtime.jsxs)(TokenTag_StylesWrapper,{hasGap:!!collectionName||!!modeName,compact,children:[(0,jsx_runtime.jsxs)(StyledValueWrapper,{children:[getTokenIconType(type),(0,jsx_runtime.jsx)(StyledValue,{children:text})]}),(0,jsx_runtime.jsxs)(StyledGroupWrapper,{children:[collectionName&&(0,jsx_runtime.jsxs)(StyledGroupRow,{children:[(0,jsx_runtime.jsx)(StyledTitle,{children:"Collection:"}),(0,jsx_runtime.jsx)(StyledText,{children:collectionName})]}),modeName&&(0,jsx_runtime.jsxs)(StyledGroupRow,{children:[(0,jsx_runtime.jsx)(StyledTitle,{children:"Mode:"}),(0,jsx_runtime.jsx)(StyledText,{children:modeName})]})]})]})}function getTokenIconType(type){switch(type){case"color":return(0,jsx_runtime.jsx)(TokenColorIcon,{});case"dimension":return(0,jsx_runtime.jsx)(TokenDimensionIcon,{});case"typography":case"string":return(0,jsx_runtime.jsx)(TokenTextIcon,{});default:return(0,jsx_runtime.jsx)(TokenEffectIcon,{})}}const TokenTag_StylesWrapper=styled_components_browser_esm.Ay.div`
    width: fit-content;
    display: flex;
    flex-direction: column;

    background-color: var(--cck-storybook-color-bg-body-inverse-alpha-2);
    border: 1px solid var(--cck-storybook-color-border-alpha-default);
    padding: 6px 12px;
    border-radius: 6px;

    ${props=>props.compact&&styled_components_browser_esm.AH`
        padding: 2px 12px;
    `}
    
    ${props=>props.hasGap&&styled_components_browser_esm.AH`
        gap: 12px;
    `}
`,StyledValueWrapper=styled_components_browser_esm.Ay.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,StyledGroupWrapper=styled_components_browser_esm.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,StyledGroupRow=styled_components_browser_esm.Ay.div`
    display: flex;
    gap: 4px;
`,StyledTitle=styled_components_browser_esm.Ay.div`
    font: var(--cck-storybook-text-xs-regular);
    color: var(--cck-storybook-color-font-contrast-2);
`,StyledText=styled_components_browser_esm.Ay.div`
    font: var(--cck-storybook-text-xs-medium);
    color: var(--cck-storybook-color-font-contrast-3);
`,StyledValue=styled_components_browser_esm.Ay.div`
    font: var(--cck-storybook-text-sm-medium);
    color: var(--cck-storybook-color-font-contrast-4);
`;function toTokenValueHierarchy(aliasHierarchy){return{tokenId:aliasHierarchy.tokenId,type:aliasHierarchy.type,collectionName:aliasHierarchy.collectionName,modeName:aliasHierarchy.modeName,text:aliasHierarchy.namePath.join(" / ")}}function TokenValues({token,tokenMap}){const[selectedIndex,setSelectedIndex]=(0,react.useState)(0),hierarchies=Object.entries(token.modes).flatMap((([modeName,tokenValue])=>tokenValue.aliasHierarchies?tokenValue.aliasHierarchies.map((aliasHierarchy=>{const lastAliasHierarchyToken=aliasHierarchy[aliasHierarchy.length-1],lastAliasToken=tokenMap[lastAliasHierarchyToken.tokenId];return[{tokenId:token.id,type:token.type,modeName,text:token.namePath.join(" / ")},...aliasHierarchy.map(toTokenValueHierarchy),{tokenId:lastAliasHierarchyToken.tokenId,type:lastAliasHierarchyToken.type,text:lastAliasToken.modes[lastAliasHierarchyToken.modeName].value}]})):[[{tokenId:token.id,type:token.type,modeName,text:token.namePath.join(" / ")},{tokenId:token.id,type:token.type,text:tokenValue.value}]]));(0,react.useEffect)((()=>{setSelectedIndex(0)}),[token]);const maxIndex=hierarchies.length-1;return(0,jsx_runtime.jsxs)(StylesContainer,{children:[(0,jsx_runtime.jsx)(TokenValues_StylesWrapper,{selectedIndex,children:hierarchies.map((hierarchy=>(0,jsx_runtime.jsx)(StylesHierarchyWrapper,{children:hierarchy.map(((h,index)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TokenTag,{...h}),index!==hierarchy.length-1&&(0,jsx_runtime.jsx)(TokenArrowDownIcon,{})]})))})))}),selectedIndex>0&&(0,jsx_runtime.jsx)(StylesButton,{position:"left",onClick:()=>setSelectedIndex(Math.max(selectedIndex-1,0)),children:(0,jsx_runtime.jsx)(TokenArrowHeadLeftIcon,{})}),selectedIndex<maxIndex&&(0,jsx_runtime.jsx)(StylesButton,{position:"right",onClick:()=>setSelectedIndex(Math.min(selectedIndex+1,maxIndex)),children:(0,jsx_runtime.jsx)(TokenArrowHeadRightIcon,{})})]})}const StylesContainer=styled_components_browser_esm.Ay.div`
    display: flex;
    overflow: hidden;
    position: relative;
`,StylesButton=styled_components_browser_esm.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid var(--cck-storybook-color-border-alpha-default);
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    
    &:hover {
        background-color: var(--cck-storybook-color-border-alpha-2);
    }

    ${props=>"left"===props.position&&styled_components_browser_esm.AH`
        left: 0px;
    `}

    ${props=>"right"===props.position&&styled_components_browser_esm.AH`
        right: 0px;
    `}
`,TokenValues_StylesWrapper=styled_components_browser_esm.Ay.div`
    width: 100%;
    display: flex;
    transition: transform 300ms;

    transform: ${({selectedIndex})=>`translateX(-${selectedIndex}00%)`};;
`,StylesHierarchyWrapper=styled_components_browser_esm.Ay.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin: 12px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
`;function TokenInfo({token,tokenMap}){const hasPreview=function hasTokenPreview(token){return"color"===token.type||"dimension"===token.type}(token);return(0,jsx_runtime.jsxs)(TokenInfo_StylesWrapper,{children:[(0,jsx_runtime.jsxs)(StylesRow,{children:[(0,jsx_runtime.jsx)(TokenSection,{title:"Name",children:(0,jsx_runtime.jsx)(StylesName,{children:token.namePath.join(" / ")})}),hasPreview&&(0,jsx_runtime.jsx)(TokenSection,{title:"Preview",children:(0,jsx_runtime.jsx)(TokenValuePreview,{token,tokenMap})})]}),(0,jsx_runtime.jsx)(TokenSection,{title:"Value Hirarchy",children:(0,jsx_runtime.jsx)(TokenValues,{token,tokenMap})}),(0,jsx_runtime.jsx)(TokenSection,{title:"CSS Varibale",children:(0,jsx_runtime.jsx)("code",{children:token.variable.css})}),(0,jsx_runtime.jsx)(TokenSection,{title:"SCSS Varibale",children:(0,jsx_runtime.jsx)("code",{children:token.variable.scss})})]})}const TokenInfo_StylesWrapper=styled_components_browser_esm.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--cck-storybook-color-bg-body-inverse-alpha-2);
    border: 1px solid var(--cck-storybook-color-border-alpha-default);
    padding: 24px 18px;
    border-radius: 6px;

    & code {
        align-self: baseline;
        font: var(--cck-storybook-text-sm-regular);
        padding: var(--cck-storybook-size-2) var(--cck-storybook-size-6);
        color: var(--cck-storybook-color-font-contrast-4);
    }
`,StylesRow=styled_components_browser_esm.Ay.div`
    display: flex;
    justify-content: space-between;
`,StylesName=styled_components_browser_esm.Ay.div`
    font: var(--cck-storybook-text-md-regular);
    color: var(--cck-storybook-color-font-contrast-4);
`;function MdxTokenTable(){const selectedCckTheme=(0,storybook_theme_switcher_src.RJ)();if(!selectedCckTheme)return;const tokenDictionary=selectedCckTheme.tokenDictionary,[selectedCollection,setSelectedCollection]=(0,react.useState)(tokenDictionary.collectionNames[0].name),[selectedToken,setSelectedToken]=(0,react.useState)(null);if(!tokenDictionary.collectionNames.some((collection=>collection.name===selectedCollection)))return setSelectedCollection(tokenDictionary.collectionNames[0].name),void setSelectedToken(null);const modes=tokenDictionary.collectionModeNames[selectedCollection].map((mode=>mode.name)),getTokenList=(groupOrTokenIds,groupNames="")=>{const result=[];return(0,utils_src.Qs)(groupOrTokenIds,((childGroupOrTokenIds,groupOrTokenIdsKey)=>{if(Array.isArray(childGroupOrTokenIds))groupOrTokenIdsKey.startsWith("__")?result.push(""):result.push(groupNames+groupOrTokenIdsKey),childGroupOrTokenIds.forEach((tokenId=>{result.push(tokenDictionary.tokenMap[tokenId])}));else{const currentGroupNames=groupOrTokenIdsKey.startsWith("__")?groupNames+"/":groupNames+groupOrTokenIdsKey+"/";result.push(...getTokenList(childGroupOrTokenIds,currentGroupNames))}})),result},tokenList=(0,react.useMemo)((()=>getTokenList(tokenDictionary.collectionGroupHierarchy[selectedCollection])),[tokenDictionary.collectionGroupHierarchy,selectedCollection]);return(0,jsx_runtime.jsxs)(MdxTokenTable_StyledWrapper,{children:[(0,jsx_runtime.jsxs)(StyledTokensWrapper,{children:[(0,jsx_runtime.jsx)(StyledCollectionWrapper,{children:tokenDictionary.collectionNames.map((collectionName=>(0,jsx_runtime.jsx)(StyledCollection,{selected:selectedCollection===collectionName.name,onClick:()=>setSelectedCollection(collectionName.name),children:(0,jsx_runtime.jsx)("span",{children:collectionName.name})})))}),(0,jsx_runtime.jsxs)(MdxTokenTable_StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{className:"header",children:[(0,jsx_runtime.jsx)("th",{children:"Name"}),modes.map((mode=>(0,jsx_runtime.jsx)("th",{children:mode})))]})}),(0,jsx_runtime.jsx)("tbody",{children:tokenList.map((tokenOrGroupName=>"string"==typeof tokenOrGroupName?(0,jsx_runtime.jsx)("tr",{className:"group",children:(0,jsx_runtime.jsx)("td",{colSpan:modes.length+1,children:tokenOrGroupName})}):(0,jsx_runtime.jsxs)("tr",{className:selectedToken?.id===tokenOrGroupName.id?"selected":"",onClick:()=>setSelectedToken(tokenDictionary.tokenMap[tokenOrGroupName.id]),children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(StyledTableName,{children:tokenOrGroupName.namePath.at(-1)})}),modes.map((mode=>{const aliasTokenId=tokenOrGroupName.modes[mode].aliasTokenId;if(aliasTokenId){const aliasToken=tokenDictionary.tokenMap[aliasTokenId];return(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(TokenTag,{tokenId:aliasToken.id,type:aliasToken.type,text:aliasToken.namePath.join(" / "),compact:!0})})}return(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(TokenTag,{tokenId:tokenOrGroupName.id,type:tokenOrGroupName.type,text:tokenOrGroupName.modes[mode].value,compact:!0})})}))]})))})]})]}),selectedToken&&(0,jsx_runtime.jsx)(StyledTokenInfoWrapper,{children:(0,jsx_runtime.jsx)(TokenInfo,{token:selectedToken,tokenMap:tokenDictionary.tokenMap})})]})}const MdxTokenTable_StyledWrapper=styled_components_browser_esm.Ay.div`
    display: flex;
    gap: 24px;
`,StyledTokensWrapper=styled_components_browser_esm.Ay.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
`,StyledCollectionWrapper=styled_components_browser_esm.Ay.div`
    display: flex;
    gap: 12px;
`,StyledCollection=styled_components_browser_esm.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font: var(--cck-storybook-text-sm-medium);
    color: var(--cck-storybook-color-font-contrast-4);
    border: 1px solid var(--cck-storybook-color-border-alpha-2);
    border-radius: 500px;
    padding: 4px 20px;
    background-color: var(--cck-storybook-color-bg-body-inverse-alpha-2);
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${props=>props.selected&&styled_components_browser_esm.AH`
        background-color: var(--cck-storybook-color-brand-alpha-6);
        border: 1px solid var(--cck-storybook-color-brand-default);
    `}
`,StyledTokenInfoWrapper=styled_components_browser_esm.Ay.div`
    width: 400px;
    flex-shrink: 0;
    align-self: baseline;
    position: sticky;
    top: 80px;
`,MdxTokenTable_StyledTable=styled_components_browser_esm.Ay.table`
    border: none;
    border-spacing: 0;
    margin-top: 32px;
    
    & th {
        font: var(--cck-storybook-text-sm-regular);
        color: var(--cck-storybook-color-font-contrast-4);
        border: 1px solid var(--cck-storybook-color-border-alpha-default);
        border-left-width: 0;
        height: 40px;
        padding: 0 16px;
        text-align: left;
    }
    
    & tr:not(.group):not(.header) {
        cursor: pointer;
    }

    & tr:not(.group):not(.selected):not(.header):hover {
        background-color: var(--cck-storybook-color-brand-alpha-3);
    }
    
    & tr.selected {
        background-color: var(--cck-storybook-color-brand-alpha-5);
    }

    & th:first-of-type {
        border-left-width: 1px;
    }
    
    & tr.group td {
        font: var(--cck-storybook-text-sm-semibold);
        color: var(--cck-storybook-color-font-contrast-4);
        min-height: 40px;
        padding-top: 32px;
        padding-bottom: 12px;
    }

    & tr.group + tr td {
        border-top-width: 1px;
    }
    
    & tr:not(.group) td {
        border: 1px solid var(--cck-storybook-color-border-card-default);
        border-top-width: 0;
        border-left-width: 0;
        padding: 0 16px;
    }

    & tr:not(.group) td:first-of-type {
        border-left-width: 1px;
    }
`,StyledTableName=styled_components_browser_esm.Ay.div`
    display: flex;
    align-items: center;
    font: var(--cck-storybook-text-sm-regular);
    color: var(--cck-storybook-color-font-contrast-4);
    min-height: 40px;
`}}]);
//# sourceMappingURL=371.50b5eb7f.iframe.bundle.js.map