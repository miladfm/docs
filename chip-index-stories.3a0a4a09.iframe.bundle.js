(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[9046],{"./packages/angular/button/src/lib/icon-button/icon-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>IconButtonComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var icon_button_componentngResource=__webpack_require__("./packages/angular/button/src/lib/icon-button/icon-button.component.scss?ngResource"),icon_button_componentngResource_default=__webpack_require__.n(icon_button_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts");let IconButtonComponent=class IconButtonComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="iconButton",this.extraHostElementClassConditions=(0,core.computed)((()=>[]))}};IconButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[],selector:"button[cck-icon-button]",template:'<ng-content></ng-content>\r\n\r\n<div [class]="classNames().backdrop"></div>\r\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"classNames().host"},styles:[icon_button_componentngResource_default()]})],IconButtonComponent)},"./packages/angular/form-field/src/lib/chip/chip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>ChipComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var chip_componentngResource=__webpack_require__("./packages/angular/form-field/src/lib/chip/chip.component.scss?ngResource"),chip_componentngResource_default=__webpack_require__.n(chip_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),icon_button_component=__webpack_require__("./packages/angular/button/src/lib/icon-button/icon-button.component.ts"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),svg_icon_component=__webpack_require__("./packages/angular/icon/src/lib/svg-icon/svg-icon.component.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts"),form_field_store=__webpack_require__("./packages/angular/form-field/src/lib/form-field.store.ts");let ChipComponent=class ChipComponent extends ui_base_component.W{constructor(){super(),this.componentName="chip",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.disabled()??this.formFieldStore.state.disabled(),classes:this.classNames().disabled},{if:this.removable(),classes:this.classNames().removable}])),this.formFieldStore=(0,form_field_store.fy)(),this.removable=(0,core.input)(),this.disabled=(0,core.input)(void 0,{transform:src.Ix}),this.remove=(0,core.output)();const removeIcon=this.uiComponentConfig.chip.component?.chipRemoveIcon;if(!removeIcon)throw new Error("`chipRemoveIcon` has not defined in `uiComponentConfig` of selected theme");this.removeIcon=removeIcon}onRemoveBtnClick(){this.remove.emit()}static{this.ctorParameters=()=>[]}static{this.propDecorators={removable:[{type:core.Input,args:[{isSignal:!0,alias:"removable",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],remove:[{type:core.Output,args:["remove"]}]}}};ChipComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[svg_icon_component.D,icon_button_component.x],selector:"cck-chip",template:'<div [class]="classNames().contentWrapper">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n@if(removable()) {\r\n  <div [class]="classNames().removeIconWrapper">\r\n    <button cck-icon-button type="null" size="null" color="null" (click)="onRemoveBtnClick()">\r\n      <cck-svg-icon [icon]="removeIcon"></cck-svg-icon>\r\n    </button>\r\n  </div>\r\n}',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"hostClassNames()"},styles:[chip_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[])],ChipComponent)},"./packages/angular/form-field/stories/chip/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Size:()=>Size,__namedExportsOrder:()=>index_stories_namedExportsOrder,default:()=>index_stories});var common=__webpack_require__("./node_modules/.pnpm/@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/.pnpm/@angular+platform-browser@18.2.0_@angular+animations@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_z_2sr5rm2pfwkeyfrnhcqlecnf54/node_modules/@angular/platform-browser/fesm2022/animations.mjs"),angular=__webpack_require__("@storybook/angular"),tokens=__webpack_require__("./packages/angular/core/src/tokens.ts"),src=__webpack_require__("./packages/internal/storybook-theme-switcher/src/index.ts");var form_field_component=__webpack_require__("./packages/angular/form-field/src/lib/form-field/form-field.component.ts"),label_component=__webpack_require__("./packages/angular/form-field/src/lib/label/label.component.ts"),error_component=__webpack_require__("./packages/angular/form-field/src/lib/error/error.component.ts"),option_component=__webpack_require__("./packages/angular/form-field/src/lib/option/option.component.ts"),option_group_component=__webpack_require__("./packages/angular/form-field/src/lib/option-group/option-group.component.ts"),select_preview_component=__webpack_require__("./packages/angular/form-field/src/lib/select-preview/select-preview.component.ts"),chip_component=__webpack_require__("./packages/angular/form-field/src/lib/chip/chip.component.ts");const Default={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."},source:{code:'\n          <cck-chip>Default</cck-chip>\n          <cck-chip [removable]="true">Removable</cck-chip>\n          <cck-chip disabled="">Disabled</cck-chip>\n        '}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <story-table\n        [headers]="[\'Default\', \'Removable\', \'Disabled\']">\n        <story-table-cell row="0" col="0">\n          <cck-chip>Default</cck-chip>\n        </story-table-cell>\n        <story-table-cell row="0" col="1">\n          <cck-chip [removable]="true">Removable</cck-chip>\n        </story-table-cell>\n        <story-table-cell row="0" col="2">\n          <cck-chip disabled="">Disabled</cck-chip>\n        </story-table-cell>\n      </story-table>\n    '})},Size={name:"Size",tags:["uiComponentName:chip","uiComponentPropName:size"],parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."},source:{code:'\n          <cck-chip [size]="...">Chip Value</cck-chip>\n        '}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <story-table\n        [headers]="uiComponentConfig?.chip.size?.values"\n        [rowHeaders]="uiComponentConfig?.chip.type?.values ?? []">\n        @for (type of uiComponentConfig?.chip.type?.values ?? [null]; let row = $index; track type) {\n          @for (size of uiComponentConfig?.chip.size?.values; let col = $index; track size) {\n            <story-table-cell [row]="row" [col]="col">\n              <cck-chip [size]="size" [type]="type">Chip Value</cck-chip>\n            </story-table-cell>\n          }\n        }\n      </story-table>     \n    '})},index_stories={component:chip_component.w,title:"UI Components/Chip",tags:["autodocs"],decorators:[(0,angular.moduleMetadata)({imports:[form_field_component.K,label_component.U,error_component.A,common.CommonModule,fesm2022_forms.YN,fesm2022_forms.X1,option_component.P,option_group_component.Q,select_preview_component.M,animations.BrowserAnimationsModule],providers:[{provide:tokens.k,useFactory:()=>(0,src.cQ)()?.uiComponentConfig}]})],parameters:{docs:{description:{component:["The `ChipComponent` from `@cocokits` is a versatile UI element designed to display compact pieces of information, such as inputs, attributes, or actions. Chips enhance user interfaces by providing a concise and interactive way to present essential data, improving both aesthetics and functionality. This component seamlessly integrates with multiple design system themes, ensuring a consistent and cohesive look across various application styles."].join("\n")}}},argTypes:{disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:""}}}},args:{}},index_stories_namedExportsOrder=["Default","Size"]},"./packages/angular/button/src/lib/icon-button/icon-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.5.7_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.5.7_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cck-icon-button {\n  position: relative;\n}\n\n.cck-icon-button__backdrop {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/form-field/src/lib/chip/chip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.5.7_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.5.7_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);