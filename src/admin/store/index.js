import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from './modules/categories2'
import skills from './modules/skills2'
import user from './modules/user'
import works from './modules/works'

export default new Vuex.Store({
  modules: {
      user,categories,skills,works
  }
});