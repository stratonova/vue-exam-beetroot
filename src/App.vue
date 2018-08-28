<template>
  <div
  :class='getDayData.className'
  class="app">

    <app-header/>
    <the-preview/>
    <the-todo/> 
  </div>
</template>

<script>
import AppHeader from "@/components/Header";
import ThePreview from "@/components/preview/ThePreview";
import TheTodo from "@/components/todo/TheTodo";
import moment from "moment";

export default {
  components: {
    AppHeader,
    ThePreview,
    TheTodo
  },

  data: () => ({
    dayTimes: {
      4: "night",
      12: "morning",
      17: "afternoon",
      21: "evening",
      23: "night"
    }
  }),

  computed: {
    getDayData() {
      const formatTime = moment().hours();
      const classNames = Object.keys(this.dayTimes);
      let className = "";
      for (let i = 0; i < classNames.length; i++) {
        if (formatTime < +classNames[i]) {
          className = this.dayTimes[classNames[i]];
          break;
        }
      }
      return {
        className
      };
    }
  }
};
</script>

<style lang="scss">
@import "./assets/_mixins.scss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.app {
  width: 100%;
  height: 100vh;
  background: url("./assets/background-ev.jpg") center center no-repeat/cover;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
}

.morning {
  background: url("./assets/background-mor.jpg") center center no-repeat/cover;
}

.afternoon {
  background: url("./assets/background-aft.jpg") center center no-repeat/cover;
}

.evening {
  background: url("./assets/background-ev.jpg") center center no-repeat/cover;
}

.night {
  background: url("./assets/background-night.jpg") center center no-repeat/cover;
}
</style>
