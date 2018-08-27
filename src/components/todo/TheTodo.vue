<template>
    <div class="todo">
      <todo-btn 
      @toggleTodoPopup="toggleTodoPopup"/>
      <todo-popup
        v-if="isTodoOpen"/>
    </div>
</template>

<script>
import TodoBtn from "@/components/todo/TodoBtn";
import TodoPopup from "@/components/todo/TodoPopup";

export default {
  data: () => ({
    isTodoOpen: false
  }),
  components: {
    TodoBtn,
    TodoPopup
  },

  methods: {
    toggleTodoPopup() {
      this.isTodoOpen = !this.isTodoOpen;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
.todo {
  position: absolute;
  bottom: 20px;
  right: 20px;

  @include medium {
    right: 40px;
  }
}
</style>
