<template lang="pug">
  .edit-block
    h3.edit-block__title Создать Отзыв
    form.edit-block__form.edit-block__form--reviews
      .form__upload-img.form__upload-img--reviews
        label.form__upload-img-wrapper
          .form__upload-img-container.form__upload-img-container--reviews(
            :class="{'filled' : this.renderedPhotoUrl.length, 'error' : validation.firstError('renderedPhotoUrl')}"
            :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
          )
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).form__upload-img-input
            .form__upload-img-error
              error-tooltip(
                :errorText="validation.firstError('renderedPhotoUrl')"
              )
          .btn.btn--upload-reviews-img Добавить фото

      .form__upload-text.form__upload-text--reviews
        .form__row.form__row--author-data
          .form__col.form__col--reviews
            label.form__text-block(
              for="name"
              :class="{'error' : validation.firstError('review.author')}"
            )
              span.form__label Имя автора
              input.form__input.form__input--name(type="text" name="name" placeholder="Введите имя автора" v-model="review.author")
              .form__text-error
                error-tooltip(
                  :errorText="validation.firstError('review.author')"
                )
          .form__col.form__col--reviews
            label.form__text-block(
              for="position"
              :class="{'error' : validation.firstError('review.occ')}"
            )
              span.form__label Титул автора
              input.form__input.form__input--position(type="text" name="position" placeholder="Введите титул автора" v-model="review.occ")
              .form__text-error
                error-tooltip(
                  :errorText="validation.firstError('review.occ')"
                )
        .form__row.form__row--textarea
          .form__col.form__col--review-text
            label.form__text-block.form__text-block--textarea(
              for="review"
              :class="{'error' : validation.firstError('review.text')}"
            )
              span.form__label Отзыв
              textarea.form__textarea(name="review" rows="4" placeholder="Введите Ваш отзыв" v-model="review.text")
              .form__text-error
                error-tooltip(
                  :errorText="validation.firstError('review.text')"
                )

        .form__row.form__row--btns
          .form__col.form__col--btns
            .form__btns.form__btns--reviews
              button(
                type="button"
                @click="CLOSE_FORM"
              ).btn.btn--cancel Отмена
              button(
                type="button"
                @click="addNewReview"
                v-if="!editBlockReview.editMode"
              ).btn.btn--save Сохранить
              button(
                type="button"
                v-if="editBlockReview.editMode"
                @click="saveEditedReview"
              ).btn.btn--save Сохранить
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "renderedPhotoUrl": value => {
      return Validator.value(value).required("Загрузите фотографию");
    },
    "review.author": value => {
      return Validator.value(value).required("Введите имя автора");
    },
    "review.occ": value => {
      return Validator.value(value).required("Введите титул автора");
    },
    "review.text": value => {
      return Validator.value(value).required("Введите отзыв");
    }
  },
  components: {
    errorTooltip: () => import("./error-tooltip.vue")
  },
  data() {
    return {
      renderedPhotoUrl: "",
      review: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    };
  },
  computed: {
    ...mapState("reviews", {
      editBlockReview: state => state.editBlockReview,
      changedReview: state => state.changedReview
    }),
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    }
  },
  methods: {
    ...mapMutations('reviews', ['CLOSE_FORM']),
    ...mapActions('reviews', ['addReview', 'editReview']),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        console.error(error.message);
      }
    },
    createReviewFormData() {
      const formData = new FormData();
      formData.append("author", this.review.author);
      formData.append("occ", this.review.occ);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);
      return formData;
    },
    async addNewReview() {
      if ((await this.$validate()) === false) return;
      try {
        const newReviewFormData = await this.createReviewFormData();
        this.addReview(newReviewFormData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    },
    setEditedReview() {
      this.review = { ...this.changedReview };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewData = {
          id: this.review.id,
          data: this.createReviewFormData()
        };
        await this.editReview(reviewData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  created() {
    if (this.editBlockReview.editMode) {
      this.setEditedReview();
    }
  }
};
</script>

<style lang="postcss">
    .filled {
        background: center center no-repeat / cover;
    }

    .form__upload-img-wrapper {
        text-align:center;
    }


    .form__upload-img-error {
        bottom:-7.125rem;
    }

    
.form__upload-img-container {
    flex-direction:column;
    position:relative;
}   
.form__upload-img-input {
    position:absolute;
    top:0;
    left:-9999px;
}

.input__error-tooltip-container {
    position:relative;
}

.form__upload-img-container {
    .form__upload-img-error {
            display:none;
    }

    &.error {
        position:relative;
        .form__upload-img-error {
        display:block;
        position: absolute;
        bottom:-50px;
}
    }
}


.form__text-block {
    .form__text-error {
            display:none;
    }

    &.error {
        position:relative;
        .form__text-error {
        display:block;
        position: absolute;
        bottom:-50px;
}
    }
}

    .form__upload-img-wrapper {
        margin-top:0;
    }

.form__upload-img-container--reviews.filled  {
    &::after {
    display:none;
    }

}
</style>