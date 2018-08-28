<template>
  <div class="weather">
    <weather-btn
      @togglePopup="togglePopup"
      :city="weatherData.city"
      :icon="weatherData.iconUrl"
      :deg="weatherData.temp"
    />
    <weather-popup 
    element-loading-background="rgba(0, 0, 0, 0.8)"
    v-loading="loading"
    v-if="isOpen"
    :city="weatherData.city"
    :icon="weatherData.iconUrl"
    :deg="weatherData.temp"
    :day="weatherData.day"
    :weatherDescr="weatherData.weatherDescr"
    :nigthTemp="weatherData.nigthTemp"
    @updateWeather="getWeather"
    />
  </div>
</template>

<script>
import { API } from "@/api";
import WeatherBtn from "@/components/weather/WeatherBtn";
import WeatherPopup from "@/components/weather/WeatherPopup";
export default {
  data: () => ({
    isOpen: false,
    loading: false,
    weatherData: {
      temp: 27,
      iconUrl: "sun",
      city: "Kyiv",
      day: "Saturday",
      weatherDescr: "Sunny",
      nigthTemp: "14"
    },
    isLoading: false
  }),
  components: {
    WeatherBtn,
    WeatherPopup
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    togglePopup() {
      this.isOpen = !this.isOpen;
    },
    convertToCelcies(c) {
      return (c - 273.15).toFixed(0);
    },
    getWeather() {
      this.loading = true;
      API.getWeather("Kyiv")
        .then(r => r.json())
        .then(response => {
          this.loading = false;
          const data = {
            temp: this.convertToCelcies(response.main.temp),
            iconUrl: response.weather[0].icon,
            city: response.name,
            day: response.dt,
            weatherDescr: response.weather[0].description,
            nigthTemp: this.convertToCelcies(response.main.temp_min)
          };
          this.weatherData = { ...data };
        });
    }
  }
};
</script>

<style scoped lang="scss">
.weather {
  position: relative;

  @media screen and (max-width: 640px) {
    position: none;
    width: 100%;
  }
}
</style>
