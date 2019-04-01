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
              input.login__form-input.login__form-input--password(type="text" name="name" placeholder="")
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
          container.about__container
            .section-heading.about__section-heading
              h2.title.title--about Блок "Обо мне"
              button(type='button').btn.btn--add-skills-group Добавить группу
            

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