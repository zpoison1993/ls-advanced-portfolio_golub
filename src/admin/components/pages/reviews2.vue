<template lang="pug">
  section.reviews
    .container.reviews__container
      .section-heading.reviews__section-heading
        h2.title.title--reviews Блок "Отзывы"
      editBlockReview(
        v-if="editBlockReview.show"
      )
      reviewBlocks
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    editBlockReview: () => import("../edit-block-review.vue"),
    reviewBlocks: () => import("../review-blocks.vue"),
  },
//   data() {
//     return {
//     }
//   },
  computed: {
    ...mapState("reviews", {
      editBlockReview: state => state.editBlockReview,
      editBlockReviewChanged: state => state.editBlockReviewChanged
    })
  },
  created() {
    this.editBlockReview.show = false;
  }
};
</script>