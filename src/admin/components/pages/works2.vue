<template lang="pug">
  section.works
    .container.works__container
      .section-heading.works__section-heading
        h2.title.title--about Блок "Работы"
      editBlock(
        v-if="editBlock.show"
      )
      workBlocks     
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    editBlock: () => import("../edit-block.vue"),
    workBlocks: () => import("../work-blocks.vue"),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('works', {
      editBlock: state => state.editBlock
    })
  },
  methods: {
  },
  created() {
    this.editBlock.show = true;
  }
}
</script>