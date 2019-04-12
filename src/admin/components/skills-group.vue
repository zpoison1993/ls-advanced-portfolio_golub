<template lang="pug">
    .skill-block.skill-block--new
        .skill-block__upper-row
            h2.skill-block__title {{category.category}}
            .skill-block__upper-btns
                .skill-block__new-type-btns
                    button(type='button').btn.btn--save-skill-block
                    button(type='button').btn.btn--delete-skill-block
                .skill-block__existing-type-btns
                    button(type='button').btn.btn--edit-skill-block
        .skill-block__table
            skillsItem(
                v_for="skill in skills"
                :key="skill.id"
                :skill = "skill"
            )    
        .skill-block__lower-row
            input(type="text" v-model="skill.title" placeholder="Новый навык").skill__input.skill__input--title.skill__input--title-new
            
            .skill__percents.skill__percents--new-skill
                input(type="text"  v-model="skill.percent" placeholder="100").skill__input.skill__input--percents.skill__input--percents-new
                span.skill__percent-symbol %
            button(type="button" @click="addNewSkill").btn.btn--add-skill +
</template>


<script>
import { mapActions } from 'vuex'
export default {
    props: {
        category: Object,
        skills: Array
    },
    data() {
        return {
            skill: {
                category: this.category.id,
                title: '',
                percent: ''
            }
        }
    },
    components: {
        skillsItem: () => import('./skills-item.vue')
    },
    methods: {
        ...mapActions('skills',['addSkill']),
        async addNewSkill() {
            try {
                await this.addSkill(this.skill);

            }
            catch(error) {
                console.log(error);
            }
        }
    },
}
</script>