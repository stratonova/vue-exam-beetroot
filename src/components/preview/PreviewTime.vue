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
      12: "Good morning, ",
      17: "Good afternon, ",
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
.main-time {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 130px;
  font-weight: 700;
}
.greeting {
  font-size: 40px;
  display: flex;
  align-items: flex-end;
}

.greeting__message {
  letter-spacing: 2px;
}
</style>
