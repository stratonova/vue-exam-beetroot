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
.greeting__input {
  border: none;
  background: none;
  font-size: 40px;
  color: rgba($color: #fff, $alpha: 0.7);
  outline: none;
  border-bottom: 3px solid rgba($color: #fff, $alpha: 0.7);
  width: 150px;
  padding: 0 15px;
  margin-left: 15px;
}

.greeting__name {
  margin-left: 6px;
}
</style>
