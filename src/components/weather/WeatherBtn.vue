<template>
  <div class="weather-btn-wrap">
    <button class="weather-btn" @click="toggle">

    <div class="weather-btn__temp-wrap">
      <span class="weather-btn__icon">
        <base-img :icon="icon"/>
      </span>
      <span class="weather-btn__temp">{{ deg }}&deg;</span>
    </div>

      <span class="weather-btn__location">{{ city }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["deg", "city", "icon"],
  methods: {
    toggle() {
      this.$emit("togglePopup");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";

.weather-btn-wrap {
  margin: 5px 20px 20px 0;
}

.weather-btn {
  @include reset-btn;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
}
.weather-btn__temp-wrap {
  display: flex;
  align-items: center;
}

.weather-btn__icon {
  display: block;
  height: 100%;
  transform: translateX(5px);
}

.weather-btn__temp {
  display: flex;
  height: 100%;
  align-items: center;
}

.weather-btn__location {
  transform: translateX(-10px);
  transform: translateY(-10px);
  font-size: 13px;
  color: rgba($color: #ffffff, $alpha: 0.9);
}
</style>
