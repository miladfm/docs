"use strict";(self.webpackChunkcocokits=self.webpackChunkcocokits||[]).push([[7604],{"./packages/angular/form-field/stories/select/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPreview:()=>CustomPreview,Default:()=>Default,NgModel:()=>NgModel,OptionGroup:()=>OptionGroup,ReactiveForm:()=>ReactiveForm,Size:()=>Size,__namedExportsOrder:()=>index_stories_namedExportsOrder,default:()=>index_stories});var common=__webpack_require__("./node_modules/.pnpm/@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__rxjs@7.8.1/node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/.pnpm/@angular+forms@18.2.0_@angular+common@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_zone.js@0.14.10__sbz7jv6ol3znvubiinn6qeqfj4/node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/.pnpm/@angular+platform-browser@18.2.0_@angular+animations@18.2.0_@angular+core@18.2.0_rxjs@7.8.1_z_2sr5rm2pfwkeyfrnhcqlecnf54/node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/.pnpm/@storybook+angular@8.0.10_gaoznjnmxt2bwxtxvyb2wjkjne/node_modules/@storybook/angular/dist/index.mjs"),tokens=__webpack_require__("./packages/angular/core/src/tokens.ts"),src=__webpack_require__("./packages/internal/storybook-theme-switcher/src/index.ts");var option_group_component=__webpack_require__("./packages/angular/form-field/src/lib/option-group/option-group.component.ts"),option_component=__webpack_require__("./packages/angular/form-field/src/lib/option/option.component.ts"),select_preview_component=__webpack_require__("./packages/angular/form-field/src/lib/select-preview/select-preview.component.ts"),form_field_component=__webpack_require__("./packages/angular/form-field/src/lib/form-field/form-field.component.ts"),label_component=__webpack_require__("./packages/angular/form-field/src/lib/label/label.component.ts"),error_component=__webpack_require__("./packages/angular/form-field/src/lib/error/error.component.ts"),select_component=__webpack_require__("./packages/angular/form-field/src/lib/select/select.component.ts");const Default={name:"Default",parameters:{docs:{description:{story:"Shows the default example with no additional configurations, providing an interactive example in its most basic form."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header story-variant-table--bottom-align">\n        <thead>\n          <th>Default</th>\n          <th>No Label</th>\n          <th>Multi</th>\n          <th>Disabled</th>\n        </thead>\n        <tbody>\n          <tr>\n              <td>\n                <cck-form-field class="story-w-200">\n                  <cck-label>Favorite food</cck-label>\n                  <cck-select [placeholder]="\'Select you food\'">\n                    <cck-option [value]="\'Steak\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger\'">Burger</cck-option>\n                  </cck-select>\n                </cck-form-field>\n              </td>\n              \n              <td>\n                <cck-form-field class="story-w-200">\n                  <cck-select [placeholder]="\'Select you food\'">\n                    <cck-option [value]="\'Steak\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger\'">Burger</cck-option>\n                  </cck-select>\n                </cck-form-field>\n              </td>\n              \n              <td>\n                <cck-form-field class="story-w-200">\n                  <cck-select [multiple]="true" [placeholder]="\'Select you food\'">\n                    <cck-option [value]="\'Steak\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger\'">Burger</cck-option>\n                  </cck-select>\n                </cck-form-field>\n              </td>\n              \n              <td>\n                <cck-form-field class="story-w-200" [disabled]="true">\n                  <cck-select [placeholder]="\'Select you food\'">\n                    <cck-option [value]="\'Steak\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger\'">Burger</cck-option>\n                  </cck-select>\n                </cck-form-field>\n              </td>\n          </tr>\n        </tbody>\n      </table>\n    '})},Size={name:"Size",tags:["uiComponentName:select","uiComponentPropName:size"],parameters:{docs:{description:{story:"The size is adjustable to suit different design needs and screen dimensions, improving both aesthetics and usability."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header">\n        <thead>\n          @for (size of uiComponentConfig?.formField.size?.values; track size) {\n            <th>{{size}}</th>\n          }\n        </thead>\n        <tbody>\n          <tr>\n            @for (size of uiComponentConfig?.formField.size?.values; track size) {\n              <td>\n                <cck-form-field [size]="size" class="story-w-200">\n                  <cck-label>Favorite food</cck-label>\n                  <cck-select [placeholder]="\'Select you food\'">\n                    <cck-option [value]="\'Steak\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger\'">Burger</cck-option>\n                  </cck-select>\n                </cck-form-field>\n              </td>\n            }\n          </tr>\n        </tbody>\n      </table>\n    '})},CustomPreview={name:"CustomPreview",parameters:{docs:{description:{story:"Displays the select component with a customized view for the selected item, enabling more complex and visually rich representations instead of just plain text."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,modelValue:[]},template:'\n      <cck-form-field class="story-w-200">\n        <cck-label>Favorite food</cck-label>\n        <cck-select [(ngModel)]="modelValue" [multiple]="true" [placeholder]="\'Select you food\'">\n          <cck-select-preview>\n            {{modelValue[0]}}\n            @if(modelValue.length > 1) {\n              <span style="opacity: 0.5">(+{{modelValue.length - 1}} more)</span>\n            }\n          </cck-select-preview>\n          <cck-option [value]="\'Steak\'">Steak</cck-option>\n          <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n          <cck-option [value]="\'Burger\'">Burger</cck-option>\n        </cck-select>\n      </cck-form-field>\n    '})},OptionGroup={name:"OptionGroup",parameters:{docs:{description:{story:"Shows the select component with grouped options, demonstrating how different options can be organized together for improved categorization and user experience."},source:{code:"TODO: Add source code of story"}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig},template:'\n      <table class="story-variant-table story-variant-table--no-col-header story-min-h-400">\n        <thead>\n          <th>Group</th>\n          <th>Group With Disabled</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>\n              <cck-form-field class="story-w-200">\n                <cck-label>Favorite food</cck-label>\n                <cck-select [multiple]="true" [placeholder]="\'Select you food\'">\n                  <cck-option-group [label]="\'Order 1\'">\n                    <cck-option [value]="\'Steak-1\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza-1\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger-1\'">Burger</cck-option>\n                  </cck-option-group>\n                  <cck-option-group [label]="\'Order 2\'">\n                    <cck-option [value]="\'Steak-2\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza-2\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger-2\'">Burger</cck-option>\n                  </cck-option-group>\n                </cck-select>\n              </cck-form-field>\n            </td>\n            <td>\n              <cck-form-field class="story-w-200">\n                <cck-label>Favorite food</cck-label>\n                <cck-select [multiple]="true" [placeholder]="\'Select you food\'">\n                  <cck-option-group disabled [label]="\'Order 1\'">\n                    <cck-option [value]="\'Steak-1\'">Steak</cck-option>\n                    <cck-option [value]="\'Pizza-1\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger-1\'">Burger</cck-option>\n                  </cck-option-group>\n                  <cck-option-group [label]="\'Order 2\'">\n                    <cck-option [value]="\'Steak-2\'">Steak</cck-option>\n                    <cck-option disabled [value]="\'Pizza-2\'">Pizza</cck-option>\n                    <cck-option [value]="\'Burger-2\'">Burger</cck-option>\n                  </cck-option-group>\n                </cck-select>\n              </cck-form-field>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      \n    '})},NgModel={name:"NgModel",parameters:{docs:{description:{story:"Demonstrates how to use Angular's NgModel for two-way data binding, enabling automatic synchronization between the UI element and the model."},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,modelValue:"Default Value"},template:'\n      <div class="flex-col w-200 justify-center">\n      \n          <cck-form-field class="story-w-200">\n            <cck-label>NgModel</cck-label>\n            <cck-select [(ngModel)]="modelValue" [placeholder]="\'Select you food\'">\n              <cck-option [value]="\'Steak\'">Steak</cck-option>\n              <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n              <cck-option [value]="\'Burger\'">Burger</cck-option>\n            </cck-select>\n          </cck-form-field>\n        \n        <div class="hr-v"></div>\n        \n        <div class="flex-col gap-24 align-center">\n          <div class="p-sm-regular-3">NgModel Value: {{modelValue}}</div>\n          <input class="story-input" [(ngModel)]="modelValue"/>\n        </div>\n      </div>\n      \n    '})},ReactiveForm={name:"ReactiveForm",parameters:{docs:{description:{story:"Illustrates integration within Angular's Reactive Forms, focusing on form control, validation, and efficient state management."},source:{code:"\n          TODO: ...\n        "}}},render:args=>({props:{...args,uiComponentConfig:(0,src.cQ)()?.uiComponentConfig,controlSingle:new fesm2022_forms.MJ("Burger",{validators:[fesm2022_forms.k0.required]}),controlMulti:new fesm2022_forms.MJ(null,{validators:[fesm2022_forms.k0.required]})},template:'\n      <div class="flex-row w-100 justify-around">\n      \n        <div class="flex-col story-w-200">\n          <div class="flex-col">\n            <cck-form-field #formFieldSingle>\n              <cck-label>FormControl Single</cck-label>\n              <cck-select [formControl]="controlSingle" [placeholder]="\'Select you food\'">\n                <cck-option>---</cck-option>\n                <cck-option [value]="\'Steak\'">Steak</cck-option>\n                <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                <cck-option [value]="\'Burger\'">Burger</cck-option>\n              </cck-select>\n              \n              @if(controlSingle.hasError() && controlSingle.errors?.required) {\n                <cck-error>This field is required</cck-error>\n              }\n            </cck-form-field>\n          </div>\n          \n          <div class="hr-v"></div>\n          \n          <div class="flex-col gap-24">\n            <div class="p-sm-regular-3">Control Value: {{controlSingle.value}}</div>\n            <button class="story-button" (click)="controlSingle.setValue(\'Pizza\')">Set Value to Pizza</button>\n            <button class="story-button" (click)="controlSingle.reset()">Reset</button>\n            <button class="story-button" (click)="controlSingle.disabled ? controlSingle.enable() : controlSingle.disable()">Toggle Disable</button>\n          </div>\n        </div>\n        \n        <div class="flex-col story-w-200">\n          <div class="flex-col">\n            <cck-form-field #formFieldMulti>\n              <cck-label>FormControl Multi</cck-label>\n              <cck-select [multiple]="true" [formControl]="controlMulti" [placeholder]="\'Select you food\'">\n                <cck-option [value]="\'Steak\'">Steak</cck-option>\n                <cck-option [value]="\'Pizza\'">Pizza</cck-option>\n                <cck-option [value]="\'Burger\'">Burger</cck-option>\n              </cck-select>\n              \n              @if(controlMulti.hasError() && controlMulti.errors?.required) {\n                <cck-error>This field is required</cck-error>\n              }\n            </cck-form-field>\n          </div>\n          \n          <div class="hr-v"></div>\n          \n          <div class="flex-col gap-24">\n            <div class="p-sm-regular-3">Control Value: {{controlMulti.value}}</div>\n            <button class="story-button" (click)="controlMulti.setValue(\'Pizza\')">Set Value to Pizza</button>\n            <button class="story-button" (click)="controlMulti.reset()">Reset</button>\n            <button class="story-button" (click)="controlMulti.disabled ? controlMulti.enable() : controlMulti.disable()">Toggle Disable</button>\n          </div>\n        </div>\n      </div>\n      \n    '})},index_stories={component:select_component.w,subcomponents:[option_group_component.Q,option_component.P,select_preview_component.M],title:"UI Components/Select",tags:["autodocs"],decorators:[(0,dist.componentWrapperDecorator)((story=>`<div class="flex gap-24 align-start story-min-h-300">${story}</div>`)),(0,dist.moduleMetadata)({imports:[form_field_component.K,label_component.U,error_component.A,common.CommonModule,fesm2022_forms.YN,fesm2022_forms.X1,option_component.P,option_group_component.Q,select_preview_component.M,animations.BrowserAnimationsModule],providers:[{provide:tokens.k,useFactory:()=>(0,src.cQ)()?.uiComponentConfig}]})],parameters:{docs:{description:{component:["The `SelectComponent` from `@cocokits` is a versatile UI element designed to enable users to choose one or more options from a dropdown list seamlessly. Commonly used in forms where specific selections from predefined choices are required, the Select component enhances user interactions by providing an intuitive and efficient way to make selections. It integrates effortlessly with multiple design system themes, ensuring a consistent and visually appealing interface across various application styles."].join("\n")}}},argTypes:{disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:""}}},_required:{table:{type:{summary:"boolean"},defaultValue:{summary:""}}},selectionChange:{table:{category:"outputs"}},_OptionComponent:{_disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:""}}}},_OptionGroupComponent:{disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:""}}}}},args:{}},index_stories_namedExportsOrder=["Default","Size","CustomPreview","OptionGroup","NgModel","ReactiveForm"]}}]);