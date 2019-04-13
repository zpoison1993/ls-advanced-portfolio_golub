<template lang="pug">
.works-blocks
    ul.works-blocks__list
        li.works-blocks__item.works-blocks__item--create
            button(
                type="button"
                @click="showFormAndTurnEditModeOff").btn.btn--create-new
                span.create-new__icon
                h4.create-new__title Добавить работу
        li.works-blocks__item(
        v-for="work in works"
        :key="work.id"
        )
            workBlock(
            :work="work"
        )
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  components: {
    workBlock: () => import("./work-block.vue"),
  },
  computed: {
    ...mapState('works', {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions('works', ['fetchWorks']),
    ...mapMutations('works', ['SHOW_FORM', 'TURN_EDIT_MODE_OFF']),
    showFormAndTurnEditModeOff() {
      this['SHOW_FORM']();
      this['TURN_EDIT_MODE_OFF']();
    }
  },
  async created() {
    try {
      this.fetchWorks();
    } catch (error) {
      console.error(error.messsage);
    }
  }
  
}
</script>