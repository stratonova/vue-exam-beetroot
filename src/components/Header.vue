<template>
  <header class="header">
    <the-weather/>
  </header>
</template>

<script>
import TheWeather from "@/components/weather/TheWeather";
export default {
  components: {
    TheWeather
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 640px) {
    position: relative;
  }
}
</style>
