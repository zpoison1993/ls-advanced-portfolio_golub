<template lang="pug" scoped>
  .admin-panel  
    .login
      .login__content
        button(type="button").login__form-close
        form.login__form(@submit.prevent="login")
          h1.login__form-title Авторизация
          .login__row.login__row
            label.login__form-element
              span.login__form-label Логин
              input.login__form-input.login__form-input--name(type="text" name="name" placeholder="")
          .login__row
            label.login__form-element
              span.login__form-label Пароль
              input.login__form-input.login__form-input--password(type="password" name="password" placeholder="")
          .login__btn
            button(type="submit").login__send-data Отправить
    .content-wrapper
      header.header
        .container.header__container
          .header__column.header__column--left
            .user-info.header__col-content
              .user-info__avatar-frame
                img(src="../images/content/user1.jpg" alt="Фотография пользователя").avatar
              .user-info__name Владимир Голубь
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
                        input(type="text" placeholder="Новый навык").skill__input.skill__input--title
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
                        input(type="text" placeholder="Новый навык").skill__input.skill__input--title
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
                      button(type="button").btn.btn--upload-works-img Загрузить
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
                        input.form__input.form__input--tags(type="text" name="tags" placeholder="Если хотите, добавьте теги")
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
                    .form__col
                      .form__btns
                        button(type="button").btn.btn--cancel Отмена
                        button(type="button").btn.btn--save Сохранить
            .works-blocks
              ul.works-blocks__list
                li.works-blocks__item.works-blocks__item--create
                  button(type="button").btn.btn--create-new
                    span.create-new__icon
                    h4.create-new__title Добавить работу
                li.works-blocks__item
                  .works-block
                    .works-block__img-wrapper
                      img(src="../images/content/work1.jpg" alt="Превью одной из работ").works-block__img
                      .works-blcok__tags
                        .tags
                          ul.tags__list
                            li.tags_item HTML
                            li.tags_item CSS
                            li.tags_item JavaScript
                    .works-block__info
                      h5.works-block__title Сайт школы образования
                      works-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                      a(href="http://loftschol.com").works-block__link http://loftschool.com
                      .works-block__btns
                        button(type="button").btn.btn--works-block-edit Править
                        button(type="button").btn.btn--works-block-remove Удалить    



</template>
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