<template lang="pug">
    .works-block
        .works-block__img-wrapper
            img(:src="remotePhotoPath" alt="Превью работы").works-block__img
            .works-block__tags
              tags(
              :tags="tagsArray"
              :interactive="false"
              )
        .works-block__info
            h5.works-block__title {{work.title}}
             .works-block__desc
                p {{work.description}}
            a(:href="work.link").works-block__link {{work.link}}
            .works-block__btns
                button(type="button" @click="showFormAndTurnEditModeOn"
                ).btn.btn--works-block-edit Править
                button(type="button" @click="removeExistedWork"
                ).btn.btn--works-block-remove Удалить
</template>


<script>
// import { BASE_URL } from "@/helpers/consts";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    tags: () => import("./tags.vue")
  },
  props: {
    work: Object
  },
  data() {
    return {
      
    }
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com//${this.work.photo}`;
    },
    tagsArray() {
      return this.work.techs.split(',');
    }
  },
  methods: {
    ...mapActions("works", ['removeWork']),
    ...mapMutations("works", ['SHOW_FORM', 'TURN_EDIT_MODE_ON', 'SET_EDITED_WORK']),
    async removeExistedWork() {
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        console.error(error.message);
      }
    },
    showFormAndTurnEditModeOn() {
      this['TURN_EDIT_MODE_ON'](this.work);
      this['SHOW_FORM']();
    },
  }
}
</script>