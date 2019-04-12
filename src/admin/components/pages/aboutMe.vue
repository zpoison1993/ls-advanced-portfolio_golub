<template lang="pug">
  section.about
    .container.about__container
      .section-heading.about__section-heading
        h1.title.title--about Блок "Обо мне"
        button(type='button' @click="showAddingForm = true").btn.btn--add-skills-group Добавить группу
      .about__blocks
        skillBlocks(
          :showAddingForm="showAddingForm"
          @closeNewSkillCard="showAddingForm = false"
        )          
</template>

<script>
export default {
  components: {
    skillBlocks: () => import("../skill-blocks.vue")
  },
  data() {
    return {
      showAddingForm: false
    };
  }
};
</script>