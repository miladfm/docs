(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[8430],{"./packages/angular/checkbox/src/lib/checkbox/checkbox.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>CheckboxComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var checkbox_componentngResource=__webpack_require__("./packages/angular/checkbox/src/lib/checkbox/checkbox.component.scss?ngResource"),checkbox_componentngResource_default=__webpack_require__.n(checkbox_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),trust_html_pipe=__webpack_require__("./packages/angular/utils/src/lib/pipes/sanitizer/trust-html.pipe.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts");let NEXT_ID=1;const CHECKBOX_CONTROL_VALUE_ACCESSOR={provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>CheckboxComponent)),multi:!0};let CheckboxComponent=class CheckboxComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="checkbox",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.indeterminate(),classes:this.classNames().indeterminate},{if:this.checked()&&!this.indeterminate(),classes:this.classNames().checked},{if:!this.checked()&&!this.indeterminate(),classes:this.classNames().unchecked},{if:this.disabled(),classes:this.classNames().disabled}])),this.cd=(0,core.inject)(core.ChangeDetectorRef),this.checked=(0,core.model)(),this._disabled=(0,core.model)(void 0,{alias:"disabled"}),this.disabled=(0,core.computed)((()=>(0,src.Ix)(this._disabled()))),this.indeterminate=(0,core.model)(),this.id=(0,core.input)("cck-checkbox-"+NEXT_ID++),this.value=(0,core.input)(""),this.name=(0,core.input)(null),this.change=(0,core.output)(),this.indeterminateChange=(0,core.output)(),this._onTouched=()=>{},this._controlValueAccessorChangeFn=()=>{}}toggle(){this.updateCheck(!this.checked()),this._controlValueAccessorChangeFn(this.checked()),this.updateIndeterminate(!1)}updateCheck(checked){const hasChanged=this.checked()!==checked;this.checked.set(checked),hasChanged&&this.change.emit({source:this,checked})}updateIndeterminate(indeterminate){const hasChanged=this.indeterminate()!==indeterminate;this.indeterminate.set(indeterminate),hasChanged&&this.indeterminateChange.emit(indeterminate)}onInputClick(){this.toggle()}onInteractionEvent(event){event.stopPropagation()}onBlur(){Promise.resolve().then((()=>{this._onTouched(),this.cd.markForCheck()}))}preventBubblingFromLabel(event){event.stopPropagation()}writeValue(value){this.checked.set(!!value)}registerOnChange(fn){this._controlValueAccessorChangeFn=fn}registerOnTouched(fn){this._onTouched=fn}setDisabledState(isDisabled){this._disabled.set(isDisabled)}static{this.propDecorators={checked:[{type:core.Input,args:[{isSignal:!0,alias:"checked",required:!1}]},{type:core.Output,args:["checkedChange"]}],_disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1}]},{type:core.Output,args:["disabledChange"]}],indeterminate:[{type:core.Input,args:[{isSignal:!0,alias:"indeterminate",required:!1}]},{type:core.Output,args:["indeterminateChange"]}],id:[{type:core.Input,args:[{isSignal:!0,alias:"id",required:!1,transform:void 0}]}],value:[{type:core.Input,args:[{isSignal:!0,alias:"value",required:!1,transform:void 0}]}],name:[{type:core.Input,args:[{isSignal:!0,alias:"name",required:!1,transform:void 0}]}],change:[{type:core.Output,args:["change"]}],indeterminateChange:[{type:core.Output,args:["indeterminateChange"]}]}}};CheckboxComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[trust_html_pipe.g],selector:"cck-checkbox",template:'<div [class]="classNames().wrapper">\n\n  <div [class]="classNames().inputWrapper">\n    <input\n      #input\n      type="checkbox"\n      [class]="classNames().input"\n      [attr.name]="name()"\n      [attr.value]="value()"\n      [checked]="checked()"\n      [indeterminate]="indeterminate()"\n      [disabled]="_disabled()"\n      [id]="id()"\n      (blur)="onBlur()"\n      (click)="onInputClick()"\n      (change)="onInteractionEvent($event)"/>\n\n    <div [class]="classNames().backdrop"></div>\n    <div [class]="classNames().background" [innerHtml]="uiComponentConfig.checkbox.component?.checkboxCheckmark | trustHtml"></div>\n\n  </div>\n\n  <label [class]="classNames().label" [for]="id()">\n    <ng-content></ng-content>\n  </label>\n\n</div>',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,providers:[CHECKBOX_CONTROL_VALUE_ACCESSOR],host:{"[class]":"hostClassNames()","(click)":"preventBubblingFromLabel($event)"},styles:[checkbox_componentngResource_default()]})],CheckboxComponent)},"./packages/angular/form-field/src/lib/option-group/option-group.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>OptionGroupComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var option_group_componentngResource=__webpack_require__("./packages/angular/form-field/src/lib/option-group/option-group.component.scss?ngResource"),option_group_componentngResource_default=__webpack_require__.n(option_group_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts"),select_component=__webpack_require__("./packages/angular/form-field/src/lib/select/select.component.ts");let OptionGroupComponent=class OptionGroupComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="optionGroup",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.disabled()??!1,classes:this.classNames().disabled}])),this.size=(0,core.computed)((()=>this._size()??this.selectComp?.size())),this.selectComp=(0,core.inject)(select_component.w,{optional:!0}),this.disabled=(0,core.input)(void 0,{transform:src.Ix}),this.label=(0,core.input)()}static{this.propDecorators={disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],label:[{type:core.Input,args:[{isSignal:!0,alias:"label",required:!1,transform:void 0}]}]}}};OptionGroupComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[],selector:"cck-option-group",template:'<div [class]="classNames().label">\n  {{label()}}\n  <ng-content></ng-content>\n</div>\n\n<ng-content select="cck-option"></ng-content>',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"hostClassNames()"},styles:[option_group_componentngResource_default()]})],OptionGroupComponent)},"./packages/angular/form-field/src/lib/option/option.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>OptionComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var option_componentngResource=__webpack_require__("./packages/angular/form-field/src/lib/option/option.component.scss?ngResource"),option_componentngResource_default=__webpack_require__.n(option_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),checkbox_component=__webpack_require__("./packages/angular/checkbox/src/lib/checkbox/checkbox.component.ts"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),svg_icon_component=__webpack_require__("./packages/angular/icon/src/lib/svg-icon/svg-icon.component.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts"),option_group_component=__webpack_require__("./packages/angular/form-field/src/lib/option-group/option-group.component.ts"),select_store=__webpack_require__("./packages/angular/form-field/src/lib/select.store.ts"),select_component=__webpack_require__("./packages/angular/form-field/src/lib/select/select.component.ts");let OptionComponent=class OptionComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="option",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.disabled(),classes:this.classNames().disabled},{if:this.isSelected(),classes:this.classNames().selected},{if:this.selectStore.isMultiple(),classes:this.classNames().multiple},{if:!this.selectStore.isMultiple(),classes:this.classNames().single}])),this.size=(0,core.computed)((()=>this._size()??this.selectComp?.size())),this.isSelected=(0,core.computed)((()=>{const value=this.value();return!!(0,src.Vq)(value)&&this.selectStore.isSelected(value)()})),this.optionGroupComp=(0,core.inject)(option_group_component.Q,{optional:!0}),this.selectComp=(0,core.inject)(select_component.w,{optional:!0}),this.selectStore=(0,select_store.D3)(),this._disabled=(0,core.input)(void 0,{alias:"disabled",transform:src.Ix}),this.disabled=(0,core.computed)((()=>this._disabled()??this.optionGroupComp?.disabled()??!1)),this.value=(0,core.input)()}onHostClick(e){if(e.stopPropagation(),this.disabled())return;const value=this.value();if(this.selectStore.isMultiple()){if((0,src.uy)(value))return;this.selectStore.toggle(value,{triggerSource:select_store.a3.FromOption})}else(0,src.uy)(value)?this.selectStore.clear({triggerSource:select_store.a3.FromOption}):this.selectStore.select(value,{triggerSource:select_store.a3.FromOption}),this.selectStore.renderedOverlay?.overlayRef.close()}onCheckboxClick(checked){const value=this.value();(0,src.uy)(value)||(checked?this.selectStore.select(value,{triggerSource:select_store.a3.FromOption}):this.selectStore.deselect(value,{triggerSource:select_store.a3.FromOption}))}static{this.propDecorators={_disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],value:[{type:core.Input,args:[{isSignal:!0,alias:"value",required:!1,transform:void 0}]}]}}};OptionComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[checkbox_component.P,svg_icon_component.D],selector:"cck-option",template:'@if(selectStore.isMultiple()) {\n  <div [class]="classNames().multipleWrapper">\n    <cck-checkbox [checked]="isSelected()" (change)="onCheckboxClick($event.checked)"></cck-checkbox>\n  </div>\n\n}\n\n<div [class]="classNames().contentWrapper">\n  <ng-content></ng-content>\n</div>\n\n\n\n@if(isSelected() && !selectStore.isMultiple() && uiComponentConfig.option.component?.optionSelectedIcon) {\n  <div [class]="classNames().selectedCheckmark">\n    @if(uiComponentConfig.option.component?.optionSelectedIcon) {\n      <cck-svg-icon [icon]="uiComponentConfig.option.component!.optionSelectedIcon!"></cck-svg-icon>\n    }\n  </div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"hostClassNames()","(click)":"onHostClick($event)"},styles:[option_componentngResource_default()]})],OptionComponent)},"./packages/angular/form-field/src/lib/select-preview/select-preview.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>SelectPreviewComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var select_preview_componentngResource=__webpack_require__("./packages/angular/form-field/src/lib/select-preview/select-preview.component.scss?ngResource"),select_preview_componentngResource_default=__webpack_require__.n(select_preview_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts");let SelectPreviewComponent=class SelectPreviewComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="selectPreview",this.extraHostElementClassConditions=(0,core.computed)((()=>[]))}};SelectPreviewComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[],selector:"cck-select-preview",template:"<ng-content></ng-content>",changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"hostClassNames()"},styles:[select_preview_componentngResource_default()]})],SelectPreviewComponent)},"./packages/angular/form-field/src/lib/select.store.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D3:()=>injectSelectStore,EU:()=>SelectStore,V0:()=>SelectStoreService,a3:()=>SelectTriggerSource});var SelectTriggerSource,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subject.js"),_cocokits_common_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/common/utils/src/index.ts");!function(SelectTriggerSource){SelectTriggerSource.FromControl="fromControl",SelectTriggerSource.FromOption="fromOption"}(SelectTriggerSource||(SelectTriggerSource={}));const SelectStore=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("SELECT_STORE_SERVICE");function injectSelectStore(){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(SelectStore,{optional:!0})??new SelectStoreService}let SelectStoreService=class SelectStoreService{get selectedItems(){return this._selectedItems||(this._selectedItems=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(this.selection.getSelected())),this._selectedItems.asReadonly()}set selectedItems(items){this._selectedItems?.set(items)}get isEmpty(){return this._isEmpty||(this._isEmpty=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(this.selection.isEmpty())),this._isEmpty.asReadonly()}set isEmpty(isEmpty){this._isEmpty?.set(isEmpty)}get hasValue(){return this._hasValue||(this._hasValue=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(this.selection.hasValue())),this._hasValue.asReadonly()}set hasValue(hasValue){this._hasValue?.set(hasValue)}get isMultiple(){return this._isMultiple||(this._isMultiple=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(this.selection.isMultipleSelection())),this._isMultiple.asReadonly()}set isMultiple(isMultiple){this._isMultiple?.set(isMultiple)}constructor(){this.selection=new _cocokits_common_utils__WEBPACK_IMPORTED_MODULE_0__.LN,this.selectionSignalMap=new Map,this.changesSubject$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.B,this.changes$=this.changesSubject$.asObservable(),this.selection.addChangeEventListener((changes=>{changes.added.forEach((item=>{const itemSignal=this.selectionSignalMap.get(item);itemSignal?.set(!0)})),changes.removed.forEach((item=>{const itemSignal=this.selectionSignalMap.get(item);itemSignal?.set(!1)})),this.changesSubject$.next({selected:this.selection.getSelected(),triggerSource:changes.triggerSource}),this.syncValuesWithSelection()}))}syncValuesWithSelection(){this.selectedItems=this.selection.getSelected(),this.isEmpty=this.selection.isEmpty(),this.hasValue=this.selection.hasValue()}resetWithOption(options={}){this.selection.clear(),this.selection.updateOptions(options),this.isMultiple=this.selection.isMultipleSelection(),this.syncValuesWithSelection()}isSelected(item){const itemSignal=this.selectionSignalMap.get(item);if(itemSignal)return itemSignal.asReadonly();const newSignal=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(this.selection.isSelected(item));return this.selectionSignalMap.set(item,newSignal),newSignal.asReadonly()}clear(config){this.selection.clear(config)}select(items,config){this.selection.select(items,config)}deselect(items,config){this.selection.deselect(items,config)}setSelection(items,config){this.selection.setSelection(items,config)}toggle(items,config){this.selection.toggle(items,config)}ngOnDestroy(){this.selection.removeAllChangeEventListener(),this.selectionSignalMap.clear()}static{this.ctorParameters=()=>[]}};SelectStoreService=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Sn)("design:paramtypes",[])],SelectStoreService)},"./packages/angular/form-field/src/lib/select/select.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>SelectComponent});var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var select_componentngResource=__webpack_require__("./packages/angular/form-field/src/lib/select/select.component.scss?ngResource"),select_componentngResource_default=__webpack_require__.n(select_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),svg_icon_component=__webpack_require__("./packages/angular/icon/src/lib/svg-icon/svg-icon.component.ts"),overlay_service=__webpack_require__("./packages/angular/overlay/src/services/overlay.service.ts"),overlay_config_model=__webpack_require__("./packages/angular/overlay/src/models/overlay-config.model.ts"),src=__webpack_require__("./packages/common/utils/src/index.ts"),form_field_store=__webpack_require__("./packages/angular/form-field/src/lib/form-field.store.ts"),select_store=__webpack_require__("./packages/angular/form-field/src/lib/select.store.ts"),select_preview_component=__webpack_require__("./packages/angular/form-field/src/lib/select-preview/select-preview.component.ts"),firstValueFrom=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");const SELECT_CONTROL_VALUE_ACCESSOR={provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>SelectComponent)),multi:!0};let SelectComponent=class SelectComponent extends ui_base_component.W{set multiple(multiple){this.selectStore.resetWithOption({multiple})}set value(value){this.selectStore.setSelection(value)}constructor(){super(),this.componentName="select",this.extraHostElementClassConditions=(0,core.computed)((()=>[{if:this.formFieldStore.state.disabled(),classes:this.classNames().disabled},{if:this.selectStore.isMultiple(),classes:this.classNames().multiple},{if:!this.selectStore.isMultiple(),classes:this.classNames().single},{if:this.isOpened(),classes:this.classNames().opened},{if:!this.isOpened(),classes:this.classNames().closed}])),this.size=(0,core.computed)((()=>this._size()??this.formFieldStore.formField.size?.())),this.formFieldStore=(0,form_field_store.fy)(),this.selectStore=(0,select_store.D3)(),this.cd=(0,core.inject)(core.ChangeDetectorRef),this.elemRef=(0,core.inject)(core.ElementRef),this.overlay=(0,core.inject)(overlay_service.s),this.injector=(0,core.inject)(core.Injector),this.ngControl=null,this.customTrigger=(0,core.contentChild)(select_preview_component.M),this.optionsTemp=(0,core.viewChild)("optionsTemp",{read:core.TemplateRef}),this.triggerValue=(0,core.computed)((()=>this.selectStore.selectedItems().join(", "))),this.__onSelectedItemsChangedFromOption=this.selectStore.changes$.pipe((0,rxjs_interop.pQ)()).subscribe((({selected,triggerSource})=>{triggerSource===select_store.a3.FromOption&&(this._controlValueAccessorChangeFn(selected),this._onTouched(),this.selectionChange.emit(selected))})),this.isOpened=(0,core.signal)(!1),this.disabled=(0,core.input)(void 0,{transform:src.Ix}),this._required=(0,core.input)(void 0,{transform:src.Ix,alias:"required"}),this.maxOptionsHeight=(0,core.input)(220),this.placeholder=(0,core.input)(""),this.openedChange=(0,core.output)(),this.selectionChange=(0,core.output)(),this._onTouched=()=>{},this._controlValueAccessorChangeFn=()=>{};const dropdownIcon=this.uiComponentConfig.select.component?.dropdownIcon;if(!dropdownIcon)throw new Error("`dropdownIcon` has not defined in `uiComponentConfig` of selected theme");this.dropdownIcon=dropdownIcon,this.formFieldStore.registerComponent("select",this,this.cd)}ngOnInit(){this.ngControl=this.injector.get(fesm2022_forms.vO,null),this.ngControl?.control&&this.formFieldStore.setController(this.ngControl.control)}onHostClick(e){var _this=this;return(0,asyncToGenerator.A)((function*(){if(e.stopPropagation(),_this.formFieldStore.state.disabled())return;const optionsTemp=_this.optionsTemp();if(!optionsTemp)throw new Error("No options available for select component");const connectTo=_this.formFieldStore.formField.wrapperElem?.()?.nativeElement??_this.elemRef.nativeElement;_this.selectStore.renderedOverlay=_this.overlay.open(optionsTemp,{panelClass:_this.classNames().overlay,size:{minWidth:connectTo.getBoundingClientRect().width+"px",maxHeight:_this.maxOptionsHeight()?_this.maxOptionsHeight()+"px":""},positionStrategy:{type:"connectToElement",connectTo,origin:overlay_config_model.C.BottomLeft}}),_this.isOpened.set(!0),_this.openedChange.emit(!0),_this._onTouched(),yield(0,firstValueFrom._)(_this.selectStore.renderedOverlay.overlayRef.close$),_this.openedChange.emit(!1),_this.isOpened.set(!1)}))()}ngOnDestroy(){this.formFieldStore.unregisterComponent(this,this.cd)}writeValue(value){(0,src.uy)(value)?this.selectStore.clear({triggerSource:select_store.a3.FromControl}):this.selectStore.setSelection(value,{triggerSource:select_store.a3.FromControl})}registerOnChange(fn){this._controlValueAccessorChangeFn=fn}registerOnTouched(fn){this._onTouched=fn}setDisabledState(_isDisabled){}static{this.ctorParameters=()=>[]}static{this.propDecorators={customTrigger:[{type:core.ContentChild,args:[select_preview_component.M,{isSignal:!0}]}],optionsTemp:[{type:core.ViewChild,args:["optionsTemp",{read:core.TemplateRef,isSignal:!0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],_required:[{type:core.Input,args:[{isSignal:!0,alias:"required",required:!1,transform:void 0}]}],multiple:[{type:core.Input}],maxOptionsHeight:[{type:core.Input,args:[{isSignal:!0,alias:"maxOptionsHeight",required:!1,transform:void 0}]}],value:[{type:core.Input}],placeholder:[{type:core.Input,args:[{isSignal:!0,alias:"placeholder",required:!1,transform:void 0}]}],openedChange:[{type:core.Output,args:["openedChange"]}],selectionChange:[{type:core.Output,args:["selectionChange"]}]}}};SelectComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[svg_icon_component.D],selector:"cck-select",template:'\n<div [class]="classNames().triggerWrapper">\n\n  @if(selectStore.isEmpty()) {\n    <div [class]="classNames().placeholder">{{placeholder()}}</div>\n\n  } @else {\n    <div [class]="classNames().triggerValue">\n\n      @if(customTrigger()) {\n        <ng-content select="cck-select-preview"></ng-content>\n      } @else {\n        {{triggerValue()}}\n      }\n    </div>\n  }\n\n</div>\n\n<div [class]="classNames().dropdownIconWrapper">\n  <cck-svg-icon [icon]="dropdownIcon"></cck-svg-icon>\n</div>\n\n<ng-template #optionsTemp>\n  <div [class]="classNames().optionsWrapper">\n    <ng-content></ng-content>\n  </div>\n</ng-template>',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,providers:[SELECT_CONTROL_VALUE_ACCESSOR,{provide:select_store.EU,useClass:select_store.V0}],host:{"[class]":"hostClassNames()","(click)":"onHostClick($event)"},styles:[select_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[])],SelectComponent)},"./packages/angular/icon/src/lib/svg-icon/svg-icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>SvgIconComponent});var tslib_es6=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs");var svg_icon_componentngResource=__webpack_require__("./packages/angular/icon/src/lib/svg-icon/svg-icon.component.scss?ngResource"),svg_icon_componentngResource_default=__webpack_require__.n(svg_icon_componentngResource),core=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),ui_base_component=__webpack_require__("./packages/angular/core/src/ui-base.component.ts"),trust_html_pipe=__webpack_require__("./packages/angular/utils/src/lib/pipes/sanitizer/trust-html.pipe.ts");let SvgIconComponent=class SvgIconComponent extends ui_base_component.W{constructor(){super(...arguments),this.componentName="svgIcon",this.extraHostElementClassConditions=(0,core.computed)((()=>[])),this.icon=core.input.required()}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};SvgIconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"cck-svg-icon",standalone:!0,template:'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  [attr.viewBox]="icon().viewBox"\n  [class]="classNames().svg"\n  [innerHtml]="icon().content | trustHtml">\n</svg>\n',imports:[trust_html_pipe.g],changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,host:{"[class]":"classNames().host"},styles:[svg_icon_componentngResource_default()]})],SvgIconComponent)},"./packages/angular/utils/src/lib/pipes/sanitizer/trust-html.pipe.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>TrustHtmlPipe});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10/node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@angular+platform-browser@18.2.0_@angular+animations@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_z_2sr5rm2pfwkeyfrnhcqlecnf54/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs");let TrustHtmlPipe=class TrustHtmlPipe{constructor(){this.sanitizer=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)}transform(htmlString){return htmlString?this.sanitizer.bypassSecurityTrustHtml(htmlString):""}};TrustHtmlPipe=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({name:"trustHtml",standalone:!0})],TrustHtmlPipe)},"./packages/angular/checkbox/src/lib/checkbox/checkbox.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.cck-checkbox__backdrop {\n  position: absolute;\n  display: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/form-field/src/lib/option-group/option-group.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/form-field/src/lib/option/option.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/form-field/src/lib/select-preview/select-preview.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/form-field/src/lib/select/select.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./packages/angular/icon/src/lib/svg-icon/svg-icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.93.0_@swc+core@1.3.107_@swc+helpers@0.5.13__esbuild@0.23.0_/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cck-svg-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);