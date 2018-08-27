<template>
  <div class="preview-focus">

    <span 
      class="main-focus" 
      v-if="!todayTodo.length && isShowFocusInput"> 
      {{message.main}}
    </span>

    <span 
      class="today-focus" 
      v-else> 
      {{message.today}}
    </span>

  <div class="focus__new-todo-wrap">

    <input
      v-if="isShowFocusInput"
      class="focus__input"
      type="text"
      v-model.lazy="todayTodo"
      placeholder=""
      @keyup.enter="toggleFocus"
    >

    <div
    v-if="isShowTodayTodo" 
    class="today-todo__item">
      <input
      class="today-todo__checkbox"
      @change="changeTodayTodo" 
      type="checkbox">
      <span 
      :class="{'completed': isDone === true}"
      class="today-todo">{{todayTodo}}</span>
      <button 
      @click="deleteTodayTodo"
      class="today-todo-delete-btn">
      <i class="el-icon-close"></i>
      </button>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    isShowFocusInput: true,
    isShowTodayTodo: false,
    isDone: null,
    message: {
      main: "What is your main focus for today?",
      today: "Today"
    },
    todayTodo: ""
  }),

  methods: {
    toggleFocus() {
      this.isShowFocusInput = !this.isShowFocusInput;
      this.isShowTodayTodo = !this.isShowTodayTodo;
    },

    changeTodayTodo({ target }) {
      this.isDone = target.checked;
    },

    deleteTodayTodo() {
      this.todayTodo = "";
      this.isDone = null;
      this.toggleFocus();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.preview-focus {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #fff;
  font-weight: 200;

  @media screen and (max-width: 1070px) {
    max-width: 400px;
    text-align: center;
    bottom: 70px;
  }

  @include large {
    max-width: 270px;
    font-size: 28px;
  }

  @include medium {
    left: 40px;
    transform: translateX(0);
    bottom: 150px;
  }
}

.focus__new-todo-wrap {
  margin-top: 20px;
}

.focus__input {
  @include reset-input;
  border-bottom: 4px solid rgba($color: #fff, $alpha: 0.6);
  font-size: 30px;
  color: #fff;
  text-align: center;
  width: 480px;

  @media screen and (max-width: 1070px) {
    width: 400px;
  }

  @include large {
    max-width: 270px;
    font-size: 28px;
  }
}

.today-focus {
  text-transform: uppercase;
  font-size: 22px;
}

.today-todo__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.today-todo__checkbox {
  transform: scale(1.3);
}

.today-todo {
  margin-left: 20px;
}

.today-todo-delete-btn {
  @include reset-btn;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: $white-opacity;
    color: #fff;
  }
}

.completed {
  transition: color, text-decoration 0.2s ease-in-out;
  text-decoration: line-through;
  color: rgba($color: #fff, $alpha: 0.8);
}
</style>
