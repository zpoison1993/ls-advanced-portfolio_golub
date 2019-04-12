import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from './modules/categories2'
import skills from './modules/skills2'
import user from './modules/user'

export default new Vuex.Store({
  modules: {
      user,categories,skills
    // categories, skills, user
  }
});