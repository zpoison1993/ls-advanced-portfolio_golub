<template lang="pug"> 
  .content-wrapper
    appHeader(v-if="userIsLogged")
    appTabs(v-if="userIsLogged")    
    router-view

</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: "app-root",
  components: {
    appHeader: () => import("./components/app-header.vue"),
    appTabs: () => import("./components/app-tabs.vue")
  },
  computed: {
    ...mapGetters('user', ['userIsLogged'])
  }
};


// import { Validator } from "simple-vue-validator";
// import axios from "axios";
// import appInput from "./components/input";
// export default {
//   mixins: [require("simple-vue-validator").mixin],
//   validators: {
//     "user.name": value => {
//       return Validator.value(value).required("Введите имя пользователя");
//     },
//     "user.password": value => {
//       return Validator.value(value).required("Введите пароль");
//     }
//   },
//   data() {
//     return {
//       disableSubmit: false,
//       user: {
//         name: "",
//         password: ""
//       }
//     };
//   },
//   components: {
//     appInput
//   },
//   methods: {
//     async login() {
//       if ((await this.$validate()) === false) return;
//       this.disableSubmit = true;
//       try {
//         axios
//           .post("//jsonplaceholder.typicode.com/posts", {
//             name: this.user.name,
//             password: this.user.password
//           })
//           .then(response => {
//             const report = JSON.stringify(response, null, 2);
//             console.log(report);
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// };
</script>

<style lang="pcss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800");  
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./styles/blocks/*.pcss";
 /*Authorization styles */

 /* */

 /* Header styles*/

 /* */
</style>