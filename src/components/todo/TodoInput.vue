<template>
   <form class="todo__input-wrap" @submit.prevent="getValue">

      <input 
      class="todo__input" 
      type="text" 
      v-model="title"
      placeholder="New Todo">

      <button 
      class="todo__input--submit" 
      type="submit">
      add
      </button>

    </form>
</template>

<script>
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    getValue() {
      this.$emit("addTodo", this.title);
      this.title = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.todo__input-wrap {
  display: flex;
  justify-content: space-between;
}

.todo__input {
  @include reset-input;
  font-size: 18px;
  color: #fff;
  padding: 7px 4px;

  @include extra-large {
    width: 160px;
  }
}

.todo__input--submit {
  @include reset-btn;
  font-size: 17px;
  transform: translateY(7px);

  &:hover {
    color: #fff;
  }
}
</style>
