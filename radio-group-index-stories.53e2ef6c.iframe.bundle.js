(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[989],{"./packages/angular/core/src/tokens.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>UIComponentConfig});const UIComponentConfig=new(__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs").InjectionToken)("UI_COMPONENT_CONFIG")},"./packages/angular/core/src/ui-base.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>_UiBaseComponent});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),_cocokits_angular_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/angular/utils/src/lib/signal/from-attr.ts"),_cocokits_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/common/core/src/index.ts"),_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/angular/core/src/tokens.ts");let _UiBaseComponent=class _UiBaseComponent{constructor(){this.uiComponentConfig=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_tokens__WEBPACK_IMPORTED_MODULE_2__.k),this._type=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(void 0,{alias:"type"}),this._size=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(void 0,{alias:"size"}),this._color=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(void 0,{alias:"color"}),this._additional=(0,_cocokits_angular_utils__WEBPACK_IMPORTED_MODULE_3__.yD)("data-cck-"),this.type=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>this._type())),this.size=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>this._size())),this.color=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>this._color())),this.additional=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>this._additional())),this.classNames=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>(0,_cocokits_core__WEBPACK_IMPORTED_MODULE_0__.Zz)(this.componentName,{type:this.baseClassOptions.skipType?null:this.type(),size:this.baseClassOptions.skipSize?null:this.size(),color:this.baseClassOptions.skipColor?null:this.color(),additional:this.baseClassOptions.skipAdditional?void 0:this.additional()},this.uiComponentConfig))),this.hostClassNames=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)((()=>[...this.classNames().host,...this.extraHostElementClassConditions().flatMap((condition=>condition.if?condition.classes:[]))])),this.baseClassOptions={skipType:!1,skipColor:!1,skipSize:!1,skipAdditional:!1}}static#_=this.propDecorators={_type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],_size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],_color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,args:[{isSignal:!0,alias:"color",required:!1,transform:void 0}]}]}};_UiBaseComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)()],_UiBaseComponent)},"./packages/angular/radio/src/lib/radio/radio.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{dx:()=>RadioButtonComponent,Y2:()=>RadioGroupComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var radio_button_componentngResource=__webpack_require__("./packages/angular/radio/src/lib/radio/radio-button.component.scss?ngResource"),radio_button_componentngResource_default=__webpack_require__.n(radio_button_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),trust_html_pipe=__webpack_require__("./packages/angular/utils/src/lib/pipes/sanitizer/trust-html.pipe.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts");let NEXT_ID=1;const RADIO_GROUP_CONTROL_VALUE_ACCESSOR={provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>RadioGroupComponent)),multi:!0};let RadioGroupComponent=class RadioGroupComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="radioGroup",this.extraHostElementClassConditions=(0,core.computed)((()=>[])),this.name=(0,core.input)("cck-radio-group-"+NEXT_ID++),this.selected=(0,core.model)(),this._disabled=(0,core.model)(null,{alias:"disabled"}),this.disabled=(0,core.computed)((()=>(0,src.Ix)(this._disabled()))),this.change=(0,core.output)(),this.selectedRadio=(0,core.signal)(null),this.__onSelectedRadioChanged=(0,core.effect)((()=>{const selectedRadio=this.selectedRadio();selectedRadio&&this.change.emit({source:selectedRadio,value:selectedRadio.value()})})),this.onTouched=()=>{},this._controlValueAccessorChangeFn=()=>{}}_setSelectedRadio(radio){this.selectedRadio.set(radio),this.selected.set(radio.value()),this._controlValueAccessorChangeFn(radio.value())}writeValue(value){this.selected.set(value)}registerOnChange(fn){this._controlValueAccessorChangeFn=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){this._disabled.set(isDisabled)}static#_=this.propDecorators={name:[{type:core.Input,args:[{isSignal:!0,alias:"name",required:!1,transform:void 0}]}],selected:[{type:core.Input,args:[{isSignal:!0,alias:"selected",required:!1}]},{type:core.Output,args:["selectedChange"]}],_disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1}]},{type:core.Output,args:["disabledChange"]}],change:[{type:core.Output,args:["change"]}]}};RadioGroupComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[],selector:"cck-radio-group",template:"<ng-content></ng-content>",changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,providers:[RADIO_GROUP_CONTROL_VALUE_ACCESSOR],host:{"[class]":"classNames().host"}})],RadioGroupComponent);let RadioButtonComponent=class RadioButtonComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="radioButton",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.checked(),classes:this.classNames().checked},{if:!this.checked(),classes:this.classNames().unchecked},{if:this.disabled(),classes:this.classNames().disabled}])),this.radioGroup=(0,core.inject)(RadioGroupComponent,{optional:!0}),this.size=(0,core.computed)((()=>this._size()??this.radioGroup?.size())),this.color=(0,core.computed)((()=>this._color()??this.radioGroup?.color())),this.additional=(0,core.computed)((()=>({...this._additional(),...this.radioGroup?.additional()}))),this._name=(0,core.input)(void 0,{alias:"name"}),this.name=(0,core.computed)((()=>this._name()||this.radioGroup?.name())),this._checked=(0,core.model)(void 0,{alias:"checked"}),this.checked=(0,core.computed)((()=>this.radioGroup?this.radioGroup.selected()===this.value():this._checked())),this.value=core.input.required(),this._disabled=(0,core.input)(void 0,{alias:"disabled"}),this.disabled=(0,core.computed)((()=>this._disabled()??this.radioGroup?.disabled())),this.id=(0,core.input)("cck-radio-"+NEXT_ID++),this.change=(0,core.output)()}_onInputChange(event){event.stopPropagation(),this.change.emit({source:this,value:this.value()}),this.radioGroup?._setSelectedRadio(this),this._checked.set(!0)}static#_=this.propDecorators={_name:[{type:core.Input,args:[{isSignal:!0,alias:"name",required:!1,transform:void 0}]}],_checked:[{type:core.Input,args:[{isSignal:!0,alias:"checked",required:!1}]},{type:core.Output,args:["checkedChange"]}],value:[{type:core.Input,args:[{isSignal:!0,alias:"value",required:!0,transform:void 0}]}],_disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],id:[{type:core.Input,args:[{isSignal:!0,alias:"id",required:!1,transform:void 0}]}],change:[{type:core.Output,args:["change"]}]}};RadioButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[trust_html_pipe.g],selector:"cck-radio-button",template:'<div [class]="classNames().wrapper">\n  <div [class]="classNames().inputWrapper">\n    <input\n      #input\n      [class]="classNames().input"\n      type="radio"\n      [id]="id()"\n      [checked]="checked()"\n      [disabled]="disabled()"\n      [attr.name]="name()"\n      [attr.value]="value()"\n      (change)="_onInputChange($event)">\n\n    <div [class]="classNames().backdrop"></div>\n    <div [class]="classNames().background" [innerHtml]="uiComponentConfig.radioButton.component.radioCheckmark | trustHtml"></div>\n\n  </div>\n  <label [class]="classNames().label" [for]="id()">\n    <ng-content></ng-content>\n  </label>\n</div>',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"hostClassNames()"},styles:[radio_button_componentngResource_default()]})],RadioButtonComponent)},"./packages/angular/utils/src/lib/pipes/sanitizer/trust-html.pipe.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>TrustHtmlPipe});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+platform-browser@18.2.0_@angular+animations@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_z_2sr5rm2pfwkeyfrnhcqlecnf54/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs");let TrustHtmlPipe=class TrustHtmlPipe{constructor(){this.sanitizer=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)}transform(htmlString){return this.sanitizer.bypassSecurityTrustHtml(htmlString)}};TrustHtmlPipe=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({name:"trustHtml",standalone:!0})],TrustHtmlPipe)},"./packages/angular/utils/src/lib/signal/from-attr.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f_:()=>fromAttrByNameToBoolean,yD:()=>fromAttrWithPrefix});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),_cocokits_common_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/common/utils/src/index.ts");function fromAttrByNameToBoolean(name){const host=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef),getValue=()=>{const rawValue=host.nativeElement.attributes.getNamedItem(name)?.value;if(void 0!==rawValue)return""===rawValue||!!rawValue},value=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(getValue()),observer=new MutationObserver((function(mutations){mutations.forEach((function(mutation){const attrName=mutation.attributeName;"attributes"===mutation.type&&attrName&&attrName===name&&value.set(getValue())}))}));return observer.observe(host.nativeElement,{attributes:!0}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef).onDestroy((()=>observer.disconnect())),value.asReadonly()}function fromAttrWithPrefix(prefix){const host=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef),value=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(generateResult(host,prefix)),observer=new MutationObserver((function(mutations){mutations.forEach((function(mutation){const attrName=mutation.attributeName;"attributes"===mutation.type&&attrName&&attrName.startsWith(prefix)&&value.set(generateResult(host,prefix))}))}));return observer.observe(host.nativeElement,{attributes:!0}),(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef).onDestroy((()=>observer.disconnect())),value.asReadonly()}function generateResult(host,prefix){const attrs=Object.values(host.nativeElement.attributes).filter((attrName=>attrName.name.startsWith(prefix)));return(0,_cocokits_common_utils__WEBPACK_IMPORTED_MODULE_0__.xW)(attrs,(attr=>({[attr.name.replace(prefix,"")]:attr.value})))}},"./packages/angular/radio/stories/radio-group/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,NgModel:()=>NgModel,ReactiveForm:()=>ReactiveForm,Size:()=>Size,Type:()=>Type,__namedExportsOrder:()=>index_stories_namedExportsOrder,default:()=>index_stories});var fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),dist=__webpack_require__("./node_modules/.pnpm/@storybook+angular@8.0.10_@angular-devkit+architect@0.1802.0_chokidar@3.6.0__@angular-devkit+_zi723p7yetlnwtivef5hlr5nwu/node_modules/@storybook/angular/dist/index.mjs"),tokens=__webpack_require__("./packages/angular/core/src/tokens.ts"),src=__webpack_require__("./packages/internal/storybook-theme-switcher/src/index.ts");var radio_component=__webpack_require__("./packages/angular/radio/src/lib/radio/radio.component.ts");const Default={name:"Default",parameters:{docs:{description:{story:"TODO: Add story description"},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header">\n        <thead>\n          <th>Default</th>\n          <th>Disabled</th>\n          <th>Disabled - Checked</th>\n          <th>Disabled - Partial</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <cck-radio-group>\n                <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n                <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n              </cck-radio-group>\n            </td>\n            <td>\n              <cck-radio-group [disabled]="true">\n                <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n                <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n              </cck-radio-group>\n            </td>\n            <td>\n              <cck-radio-group [disabled]="true" [selected]="1">\n                <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n                <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n              </cck-radio-group>\n            </td>\n            <td>\n              <cck-radio-group [selected]="1">\n                <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                <cck-radio-button [value]="2" [disabled]="true">Radio Button 2</cck-radio-button>\n                <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n              </cck-radio-group>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    '})},Type={name:"Type",tags:["uiComponentName:radioGroup","uiComponentPropName:type"],parameters:{docs:{description:{story:"TODO: Add story description"},source:{code:"TODO: ..."}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header">\n        <thead>\n          @for (type of uiComponentConfig?.radioGroup.type?.values; track type) {\n            <th>{{type}}</th>\n          }\n        </thead>\n        <tbody>\n          <tr>\n            @for (type of uiComponentConfig?.radioGroup.type?.values; track type) {\n              <td>\n                <cck-radio-group [type]="type" [selected]="1">\n                  <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                  <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n                </cck-radio-group>\n              </td>\n            }\n          </tr>\n         \n        </tbody>\n      </table>\n    '})},Size={name:"Size",tags:["uiComponentName:radioGroup","uiComponentPropName:size"],parameters:{docs:{description:{story:"TODO: Add story description"},source:{code:"TODO: ..."}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header">\n        <thead>\n          @for (size of uiComponentConfig?.radioGroup.size?.values; track size) {\n            <th>{{size}}</th>\n          }\n        </thead>\n        <tbody>\n          <tr>\n            @for (size of uiComponentConfig?.radioGroup.size?.values; track size) {\n              <td>\n                <cck-radio-group [size]="size" [selected]="1">\n                  <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                  <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n                  <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n                </cck-radio-group>\n              </td>\n            }\n          </tr>\n         \n        </tbody>\n      </table>\n    '})},Color={name:"Color",tags:["uiComponentName:radioGroup","uiComponentPropName:color"],parameters:{docs:{description:{story:"TODO: Add story description"},source:{code:"TODO: ..."}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header">\n        <thead>\n          @for (color of uiComponentConfig?.radioGroup.color?.values; track color) {\n            <th>{{color}}</th>\n          }\n        </thead>\n        <tbody>\n          <tr>\n            @for (color of uiComponentConfig?.radioGroup.color?.values; track color) {\n              <td>\n                <cck-radio-group [color]="color" [selected]="1">\n                  <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n                  <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n                  <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n                </cck-radio-group>\n              </td>\n            }\n          </tr>\n         \n        </tbody>\n      </table>\n    '})},NgModel={name:"NgModel",parameters:{docs:{description:{story:"TODO: Add story description"},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,modelValue:null},template:'\n      <div class="flex-row w-100 justify-around">\n      \n        <div class="flex-col">\n          <cck-radio-group [(ngModel)]="modelValue">\n            <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n            <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n            <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n          </cck-radio-group>\n        </div>\n        \n        <div class="hr-h"></div>\n        \n        <div class="flex-col gap-24 align-center">\n          <div class="p-sm-regular-3">NgModel Value: {{modelValue}}</div>\n          <button class="story-button" (click)="modelValue = null">Reset</button>\n          <button class="story-button" (click)="modelValue = 1">Select 1</button>\n          <button class="story-button" (click)="modelValue = 2">Select 2</button>\n          <button class="story-button" (click)="modelValue = 3">Select 3</button>\n        </div>\n      </div>\n      \n    '})},ReactiveForm={name:"ReactiveForm",parameters:{docs:{description:{story:"TODO: Add story description"},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,control:new fesm2022_forms.MJ},template:'\n      <div class="flex-row w-100 justify-around">\n      \n        <div class="flex-col">\n          <cck-radio-group [formControl]="control">\n            <cck-radio-button [value]="1">Radio Button 1</cck-radio-button>\n            <cck-radio-button [value]="2">Radio Button 2</cck-radio-button>\n            <cck-radio-button [value]="3">Radio Button 3</cck-radio-button>\n          </cck-radio-group>\n        </div>\n        \n        <div class="hr-h"></div>\n        \n        <div class="flex-col gap-24 align-center">\n          <div class="p-sm-regular-3">Control Value: {{control.value}}</div>\n          <button class="story-button" (click)="control.reset()">Reset</button>\n          <button class="story-button" (click)="control.setValue(1)">Select 1</button>\n          <button class="story-button" (click)="control.setValue(2)">Select 2</button>\n          <button class="story-button" (click)="control.setValue(3)">Select 3</button>\n          <button class="story-button" (click)="control.disabled ? control.enable() : control.disable()">Toggle Disable</button>\n        </div>\n      </div>\n      \n    '})},index_stories={component:radio_component.Y2,title:"UI Components/RadioGroup",tags:["autodocs"],decorators:[(0,dist.componentWrapperDecorator)((story=>`<div class="flex gap-24">${story}</div>`)),(0,dist.moduleMetadata)({imports:[radio_component.dx,fesm2022_forms.YN,fesm2022_forms.X1],providers:[{provide:tokens.k,useValue:(0,src.cQ)()?.uiComponentConfig}]})],parameters:{docs:{description:{component:["# TODO: Add Description for RadioGroupComponent\n"].join("\n")}}},argTypes:{},args:{}},index_stories_namedExportsOrder=["Default","Type","Size","Color","NgModel","ReactiveForm"]},"./packages/angular/radio/src/lib/radio/radio-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.12__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.12__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cck-radio-button__backdrop {\n  display: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);