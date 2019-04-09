<template lang="pug">
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
                        img(src="../../../images/content/VS2.jpg" alt="Фотография автора отзыва").reviews-author__img
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
                        img(src="../../../images/content/DK2.png" alt="Фотография автора отзыва").reviews-author__img
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
                        img(src="../../../images/content/VS2.jpg" alt="Фотография автора отзыва").reviews-author__img
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
                        img(src="../../../images/content/DK2.png" alt="Фотография автора отзыва").reviews-author__img
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