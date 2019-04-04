<template lang="pug" scoped>
  .admin-panel  
    .login
      .login__content
        button(type="button").login__form-close
        form.login__form(@submit.prevent="login")
          h1.login__form-title Авторизация
          .login__row
            app-input(
              title="Логин"
              icon="user"
              v-model="user.name"
              :errorText="validation.firstError('user.name')"
            )            
          .login__row
            app-input(
              title="Пароль"
              icon="keyy"
              type="password"
              v-model="user.password"
              :errorText="validation.firstError('user.password')"
            )           
          .login__btn
            button(type="submit" :disabled="disableSubmit").login__send-data Отправить
    .content-wrapper
      header.header
        .container.header__container
          .header__column.header__column--left
            .user-info.header__col-content
              .user-info__avatar-frame
                img(src="../images/content/user1.jpg" alt="Фотография пользователя").avatar
              .user-info__text
                .user-info__name Владимир Голубь
                a(href="").quit-btn.quit-btn--phone Выйти
            .admin-desc Панель администрирования
          .header__column.header__column--right
            a(href="").quit-btn Выйти
      section.tabs
        .container.tabs__container
          ul.tabs
            - var usertabs = ['Обо мне', 'Работы','Отзывы'];
            each item in usertabs
              li.tabs__item
                a(href="#").tabs__link #{item}
      main.admin__content
        section.about
          .container.about__container
            .section-heading.about__section-heading
              h2.title.title--about Блок "Обо мне"
              button(type='button').btn.btn--add-skills-group Добавить группу
            .about__blocks
              .skill-blocks
                ul.skill-blocks__list
                  li.skill-blocks__item
                    .skill-block.skill-block--new
                      .skill-block__upper-row
                        input(type="text" placeholder="Название новой группы").skill-block__title
                        .skill-block__upper-btns
                          .skill-block__new-type-btns
                            button(type='button').btn.btn--save-skill-block
                            button(type='button').btn.btn--delete-skill-block
                          .skill-block__existing-type-btns
                            button(type='button').btn.btn--edit-skill-block
                      .skill-block__table
                        table.skill-tablelist
                      .skill-block__lower-row
                        input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--title-new
                        .skill__percents.skill__percents--new-skill
                          input(type="text" placeholder="100").skill__input.skill__input--percents.skill__input--percents-new
                          span.skill__percent-symbol %
                        button(type="button").btn.btn--add-skill +    
                  li.skill-blocks__item
                    .skill-block.skill-block--new
                      .skill-block__upper-row
                        input(type="text" placeholder="Название новой группы" value="Workflow").skill-block__title
                        .skill-block__upper-btns
                          .skill-block__new-type-btns
                            button(type='button').btn.btn--save-skill-block
                            button(type='button').btn.btn--delete-skill-block
                          .skill-block__existing-type-btns
                            button(type='button').btn.btn--edit-skill-block
                      .skill-block__table
                        table.skill-tablelist
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="GIT").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="100").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="Terminal").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="90").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="Gulp").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="80").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="Webpack").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="85").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                      .skill-block__lower-row
                        input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--title-new
                        .skill__percents.skill__percents--new-skill
                          input(type="text" placeholder="100").skill__input.skill__input--percents.skill__input--percents-new
                          span.skill__percent-symbol %
                        button(type="button").btn.btn--add-skill +
                  li.skill-blocks__item
                    .skill-block
                      .skill-block__upper-row
                        input(type="text" placeholder="Название новой группы" value="Frontend").skill-block__title
                        .skill-block__upper-btns
                          .skill-block__new-type-btns
                            button(type='button').btn.btn--save-skill-block
                            button(type='button').btn.btn--delete-skill-block
                          .skill-block__existing-type-btns
                            button(type='button').btn.btn--edit-skill-block
                      .skill-block__table
                        table.skill-tablelist
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="HTML5").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="100").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                          tr.skill__row.skill__row--edit
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="CSS3").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="90").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="Javascript").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="80").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                          tr.skill__row
                            td.skill__col.skill__col--title
                              input(type="text" placeholder="Новый навык" value="Jquery и Vue.js").skill__input.skill__input--title
                            td.skill__col.skill__col--percent
                              .skill__percent-block
                                input(type="text" placeholder="100" value="85").skill__input.skill__input--percents
                                span.skill__percent-symbol %
                            td.skill__col.skill__col--btns
                              .skill__btns-block
                                .skill__edit-type-btns
                                  button(type='button').btn.btn--save-skill
                                  button(type='button').btn.btn--delete-skill
                                .skill__read-type-btns
                                  button(type='button').btn.btn--edit-skill
                                  button(type='button').btn.btn--trash-skill
                      .skill-block__lower-row
                        input(type="text" placeholder="Новый навык").skill__input.skill__input--title
                        .skill__percents.skill__percents--new-skill
                          input(type="text" placeholder="100").skill__input.skill__input--percents.skill__input--percents-new
                          span.skill__percent-symbol %
                        button(type="button").btn.btn--add-skill +
        section.works
          .container.works__container
            .section-heading.works__section-heading
              h2.title.title--about Блок "Работы"
            .edit-block
              h3.edit-block__title Редактирование работы
              form.edit-block__form
                .form__upload-img
                  .form__upload-img-container
                    .form__upload-img-content
                      span.form__upload-img-desc Перетащите или загрузите для загрузки изображения
                      button(type="button").btn.btn--upload-works-img ЗАГРУЗИТЬ
                .form__upload-text
                  .form__row
                    .form__col
                      label.form__text-block
                        span.form__label Название
                        input.form__input.form__input--title(type="text" name="title" placeholder="Введите название работы")
                  .form__row
                    .form__col
                      label.form__text-block
                        span.form__label Ссылка
                        input.form__input.form__input--link(type="text" name="link" placeholder="Вставьте ссылку")                      
                  .form__row.form__row--textarea
                    .form__col
                      label.form__text-block.form__text-block--textarea(for="description")
                        span.form__label Описание
                        textarea.form__textarea(name="description" rows="4" placeholder="Введите описание работы")
                  .form__row.form__row--tags
                    .form__col
                      label.form__text-block
                        span.form__label Добавление тега
                        input.form__input.form__input--tags(type="text" name="tags" placeholder="Добавьте теги")
                  .form__row
                    .form__col
                      ul.form__tags-list
                        li.form__tags-item
                          span.form__tags-name HTML
                          button(type="button").btn.btn--remove-tag
                        li.form__tags-item
                          span.form__tags-name CSS
                          button(type="button").btn.btn--remove-tag
                        li.form__tags-item
                          span.form__tags-name JavaScript
                          button(type="button").btn.btn--remove-tag
                  .form__row.form__row--btns
                    .form__col.form__col--btns
                      .form__btns
                        button(type="button").btn.btn--cancel Отмена
                        button(type="button").btn.btn--save Сохранить
            .works-blocks
              ul.works-blocks__list
                li.works-blocks__item.works-blocks__item--create
                  button(type="button").btn.btn--create-new
                    span.create-new__icon
                    h4.create-new__title Добавить работу
                li.works-blocks__item.works-blocks__item--edit
                  .works-block
                    .works-block__img-wrapper
                      img(src="../images/content/work1.jpg" alt="Превью одной из работ").works-block__img
                      .works-block__tags
                        .tags
                          ul.tags__list
                            li.tags_item HTML
                            li.tags_item CSS
                            li.tags_item JavaScript
                    .works-block__info
                      h5.works-block__title Сайт школы образования
                      .works-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a(href="http://loftschol.com").works-block__link http://loftschool.com
                      .works-block__btns
                        button(type="button").btn.btn--works-block-edit Править
                        button(type="button").btn.btn--works-block-remove Удалить    
                li.works-blocks__item
                  .works-block
                    .works-block__img-wrapper
                      img(src="../images/content/work2.jpg" alt="Превью одной из работ").works-block__img
                    .works-block__info
                      h5.works-block__title Сайт школы образования
                      .works-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a(href="http://loftschol.com").works-block__link http://loftschool.com
                      .works-block__btns
                        button(type="button").btn.btn--works-block-edit Править
                        button(type="button").btn.btn--works-block-remove Удалить   
                li.works-blocks__item
                  .works-block
                    .works-block__img-wrapper
                      img(src="../images/content/work3.jpg" alt="Превью одной из работ").works-block__img
                    .works-block__info
                      h5.works-block__title Сайт школы образования
                      .works-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a(href="http://loftschol.com").works-block__link http://loftschool.com
                      .works-block__btns
                        button(type="button").btn.btn--works-block-edit Править
                        button(type="button").btn.btn--works-block-remove Удалить   
                li.works-blocks__item
                  .works-block
                    .works-block__img-wrapper
                      img(src="../images/content/work4.jpg" alt="Превью одной из работ").works-block__img
                    .works-block__info
                      h5.works-block__title Сайт школы образования
                      .works-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a(href="http://loftschol.com").works-block__link http://loftschool.com
                      .works-block__btns
                        button(type="button").btn.btn--works-block-edit Править
                        button(type="button").btn.btn--works-block-remove Удалить   
        section.reviews
          .container.reviews__container
            .section-heading.reviews__section-heading
              h2.title.title--reviews Блок "Отзывы"
            .edit-block
              h3.edit-block__title Новый отзыв
              form.edit-block__form.edit-block__form--reviews
                .form__upload-img.form__upload-img--reviews
                  .form__upload-img-container.form__upload-img-container--reviews
                    button(type="button").btn.btn--upload-reviews-img Добавить фото 
                .form__upload-text.form__upload-text--reviews
                  .form__row.form__row--author-data
                    form__col.form__col--reviews
                      label.form__text-block
                        span.form__label Имя автора 
                        input.form__input.form__input--name(type="text" name="name" placeholder="Введите имя автора")
                    .form__col.form__col--reviews
                      label.form__text-block
                        span.form__label Титул автора
                        input.form__input.form__input--position(type="text" name="position" placeholder="Введите титул автора")  
                  .form__row.form__row--textarea
                    .form__col.form__col--review-text
                      label.form__text-block.form__text-block--textarea
                        span.form__label Отзыв
                        textarea.form__textarea(name="review" rows="4" placeholder="Введите Ваш отзыв")
                  .form__row.form__row--btns
                    .form__col.form__col--btns
                      .form__btns.form__btns--reviews
                        button(type="button").btn.btn--cancel Отмена
                        button(type="button").btn.btn--save Сохранить
            .reviews-blocks
              ul.reviews-blocks__list
                li.reviews-blocks__item.reviews-blocks__item--create
                  button(type="button").btn.btn--create-new
                    span.create-new__icon
                    h4.create-new__title Добавить отзыв
                li.reviews-blocks__item
                  .reviews-block
                    .reviews-block__upper
                      .reviews-author__img-frame
                        img(src="../images/content/VS2.jpg" alt="Фотография автора отзыва").reviews-author__img
                      .reviews-author__desc
                        .reviews-author__name Владимир Сабанцев
                        .reviews-author__position Преподаватель
                    .reviews-block__content
                      .reviews-block__desc
                        p Этот код выдержит любые испытания. Только, пожалуйста, не загружайте сайт на слишком устаревших браузерах
                      .reviews-block__btns
                          button(type="button").btn.btn--works-block-edit Править
                          button(type="button").btn.btn--works-block-remove Удалить

                li.reviews-blocks__item
                  .reviews-block
                    .reviews-block__upper
                      .reviews-author__img-frame
                        img(src="../images/content/DK2.png" alt="Фотография автора отзыва").reviews-author__img
                      .reviews-author__desc
                        .reviews-author__name Ковальчук Дмитрий
                        .reviews-author__position Основатель LoftSchool
                    .reviews-block__content
                      .reviews-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      .reviews-block__btns
                          button(type="button").btn.btn--works-block-edit Править
                          button(type="button").btn.btn--works-block-remove Удалить
                li.reviews-blocks__item
                  .reviews-block
                    .reviews-block__upper
                      .reviews-author__img-frame
                        img(src="../images/content/VS2.jpg" alt="Фотография автора отзыва").reviews-author__img
                      .reviews-author__desc
                        .reviews-author__name Владимир Сабанцев
                        .reviews-author__position Преподаватель
                    .reviews-block__content
                      .reviews-block__desc
                        p Этот код выдержит любые испытания. Только, пожалуйста, не загружайте сайт на слишком устаревших браузерах
                      .reviews-block__btns
                          button(type="button").btn.btn--works-block-edit Править
                          button(type="button").btn.btn--works-block-remove Удалить

                li.reviews-blocks__item
                  .reviews-block
                    .reviews-block__upper
                      .reviews-author__img-frame
                        img(src="../images/content/DK2.png" alt="Фотография автора отзыва").reviews-author__img
                      .reviews-author__desc
                        .reviews-author__name Ковальчук Дмитрий
                        .reviews-author__position Основатель LoftSchool
                    .reviews-block__content
                      .reviews-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      .reviews-block__btns
                          button(type="button").btn.btn--works-block-edit Править
                          button(type="button").btn.btn--works-block-remove Удалить                   





</template>

<script>
import { Validator } from "simple-vue-validator";
import axios from "axios";
import appInput from "./components/input";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name: "",
        password: ""
      }
    };
  },
  components: {
    appInput
  },
  methods: {
    async login() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;
      try {
        axios
          .post("//jsonplaceholder.typicode.com/posts", {
            name: this.user.name,
            password: this.user.password
          })
          .then(response => {
            const report = JSON.stringify(response, null, 2);
            console.log(report);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="pcss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800");  
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./styles/blocks/*.pcss";
 /*Authorization styles */

 /* */

 /* Header styles*/

 /* */
</style>