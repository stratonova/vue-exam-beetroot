<template>
  <div class="weather-popup">
    <div class="weather-popup__location--header">

    <div class="weather-popup__location-wrap">
      <span class="weather-popup__location--city">{{city}}</span>
      <span class="weather-popup__location--day">{{day | moment('dddd')}}</span>
      <button 
        @click="$emit('updateWeather')"
        class="weather-popup-refresh-btn">
        <i class="el-icon-refresh"></i>  
      </button>
    </div>

    <span class="weather-popup__location--descr">{{weatherDescr}}</span>

    </div>

    <div class="weather-popup__top">
      <span class="weather-popup__top--icon weather-popup__top--item">
        <base-img class="weather-popup__top--img" :icon="icon"/>
      </span>

      <div class="weather-popup__top--temp-wrap">
        <span class="weather-popup__top--day-temp weather-popup__top--item">{{deg}}&deg;</span>
        <span class="weather-popup__top--night-temp weather-popup__top--item">{{nigthTemp}}&deg;</span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: ["deg", "city", "icon", "nigthTemp", "weatherDescr", "day"]
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.weather-popup {
  position: absolute;
  left: 10px;
  top: 100px;
  width: 330px;
  min-height: 185px;
  background-color: rgba($color: #000, $alpha: 0.8);
  color: #fff;
  border-radius: 5px;
  padding: 15px;

  @include extra-large {
    width: 270px;
  }

  @include medium {
    left: 20px;
  }

  @media screen and (max-width: 640px) {
    // position: relative;
    margin: 0;
  }
}

.weather-popup__location-wrap {
  display: flex;
  align-items: flex-end;
}

.weather-popup__location--header {
  display: flex;
  flex-direction: column;
}

.weather-popup__top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid $white-opacity;
}

.weather-popup-refresh-btn {
  @include reset-btn;

  display: block;
  font-size: 20px;
  margin-left: 15px;
  transform: translateY(4px);

  &:hover {
    color: #fff;
  }
}

.weather-popup__top--item {
  line-height: 1;
}

.weather-popup__top--icon {
  display: block;

  & > img {
    height: 70px;
  }
}

.weather-popup__top--temp-wrap {
  display: flex;
  align-items: flex-end;
}

.weather-popup__top--day-temp {
  font-size: 50px;
  margin-left: 7px;
}

.weather-popup__top--night-temp {
  font-size: 30px;
  color: rgba($color: #ffffff, $alpha: 0.6);
  margin-left: 7px;
  margin-bottom: 2.5px;
}

.weather-popup__location--city {
  font-size: 18px;
}

.weather-popup__location--day {
  margin-left: 7px;
  color: rgba($color: #ffffff, $alpha: 0.7);
  font-size: 14px;
}

.weather-popup__location--descr {
  color: rgba($color: #ffffff, $alpha: 0.5);
  font-size: 15px;
  text-transform: capitalize;
  margin-top: 8px;
}
</style>
