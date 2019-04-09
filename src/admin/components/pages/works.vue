<template lang="pug"> 
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
                        img(src="../../../images/content/work1.jpg" alt="Превью одной из работ").works-block__img
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
                        img(src="../../../images/content/work2.jpg" alt="Превью одной из работ").works-block__img
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
                        img(src="../../../images/content/work3.jpg" alt="Превью одной из работ").works-block__img
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
                        img(src="../../../images/content/work4.jpg" alt="Превью одной из работ").works-block__img
                    .works-block__info
                        h5.works-block__title Сайт школы образования
                        .works-block__desc
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="http://loftschol.com").works-block__link http://loftschool.com
                        .works-block__btns
                        button(type="button").btn.btn--works-block-edit Править
                        button(type="button").btn.btn--works-block-remove Удалить
</template>