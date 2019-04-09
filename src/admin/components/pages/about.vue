<template lang="pug">
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
</template>