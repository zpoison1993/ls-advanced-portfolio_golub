<template lang="pug">
  .review-block
    .reviews-block__upper
      .reviews-author__img-frame
        .reviews-author__img(
          :style="{'backgroundImage' : `url(${this.remotePhotoPath})`}"
        )
        .reviews-author__desc
          .reviews-author__name {{review.author}}
          .reviews-author__position {{review.occ}}
    .reviews-block__content
      .reviews-block__desc
        p {{review.text}}
      .reviews-block__btns
        button(type="button" @click="editReview").btn.btn--works-block-edit Править
        button(type="button" @click="removeReview(review.id)").btn.btn--works-block-remove Удалить
</template>

<script>
// import { BASE_URL } from "@/helpers/consts";
import { mapActions, mapMutations } from 'vuex';
export default {
  props: {
    review: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    },
  },
  methods: {
    ...mapActions('reviews', ['removeReview']),
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_ON', 'SET_EDITED_REVIEW']),
    showFormAndTurnEditModeOn() {
      this['TURN_EDIT_MODE_ON']();
      this['SHOW_FORM']();
    },
    setEditedReview() {
      this['SET_EDITED_REVIEW'](this.review);
    },
    editReview() {
      this.setEditedReview();
      this.showFormAndTurnEditModeOn();
    }
  }
};
</script>

<style lang="postcss">
.reviews-author__img-frame {
    display:flex;
    justify-content: center;
    width:100%;
}
.reviews-author__img {
   width: 3.125rem;
    height: 3.125rem;
    margin-right: 1.25rem;
    background: center center no-repeat / cover; 
}
    
</style>
