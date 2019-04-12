<template lang="pug">
    section.tabs
        .container.tabs__container
            ul.tabs
                router-link.tabs__item(
                v-for="(route, index) in routes"
                :key="index"
                tag="li"
                :to="route.path"
                )
                    a(href="").tabs__link {{route.title}}
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Обо мне",
          path: "/"
        },
        {
          title: "Работы",
          path: "/works"
        },
        {
          title: "Отзывы",
          path: "/reviews"
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.router-link-exact-active {
        font-weight: 600;
        color:$skills-color;
        border-style: solid;
        border-width: 0px 0px 5px 0px;
        border-color: $skills-color;
}
    
</style>