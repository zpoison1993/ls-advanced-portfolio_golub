<template lang="pug">
    tr.skill__row(:class="{ 'skill__row--edit': editMode }")
        td.skill__col.skill__col--title
            input(type="text" placeholder="Новый навык" v-model="editedSkill.title").skill__input.skill__input--title
        td.skill__col.skill__col--percent
            .skill__percent-block
                input(type="text" placeholder="100" v-model="editedSkill.percent").skill__input.skill__input--percents
                span.skill__percent-symbol %
        td.skill__col.skill__col--btns
            .skill__btns-block
                .skill__edit-type-btns
                    button(type='button' @click="editExistedSkill").btn.btn--save-skill
                    button(type='button' @click="removeExistedSkill").btn.btn--delete-skill
                .skill__read-type-btns
                    button(type='button' @click="editMode = true").btn.btn--edit-skill
                    button(type='button' @click="removeExistedSkill").btn.btn--trash-skill
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editMode: false,
      editedSkill: { ...this.skill }
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
  
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
       alert('Навык успешно удален');
      } catch (error) {
        console.error(error.message);
        alert('Не удалось удалить навык')
      }
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        alert("Навык успешно изменен");
        this.editMode = false;
      } catch (error) {
        console.error(error.message);
        alert('Не удалось изменить навык');
      }
    }
  }
};
</script>