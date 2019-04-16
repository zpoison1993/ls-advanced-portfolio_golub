<template lang="pug">
    .login
        .login__content
            button(type="button").login__form-close
            form.login__form(@submit.prevent="login")
                h1.login__form-title Авторизация
                .login__row#login
                    app-input(
                    title="Логин"
                    icon="user"
                    v-model="user.name"
                    :errorText="validation.firstError('user.name')"
                    )            
                .login__row#pass
                    app-input(
                    title="Пароль"
                    icon="keyy"
                    type="password"
                    v-model="user.password"
                    :errorText="validation.firstError('user.password')"
                    )           
                .login__btn
                    button(type="submit" :disabled="disableSubmit").login__send-data Отправить
</template>

<script>
import { Validator } from "simple-vue-validator";
import $axios from "../../requests";
import appInput from "../input";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name: "vgolub032019",
        password: "Pentagonkuritdvajdy1"
        // name: "",
        // password: ""
      }
    };
  },
  components: {
    appInput
  },
  methods: {
    async login() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>


