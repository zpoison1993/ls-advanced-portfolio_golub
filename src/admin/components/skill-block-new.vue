<template lang="pug">
  .skill-block.skill-block--new
    .skill-block__upper-row.new(
      :class="{'error' : validation.firstError('skillTitle')}")
      input(type="text" placeholder="Название новой группы" v-model="skillTitle").skill-block__title
      .input__error-tooltip.skillGroup
        error-tooltip(
          :errorText="validation.firstError('skillTitle')"
        )
      .skill-block__upper-btns
        .skill-block__new-type-btns
          button(
            type='button'
            @click="addSkillGroup"
          ).btn.btn--save-skill-block

          button(
            type='button'
            @click="$emit('closeNewSkillCard')"
          ).btn.btn--delete-skill-block

        .skill-block__existing-type-btns
          button(type='button').btn.btn--edit-skill-block
    .skill-block__table
      skillTableList
    .skill-block__lower-row.blocked
      input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--title-new
      .skill__percents.skill__percents--new-skill
        input(type="text" placeholder="100").skill__input.skill__input--percents.skill__input--percents-new
        span.skill__percent-symbol %
      button(type="button").btn.btn--add-skill +  
</template>

<script>
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "skillTitle": value => {
      return Validator.value(value).required("Введите название группы");
    }
  },
  components: {
    skillTableList: () => import("./skill-table-list.vue"),
    errorTooltip: () => import("./error-tooltip.vue")
  },
  data() {
    return {
      skillTitle: ""
    }
  },
  methods: {
    ...mapActions("categories", ['addNewSkillGroup']),
    async addSkillGroup() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
        this.$emit('closeNewSkillCard');
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.skill-block__lower-row.blocked {
    opacity:0.5;
    filter:grayscale(100%);
    poiner-events:none;
    user-select:none;
}

.skill-block__upper-row.new {
    position:relative;
    & .input__error-tooltip.skillGroup {
        display: none;
    }
    &.error {
        .input__error-tooltip.skillGroup {
        display: block;
    }
    }
}
.input__error-tooltip.skillGroup{
    position:absolute;
    bottom:-2.5rem;
}


</style>