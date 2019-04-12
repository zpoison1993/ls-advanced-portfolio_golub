<template lang="pug">
  .skill-block(
    :class="{ 'skill-block--new': editMode }"
  )
    .skill-block__upper-row(
      :class="{'error' : validation.firstError('editedCategory.category')}"
    )
      input(type="text" v-model="editedCategory.category" placeholder="Название новой группы" ).skill-block__title
      .skill-block__title-error
        error-tooltip(
          :errorText="validation.firstError('editedCategory.category')"
        )
      .skill-block__upper-btns
        .skill-block__new-type-btns
          button(
            type='button'
            @click="editCurrSkillBlock(editedCategory)"
          ).btn.btn--save-skill-block
          button(
            type='button'
            @click="removeCurrSkillBlock(category.id)"
          ).btn.btn--delete-skill-block
        .skill-block__existing-type-btns
          button(
            type='button'
            @click="editMode = true"
          ).btn.btn--edit-skill-block
    .skill-block__table
        skillTableList(
        :skills="skills"
      )
    .skill-block__lower-row
        .skill__input(:class="{'error' : validation.firstError('skill.title')}")        
            input(type="text" placeholder="Новый навык" v-model="skill.title").skill__input.skill__input--title.skill__input--title-new
            .skill__input-error.skill__input-error--title
                error-tooltip(:errorText="validation.firstError('skill.title')")
        .skill__percents.skill__percents--new-skill(
        :class="{'error' : validation.firstError('skill.percent')}"
        )
            input(type="text" placeholder="100" v-model="skill.percent").skill__input.skill__input--percents.skill__input--percents-new
            span.skill__percent-symbol %
            .skill__input-error.skill__input-error--percent
                error-tooltip(:errorText="validation.firstError('skill.percent')")
        button(
        type="button"
        @click="addNewSkill").btn.btn--add-skill +
</template>

<script>
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedCategory.category": value => {
      return Validator.value(value).required("Введите название группы");
    },
    "skill.title": value => {
      return Validator.value(value).required("Введите название навыка");
    },
    "skill.percent": value => {
      return Validator.value(value).required("Введите значение").digit("Тут должно быть число").between(0, 100, "Значение должно быть между 0 и 100");
    },
  },

  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {
      editMode: false,
      editedCategory: {...this.category},
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    skillTableList: () => import("./skill-table-list.vue"),
    errorTooltip: () => import("./error-tooltip.vue")
  },
  methods: {
    ...mapActions("categories", ['removeSkillGroup', 'editSkillGroup']),
    ...mapActions("skills", ['addSkill']),
    async removeCurrSkillBlock(skillBlockId) {
      try {
        await this.removeSkillGroup(skillBlockId);
      } catch (error) {
        console.log(error.message);
      }
    },
    async editCurrSkillBlock(skillBlock) {
      if ((await this.$validate("editedCategory.category")) === false) return;
      try {
        await this.editSkillGroup(skillBlock);
        alert('Имя категории изменено')
        this.editMode = false;
      } catch (error) {
        console.log(error.message);
        alert('При изменении имени категории произошла ошибка')
      }
    },
    async addNewSkill() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addSkill(this.skill);
        alert('Новый навык успешно добавлен')
        this.skill.title = "";
        this.skill.percent = "";
        
      } catch (error) {
        console.log(error.message);
        alert('При добавлении навыка произошла ошибка')
      }
    }
  }
}
</script>

<style lang="postcss">

.skill-block__upper-row {
    position:relative;
}
.skill-block__title-error{
    position:absolute;
    bottom:-2.5rem;
    display:none;
}
.skill-block__upper-row.error {
    & .skill-block__title-error {
        display:block;
    }
}

.skill-block__lower-row {
    position:relative;
}

.skill__input-error {
    position:absolute;
    bottom:-2.5rem;

    &--title {
        transform: translate(-20%);
    }
    &--percent {
        transform: translate(-20%);
    }
    
}

.skill__percents.skill__percents--new-skill, .skill__input {
    .skill__input-error {
        display:none;
    }
}

.skill__percents.skill__percents--new-skill.error, .skill__input.error {
    .skill__input-error {
        display:block;
    }
}
</style>