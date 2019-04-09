<template lang="pug">
    header.header
        .container.header__container
            .header__column.header__column--left
                .user-info.header__col-content
                    .user-info__avatar-frame
                        img(src="../../images/content/user1.jpg" alt="Фотография пользователя").avatar
                    .user-info__text
                    .user-info__name Владимир Голубь
                    a(href="").quit-btn.quit-btn--phone Выйти
                .admin-desc Панель администрирования
            .header__column.header__column--right
                a(href="").quit-btn Выйти
</template>