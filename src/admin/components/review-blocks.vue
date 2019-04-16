<template lang="pug">
  .reviews-blocks
    ul.reviews-blocks__list
      li.reviews-blocks__item.reviews-blocks__item--create
        button(
          type="button"
          @click="showFormAndTurnEditModeOff"
        ).btn.btn--create-new
          span.create-new__icon
          h4.create-new__title Добавить отзыв
      li.reviews-blocks__item(
        v-for="review in reviews"
        :key="review.id"
      )
        reviewBlock(
          :review="review"
        )
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  components: {
    reviewBlock: () => import("./review-block.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_OFF']),
    ...mapActions('reviews', ['fetchReviews']),
    showFormAndTurnEditModeOff() {
      this['TURN_EDIT_MODE_OFF']();
      this['SHOW_FORM']();
    }
  },
  async created() {
    try {
      await this.fetchReviews();
    } catch (error) {
      console.error(error.message);
    }
  }
};
</script>