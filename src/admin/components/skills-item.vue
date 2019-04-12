<template lang="pug">
    table.skill-tablelist
        tr.skill__row
            td.skill__col.skill__col--title {{skill.title}}
                input(type="text" placeholder="Новый навык" value="GIT").skill__input.skill__input--title
            td.skill__col.skill__col--percent {{skill.percent}}
                .skill__percent-block
                    input(type="text" placeholder="100" value="100").skill__input.skill__input--percents
                    span.skill__percent-symbol %
            td.skill__col.skill__col--btns
                .skill__btns-block
                    .skill__edit-type-btns
                        button(type='button').btn.btn--save-skill
                        button(type='button' @click = "removeExistedSkill").btn.btn--delete-skill
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
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        skill: Object
    },
    methods: {
        ...mapActions('skills',['removeSkill']),
        async removeExistedSkill() {
            try {
                await this.removeSkill(this.skill.id);
            }catch (error) {}
        }
    }
}
</script>