<template>
  <div class="main-time">
    <div class="current-time">{{ getTimeData.time | moment('HH:mm') }}</div>
    <div class="greeting">
      <span class="greeting__message">{{ getTimeData.message }}</span>
      <preview-name :name.sync="name"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import PreviewName from "@/components/preview/PreviewName";
export default {
  components: {
    PreviewName
  },
  data: () => ({
    currentTime: Date.now(),
    messages: {
      4: "Good night, ",
      12: "Good morning, ",
      17: "Good afternoon, ",
      21: "Good evening, ",
      24: "Good night, "
    },
    name: ""
  }),
  computed: {
    getTimeData() {
      const formatTime = moment().hours();
      const messages = Object.keys(this.messages);
      let message = "";
      for (let i = 0; i < messages.length; i++) {
        if (formatTime < +messages[i]) {
          message = this.messages[messages[i]];
          break;
        }
      }
      return {
        time: this.currentTime,
        message
      };
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = Date.now();
    }, 60000);
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.main-time {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 160px;
  font-weight: 700;

  @media screen and (max-width: 1070px) {
    font-size: 140px;
    align-items: center;
  }

  @include large {
    font-size: 120px;
    width: 400px;
    align-items: center;
  }

  @include medium {
    font-size: 95px;
    width: 300px;
    margin-top: 100px;
    margin-right: 40px;
  }

  @media screen and (max-width: 700px) {
    font-size: 80px;
  }

  @media screen and (max-width: 640px) {
    margin: 250px auto;
  }

  @include small {
    font-size: 70px;
  }
}

.greeting {
  font-size: 50px;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1070px) {
    font-size: 45px;
    width: 500px;
    flex-direction: column;
    align-items: center;
  }

  @include large {
    font-size: 40px;
  }

  @include medium {
    width: 500px;
    font-size: 35px;
  }

  @include small {
    width: 400px;
    font-size: 25px;
  }
}

.greeting__message {
  letter-spacing: 2px;
}
</style>
