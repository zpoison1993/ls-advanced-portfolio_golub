<template lang="pug">
  table.skill-tablelist
    skillRow(
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    )
</template>

<script>
export default {
  components: {
    skillRow: () => import("./skill-row.vue"),
  },
  props: {
    skills: Array
  }
}
</script>