(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{388:function(t,r,e){},398:function(t,r,e){"use strict";var o=e(388);e.n(o).a},412:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=this,e=r.$createElement,o=r._self._c||e;return o("div",{staticClass:"edit-block"},[o("h3",{staticClass:"edit-block__title"},[r._v("Редактирование работы")]),o("form",{staticClass:"edit-block__form"},[o("div",{staticClass:"form__upload-img"},[o("label",{staticClass:"form__upload-img-container",class:{filled:this.renderedPhotoUrl.length,error:r.validation.firstError("renderedPhotoUrl")},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}},[o("input",{staticClass:"form__upload-img-input",attrs:{type:"file"},on:{change:r.appendFileAndRenderPhoto}}),r._m(0),o("div",{staticClass:"form__upload-img-error"},[o("error-tooltip",{attrs:{errorText:r.validation.firstError("renderedPhotoUrl")}})],1)])]),o("div",{staticClass:"form__upload-text"},[o("div",{staticClass:"form__row"},[o("div",{staticClass:"form__col"},[o("label",{staticClass:"form__text-block",class:{error:r.validation.firstError("work.title")},attrs:{for:"title"}},[o("span",{staticClass:"form__label"},[r._v("Название")]),o("input",{directives:[{name:"model",rawName:"v-model",value:r.work.title,expression:"work.title"}],staticClass:"form__input form__input--title",attrs:{type:"text",name:"title",placeholder:"Введите название работы"},domProps:{value:r.work.title},on:{input:function(t){t.target.composing||r.$set(r.work,"title",t.target.value)}}}),o("div",{staticClass:"form__text-error"},[o("error-tooltip",{attrs:{errorText:r.validation.firstError("work.title")}})],1)])])]),o("div",{staticClass:"form__row"},[o("div",{staticClass:"form__col"},[o("label",{staticClass:"form__text-block",class:{error:r.validation.firstError("work.link")},attrs:{for:"link"}},[o("span",{staticClass:"form__label"},[r._v("Ссылка")]),o("input",{directives:[{name:"model",rawName:"v-model",value:r.work.link,expression:"work.link"}],staticClass:"form__input form__input--link",attrs:{type:"text",name:"link",placeholder:"Вставьте ссылку"},domProps:{value:r.work.link},on:{input:function(t){t.target.composing||r.$set(r.work,"link",t.target.value)}}}),o("div",{staticClass:"form__text-error"},[o("error-tooltip",{attrs:{errorText:r.validation.firstError("work.link")}})],1)])])]),o("div",{staticClass:"form__row form__row--textarea"},[o("div",{staticClass:"form__col"},[o("label",{staticClass:"form__text-block form__text-block--textarea",class:{error:r.validation.firstError("work.description")},attrs:{for:"description"}},[o("span",{staticClass:"form__label"},[r._v("Описание")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:r.work.description,expression:"work.description"}],staticClass:"form__textarea",attrs:{name:"description",rows:"4",placeholder:"Введите описание работы"},domProps:{value:r.work.description},on:{input:function(t){t.target.composing||r.$set(r.work,"description",t.target.value)}}}),o("div",{staticClass:"form__text-error"},[o("error-tooltip",{attrs:{errorText:r.validation.firstError("work.description")}})],1)])])]),o("div",{staticClass:"form__row form__row--tags"},[o("div",{staticClass:"form__col"},[o("tagsBlock",{attrs:{errorText:r.validation.firstError("work.techs")},on:{removeTag:function(r){return t.work.techs=r}},model:{value:r.work.techs,callback:function(t){r.$set(r.work,"techs",t)},expression:"work.techs"}})],1)]),o("div",{staticClass:"form__row form__row--btns"},[o("div",{staticClass:"form__col"},[o("div",{staticClass:"form__btns"},[o("button",{staticClass:"btn btn--cancel",attrs:{type:"button"},on:{click:r.CLOSE_FORM}},[r._v("Отмена")]),r.editBlock.editMode?r._e():o("button",{staticClass:"btn btn--save",attrs:{type:"button"},on:{click:r.addNewWork}},[r._v("Сохранить")]),r.editBlock.editMode?o("button",{staticClass:"btn btn--save",attrs:{type:"button"},on:{click:r.saveEditedWork}},[r._v("Сохранить")]):r._e()])])])])])])};o._withStripped=!0;var i=e(97),a=e(348);function n(t,r,e,o,i,a,n){try{var s=t[a](n),l=s.value}catch(t){return void e(t)}s.done?r(l):Promise.resolve(l).then(o,i)}function s(t){return function(){var r=this,e=arguments;return new Promise(function(o,i){var a=t.apply(r,e);function s(t){n(a,o,i,s,l,"next",t)}function l(t){n(a,o,i,s,l,"throw",t)}s(void 0)})}}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){c(t,r,e[r])})}return t}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var d={mixins:[e(348).mixin],validators:{renderedPhotoUrl:function(t){return a.Validator.value(t).required("Загрузите картинку")},"work.title":function(t){return a.Validator.value(t).required("Введите название")},"work.link":function(t){return a.Validator.value(t).required("Вставьте ссылку")},"work.description":function(t){return a.Validator.value(t).required("Введите описание")},"work.techs":function(t){return a.Validator.value(t).required("Рекомендуется указать какой-либо тег")}},components:{tagsBlock:function(){return e.e(13).then(e.bind(null,418))},errorTooltip:function(){return e.e(0).then(e.bind(null,385))}},data:function(){return{renderedPhotoUrl:"",work:{title:"",techs:"",photo:"",link:"",description:""}}},computed:l({},Object(i.e)("works",{editBlock:function(t){return t.editBlock},changedWork:function(t){return t.changedWork}}),{remotePhotoPath:function(){return"https://webdev-api.loftschool.com/".concat(this.work.photo)}}),methods:l({},Object(i.b)("works",["addWork","editWork"]),Object(i.d)("works",["CLOSE_FORM","ADD_TAGS"]),{appendFileAndRenderPhoto:function(t){var r=this,e=t.target.files[0];this.work.photo=e;var o=new FileReader;try{o.readAsDataURL(e),o.onload=function(){r.renderedPhotoUrl=o.result}}catch(t){console.error(t.message)}},addNewWork:function(){var t=s(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,r=this.createWorkFormData(),t.next=9,this.addWork(r);case 9:this.CLOSE_FORM(),t.next=15;break;case 12:t.prev=12,t.t1=t.catch(5),console.error(t.t1.message);case 15:case"end":return t.stop()}},t,this,[[5,12]])}));return function(){return t.apply(this,arguments)}}(),createWorkFormData:function(){var t=new FormData;return t.append("title",this.work.title),t.append("techs",this.work.techs),t.append("photo",this.work.photo),t.append("link",this.work.link),t.append("description",this.work.description),t},setEditedWork:function(){this.work=l({},this.changedWork),this.renderedPhotoUrl=this.remotePhotoPath},saveEditedWork:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,this.editWork(this.work);case 8:this.CLOSE_FORM(),t.next=14;break;case 11:t.prev=11,t.t1=t.catch(5),console.error(t.t1.message);case 14:case"end":return t.stop()}},t,this,[[5,11]])}));return function(){return t.apply(this,arguments)}}()}),created:function(){this.editBlock.editMode&&this.setEditedWork()}},u=(e(398),e(96)),p=Object(u.a)(d,o,[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form__upload-img-content"},[r("span",{staticClass:"form__upload-img-desc"},[this._v("Перетащите или загрузите для загрузки изображения")]),r("div",{staticClass:"btn btn--upload-works-img"},[this._v("ЗАГРУЗИТЬ")])])}],!1,null,null,null);p.options.__file="src/admin/components/edit-block.vue";r.default=p.exports}}]);