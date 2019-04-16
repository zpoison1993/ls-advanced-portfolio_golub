(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{389:function(e,t,r){},399:function(e,t,r){"use strict";var o=r(389);r.n(o).a},414:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit-block"},[r("h3",{staticClass:"edit-block__title"},[e._v("Создать Отзыв")]),r("form",{staticClass:"edit-block__form edit-block__form--reviews"},[r("div",{staticClass:"form__upload-img form__upload-img--reviews"},[r("label",{staticClass:"form__upload-img-wrapper"},[r("div",{staticClass:"form__upload-img-container form__upload-img-container--reviews",class:{filled:this.renderedPhotoUrl.length,error:e.validation.firstError("renderedPhotoUrl")},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}},[r("input",{staticClass:"form__upload-img-input",attrs:{type:"file"},on:{change:e.appendFileAndRenderPhoto}}),r("div",{staticClass:"form__upload-img-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("renderedPhotoUrl")}})],1)]),r("div",{staticClass:"btn btn--upload-reviews-img"},[e._v("Добавить фото")])])]),r("div",{staticClass:"form__upload-text form__upload-text--reviews"},[r("div",{staticClass:"form__row form__row--author-data"},[r("div",{staticClass:"form__col form__col--reviews"},[r("label",{staticClass:"form__text-block",class:{error:e.validation.firstError("review.author")},attrs:{for:"name"}},[r("span",{staticClass:"form__label"},[e._v("Имя автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"form__input form__input--name",attrs:{type:"text",name:"name",placeholder:"Введите имя автора"},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}}),r("div",{staticClass:"form__text-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.author")}})],1)])]),r("div",{staticClass:"form__col form__col--reviews"},[r("label",{staticClass:"form__text-block",class:{error:e.validation.firstError("review.occ")},attrs:{for:"position"}},[r("span",{staticClass:"form__label"},[e._v("Титул автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"form__input form__input--position",attrs:{type:"text",name:"position",placeholder:"Введите титул автора"},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}}),r("div",{staticClass:"form__text-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.occ")}})],1)])])]),r("div",{staticClass:"form__row form__row--textarea"},[r("div",{staticClass:"form__col form__col--review-text"},[r("label",{staticClass:"form__text-block form__text-block--textarea",class:{error:e.validation.firstError("review.text")},attrs:{for:"review"}},[r("span",{staticClass:"form__label"},[e._v("Отзыв")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"form__textarea",attrs:{name:"review",rows:"4",placeholder:"Введите Ваш отзыв"},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}}),r("div",{staticClass:"form__text-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.text")}})],1)])])]),r("div",{staticClass:"form__row form__row--btns"},[r("div",{staticClass:"form__col form__col--btns"},[r("div",{staticClass:"form__btns form__btns--reviews"},[r("button",{staticClass:"btn btn--cancel",attrs:{type:"button"},on:{click:e.CLOSE_FORM}},[e._v("Отмена")]),e.editBlockReview.editMode?e._e():r("button",{staticClass:"btn btn--save",attrs:{type:"button"},on:{click:e.addNewReview}},[e._v("Сохранить")]),e.editBlockReview.editMode?r("button",{staticClass:"btn btn--save",attrs:{type:"button"},on:{click:e.saveEditedReview}},[e._v("Сохранить")]):e._e()])])])])])])};o._withStripped=!0;var i=r(97),a=r(348);function n(e,t,r,o,i,a,n){try{var s=e[a](n),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(o,i)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)})}}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){l(e,t,r[t])})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={mixins:[r(348).mixin],validators:{renderedPhotoUrl:function(e){return a.Validator.value(e).required("Загрузите фотографию")},"review.author":function(e){return a.Validator.value(e).required("Введите имя автора")},"review.occ":function(e){return a.Validator.value(e).required("Введите титул автора")},"review.text":function(e){return a.Validator.value(e).required("Введите отзыв")}},components:{errorTooltip:function(){return r.e(0).then(r.bind(null,385))}},data:function(){return{renderedPhotoUrl:"",review:{photo:"",author:"",occ:"",text:""}}},computed:c({},Object(i.e)("reviews",{editBlockReview:function(e){return e.editBlockReview},changedReview:function(e){return e.changedReview}}),{remotePhotoPath:function(){return"https://webdev-api.loftschool.com/".concat(this.review.photo)}}),methods:c({},Object(i.d)("reviews",["CLOSE_FORM"]),Object(i.b)("reviews",["addReview","editReview"]),{appendFileAndRenderPhoto:function(e){var t=this,r=e.target.files[0];this.review.photo=r;var o=new FileReader;try{o.readAsDataURL(r),o.onload=function(){t.renderedPhotoUrl=o.result}}catch(e){console.error(e.message)}},createReviewFormData:function(){var e=new FormData;return e.append("author",this.review.author),e.append("occ",this.review.occ),e.append("text",this.review.text),e.append("photo",this.review.photo),e},addNewReview:function(){var e=s(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,this.createReviewFormData();case 8:t=e.sent,this.addReview(t),this.CLOSE_FORM(),e.next=16;break;case 13:e.prev=13,e.t1=e.catch(5),console.error(e.t1.message);case 16:case"end":return e.stop()}},e,this,[[5,13]])}));return function(){return e.apply(this,arguments)}}(),setEditedReview:function(){this.review=c({},this.changedReview),this.renderedPhotoUrl=this.remotePhotoPath},saveEditedReview:function(){var e=s(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t={id:this.review.id,data:this.createReviewFormData()},e.next=9,this.editReview(t);case 9:this.CLOSE_FORM(),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(5),console.error(e.t1.message);case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(){return e.apply(this,arguments)}}()}),created:function(){this.editBlockReview.editMode&&this.setEditedReview()}},u=(r(399),r(96)),d=Object(u.a)(v,o,[],!1,null,null,null);d.options.__file="src/admin/components/edit-block-review.vue";t.default=d.exports}}]);