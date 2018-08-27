<template>

  <div class="greeting__input-wrap">
    <span 
    @dblclick="onToggle"
    class="greeting__name" 
    v-if="name.length > 0 && !isShowInput"> {{name}}</span>
    <input
      class="greeting__input"
      type="text"
      :value="name"
      placeholder="Name"
      @keyup.enter="onChangeName($event)"
      ref="input"
      v-else
      v-focus
    >
  </div>

</template>

<script>
import { focus } from "@/directives/focus";
export default {
  directives: {
    focus
  },
  props: ["name"],
  data: () => ({
    isShowInput: false
  }),
  methods: {
    onToggle() {
      this.isShowInput = !this.isShowInput;
    },
    onChangeName({ target }) {
      if (target.value.trim().length) {
        this.$emit("update:name", target.value);
        this.onToggle();
      }
      this.isShowInput = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.greeting__input {
  @include reset-input;

  font-size: 40px;
  border-bottom: 3px solid rgba($color: #fff, $alpha: 0.7);
  width: 150px;
  text-align: center;
  margin-left: 15px;
}

.greeting__name {
  margin-left: 6px;
}
</style>
