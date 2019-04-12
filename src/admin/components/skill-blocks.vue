<template lang="pug">
  .skill-blocks
    ul.skill-blocks__list
      li.skill-blocks__item(v-if="showAddingForm")
        skillBlockNew(
            @closeNewSkillCard="$emit('closeNewSkillCard')")
      li.skill-blocks__item(
        v-for="category in categories"
        :key="category.id"
      )
        skillBlock(
          :category="category"
          :skills="filterSkillsByCard(category.id)"
        )
</template>

<script>
import { mapActions, mapState } from "vuex";
import $axios from "../requests";
export default {
  components: {
    skillBlockNew: () => import("./skill-block-new.vue"),
    skillBlock: () => import("./skill-block.vue")
  },
  props: {
    showAddingForm: Boolean
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"]),
    ...mapActions("skills", ["fetchSkills"]),
    filterSkillsByCard(skillGroupId) {
      return this.skills.filter(skill => skill.category === skillGroupId);
    }
  },
  async created() {
    try {
      await this.fetchCategories();
    } catch (error) {
      console.log(error.message);
    }
    try {
      await this.fetchSkills();
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>