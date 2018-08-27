<template>
  <div class="app">

    <background/>
    <app-header/>
    <the-preview/>
    <the-todo/> 
  </div>
</template>

<script>
import Background from "@/components/Background";
import AppHeader from "@/components/Header";
import ThePreview from "@/components/preview/ThePreview";
import TheTodo from "@/components/todo/TheTodo";

export default {
  components: {
    Background,
    AppHeader,
    ThePreview,
    TheTodo
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

// .app {
//   width: 100%;
//   height: 100vh;
//   background: url("./assets/background-ev.jpg") center center no-repeat/cover;
//   position: relative;
// }
</style>
