(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[8476],{"./packages/angular/core/src/tokens.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>UIComponentConfig});const UIComponentConfig=new(__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs").InjectionToken)("UI_COMPONENT_CONFIG")},"./packages/angular/core/src/ui-base.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>_UiBaseComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./packages/common/utils/src/index.ts");function generateResult(host,prefix){const attrs=Object.values(host.nativeElement.attributes).filter((attrName=>attrName.name.startsWith(prefix)));return(0,src.xW)(attrs,(attr=>({[attr.name.replace(prefix,"")]:attr.value})))}var core_src=__webpack_require__("./packages/common/core/src/index.ts"),tokens=__webpack_require__("./packages/angular/core/src/tokens.ts");let _UiBaseComponent=class _UiBaseComponent{constructor(){this.uiComponentConfig=(0,core.inject)(tokens.k),this._type=(0,core.input)(void 0,{alias:"type"}),this._size=(0,core.input)(void 0,{alias:"size"}),this._color=(0,core.input)(void 0,{alias:"color"}),this._additional=function fromAttrWithPrefix(prefix){const host=(0,core.inject)(core.ElementRef),value=(0,core.signal)(generateResult(host,prefix)),observer=new MutationObserver((function(mutations){mutations.forEach((function(mutation){const attrName=mutation.attributeName;"attributes"===mutation.type&&attrName&&attrName.startsWith(prefix)&&value.set(generateResult(host,prefix))}))}));return observer.observe(host.nativeElement,{attributes:!0}),(0,core.inject)(core.DestroyRef).onDestroy((()=>observer.disconnect())),value.asReadonly()}("data-cck-"),this.type=(0,core.computed)((()=>this._type())),this.size=(0,core.computed)((()=>this._size())),this.color=(0,core.computed)((()=>this._color())),this.additional=(0,core.computed)((()=>this._additional())),this.classNames=(0,core.computed)((()=>(0,core_src.Zz)(this.componentName,{type:this.baseClassOptions.skipType?null:this.type(),size:this.baseClassOptions.skipSize?null:this.size(),color:this.baseClassOptions.skipColor?null:this.color(),additional:this.baseClassOptions.skipAdditional?void 0:this.additional()},this.uiComponentConfig))),this.hostClassNames=(0,core.computed)((()=>[...this.classNames().host,...this.extraHostElementClassConditions().flatMap((condition=>condition.if?condition.classes:[]))])),this.baseClassOptions={skipType:!1,skipColor:!1,skipSize:!1,skipAdditional:!1}}static{this.propDecorators={_type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],_size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],_color:[{type:core.Input,args:[{isSignal:!0,alias:"color",required:!1,transform:void 0}]}]}}};_UiBaseComponent=(0,tslib_es6.Cg)([(0,core.Directive)()],_UiBaseComponent)},"./packages/angular/toggle/stories/toggle/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,NgModel:()=>NgModel,ReactiveForm:()=>ReactiveForm,Size:()=>Size,ThemeCocokitsBox:()=>ThemeCocokitsBox,Type:()=>Type,__namedExportsOrder:()=>index_stories_namedExportsOrder,default:()=>index_stories});var fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),angular=__webpack_require__("@storybook/angular?8cb6"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),tokens=__webpack_require__("./packages/angular/core/src/tokens.ts"),src=__webpack_require__("./packages/internal/storybook-theme-switcher/src/index.ts");var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var toggle_componentngResource=__webpack_require__("./packages/angular/toggle/src/lib/toggle/toggle.component.scss?ngResource"),toggle_componentngResource_default=__webpack_require__.n(toggle_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),utils_src=__webpack_require__("./packages/common/utils/src/index.ts");let NEXT_ID=1;const TOGGLE_CONTROL_VALUE_ACCESSOR={provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>ToggleComponent)),multi:!0};let ToggleComponent=class ToggleComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="toggle",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.disabled(),classes:this.classNames().disabled},{if:this.checked(),classes:this.classNames().checked},{if:!this.checked(),classes:this.classNames().unchecked},{if:"before"===this.labelPosition(),classes:this.classNames().labelBefore}])),this.cd=(0,core.inject)(core.ChangeDetectorRef),this.elemRef=(0,core.inject)(core.ElementRef),this.id=(0,core.input)("TOGGLE_"+NEXT_ID++),this.labelPosition=(0,core.input)("after"),this.checked=(0,core.model)(!1),this._disabled=(0,core.model)(void 0,{alias:"disabled"}),this.disabled=(0,core.computed)((()=>(0,utils_src.Ix)(this._disabled()))),this.change=(0,core.output)(),this.onTouched=()=>{},this.controlValueAccessorChangeFn=()=>{}}toggle(){this.setChecked(!this.checked())}setChecked(checked){this.checked()!==checked&&(this.checked.set(checked),this.controlValueAccessorChangeFn(checked),this.change.emit({checked}))}onHostClick(event){event.target===this.elemRef.nativeElement&&this.toggle()}onInputClick(){this.toggle()}onInteractionEvent(event){event.stopPropagation()}onBlur(){Promise.resolve().then((()=>{this.onTouched(),this.cd.markForCheck()}))}writeValue(value){this.checked.set(!!value)}registerOnChange(fn){this.controlValueAccessorChangeFn=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this._disabled.set(isDisabled)}static{this.propDecorators={id:[{type:core.Input,args:[{isSignal:!0,alias:"id",required:!1,transform:void 0}]}],labelPosition:[{type:core.Input,args:[{isSignal:!0,alias:"labelPosition",required:!1,transform:void 0}]}],checked:[{type:core.Input,args:[{isSignal:!0,alias:"checked",required:!1}]},{type:core.Output,args:["checkedChange"]}],_disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1}]},{type:core.Output,args:["disabledChange"]}],change:[{type:core.Output,args:["change"]}]}}};ToggleComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[],selector:"cck-toggle",template:'<label [class]="classNames().label" [for]="id()">\r\n  <div [class]="classNames().sliderWrapper">\r\n    <input\r\n      type="checkbox"\r\n      [class]="classNames().input"\r\n      [checked]="checked()"\r\n      [disabled]="disabled()"\r\n      [id]="id()"\r\n      (blur)="onBlur()"\r\n      (click)="onInputClick()"\r\n      (change)="onInteractionEvent($event)" />\r\n\r\n    <div [class]="classNames().thumb"></div>\r\n    <div [class]="classNames().backdrop"></div>\r\n  </div>\r\n\r\n  <ng-content></ng-content>\r\n</label>\r\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,providers:[TOGGLE_CONTROL_VALUE_ACCESSOR],host:{"[class]":"hostClassNames()","(click)":"onHostClick($event)"},styles:[toggle_componentngResource_default()]})],ToggleComponent);const Default={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <story-table\n        [headers]="[\'Default\', \'Label Before\', \'Disabled\']">\n        \n        \x3c!-- Default --\x3e\n        <story-table-cell row="0" col="0">\n          <cck-toggle checked="true">Slide me!</cck-toggle>\n        </story-table-cell>\n        \n        \x3c!-- Label Before --\x3e\n        <story-table-cell row="0" col="1">\n          <cck-toggle checked="true" [labelPosition]="\'before\'">Slide me!</cck-toggle>\n        </story-table-cell>\n        \n        \x3c!-- Disabled --\x3e\n        <story-table-cell row="0" col="2">\n          <cck-toggle checked="true" disabled="true">Slide me!</cck-toggle>\n        </story-table-cell>\n      </story-table>\n    '})},Type={name:"Type",tags:["uiComponentName:toggle","uiComponentPropName:type"],parameters:{docs:{description:{story:"Displays variations in appearance and functionality, demonstrating how different types can be used to create unique button styles."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <story-table\n        [headers]="uiComponentConfig?.toggle.type?.values">\n        @for (type of uiComponentConfig?.toggle.type?.values; let i = $index; track type) {\n          <story-table-cell row="0" [col]="i">\n            <cck-toggle [type]="type"></cck-toggle>\n          </story-table-cell>\n        }\n      </story-table>\n    '})},Size={name:"Size",tags:["uiComponentName:toggle","uiComponentPropName:size"],parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <story-table\n        [headers]="uiComponentConfig?.toggle.size?.values"\n        [rowHeaders]="uiComponentConfig?.toggle.type?.values ?? []">\n        @for (type of uiComponentConfig?.toggle.type?.values ?? [null]; let row = $index; track type) {\n          @for (size of uiComponentConfig?.toggle.size?.values; let col = $index; track size) {\n            <story-table-cell [row]="row" [col]="col">\n              <cck-toggle checked="true" [size]="size" [type]="type"></cck-toggle>\n            </story-table-cell>\n          }\n        }\n      </story-table> \n    '})},Color={name:"Color",tags:["uiComponentName:toggle","uiComponentPropName:color"],parameters:{docs:{description:{story:"Color options enable seamless integration with various themes or to highlight specific actions."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <story-table\n        [headers]="uiComponentConfig?.toggle.color?.values"\n        [rowHeaders]="uiComponentConfig?.toggle.type?.values ?? []">\n        @for (type of uiComponentConfig?.toggle.type?.values ?? [null]; let row = $index; track type) {\n          @for (color of uiComponentConfig?.toggle.color?.values; let col = $index; track color) {\n            <story-table-cell [row]="row" [col]="col">\n              <cck-toggle checked="true" [color]="color" [type]="type"></cck-toggle>\n            </story-table-cell>\n          }\n        }\n      </story-table>  \n    '})},ThemeCocokitsBox={name:"Theme Cocokits: Box",tags:["theme:cocokits"],parameters:{docs:{description:{story:"An advanced example of the toggle component featuring a custom implementation and design that incorporates toggle functionality within box selections, enhancing interactivity and visual presentation."},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,modelValue:!0},template:'\n          <cck-toggle [(ngModel)]="modelValue" labelPosition="after" class="story-theme-cocokits-toggle-box">\n            <div class="flex-col">\n              <span class="story-theme-cocokits-toggle-box__title">Enable early access</span>\n              <span class="story-theme-cocokits-toggle-box__text">Get access to new features before they are released.</span>\n            </div>\n          </cck-toggle>\n      \n    '})},NgModel={name:"NgModel",parameters:{docs:{description:{story:"Demonstrates how to use Angular's NgModel for two-way data binding, enabling automatic synchronization between the UI element and the model."},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,modelValue:!0},template:'\n      <story-columns>\n        <story-column>\n          <cck-toggle [(ngModel)]="modelValue"></cck-toggle>\n        </story-column>\n        \n        <story-column>\n          <div class="p-sm-regular-3">NgModel Value: {{modelValue}}</div>\n          <button class="story-button" (click)="modelValue = false">Set To False</button>\n          <button class="story-button" (click)="modelValue = true">Set To True</button>\n        </story-column>\n      </story-columns>\n    '})},ReactiveForm={name:"ReactiveForm",parameters:{docs:{description:{story:"Illustrates integration within Angular's Reactive Forms, focusing on form control, validation, and efficient state management."},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,control:new fesm2022_forms.MJ(!0)},template:'\n      <story-columns>\n        <story-column>\n          <cck-toggle [formControl]="control"></cck-toggle>\n        </story-column>\n        \n        <story-column>\n          <div class="p-sm-regular-3">Control Value: {{control.value}}</div>\n          <button class="story-button" (click)="control.reset()">Reset</button>\n          <button class="story-button" (click)="control.setValue(true)">Set To True</button>\n          <button class="story-button" (click)="control.setValue(false)">Set to False</button>\n          <button class="story-button" (click)="control.disabled ? control.enable() : control.disable()">Toggle Disable</button>\n        </story-column>\n      </story-columns>\n    '})},index_stories={component:ToggleComponent,subcomponents:[ui_base_component.W],title:"UI Components/Toggle",tags:["autodocs"],decorators:[(0,angular.moduleMetadata)({imports:[fesm2022_forms.YN,fesm2022_forms.X1],providers:[{provide:tokens.k,useFactory:()=>(0,src.cQ)()?.uiComponentConfig}]})],parameters:{docs:{description:{component:["The `ToggleComponent` from `@cocokits` is a simple yet powerful UI control that allows users to switch a single option on or off. Commonly used to activate or deactivate settings, toggles provide a clear and intuitive way to manage binary options, enhancing user control over specific preferences or features. This component seamlessly integrates with multiple design system themes, ensuring a consistent and visually cohesive experience across various applications."].join("\n")}}},argTypes:{_disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:""}}}},args:{}},index_stories_namedExportsOrder=["Default","Type","Size","Color","ThemeCocokitsBox","NgModel","ReactiveForm"]},"./packages/angular/toggle/src/lib/toggle/toggle.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.5.7_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.5.7_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);