<template>
  <div class="todo__btn-wrap">
    <button 
      @click="toggle"
      class="todo__btn">
      Todo
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$emit("toggleTodoPopup");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.todo__btn {
  @include reset-btn;
  font-size: 22px;

  &:hover {
    color: #fff;
  }
}
</style>
