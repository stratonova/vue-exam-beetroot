<template>
  <div class="todo-popup">
    <ul class="todo-popup__filter">

      <li 
        v-for="(btn, key) in buttons"
        :key="key"
        class="filter__tab">
        <button
          class="fitter__tab--btn"
          @click="filterFlag = btn.filterType"
          :class="{'active': btn.filterType === filterFlag && todos.length}"
          :disabled="!todos.length"
        >
            {{ btn.title }}
        </button>
      </li>

    </ul>

    <todo-container
      :todos="filteredTodos"
      @onToggleTask="toggleTodoTask"
      @onChangeTodo="changeTodo"
      @onDelete="deleteTodo"
    />

    <todo-input @addTodo="addTodo"/>

  </div>
</template>

<script>
import TodoContainer from "@/components/todo/TodoContainer";
import TodoInput from "@/components/todo/TodoInput";
export default {
  components: {
    TodoContainer,
    TodoInput
  },

  data: () => ({
    buttons: [
      { title: "All", filterType: null },
      { title: "Active", filterType: false },
      { title: "Completed", filterType: true }
    ],
    todos: [],
    filterFlag: null
  }),

  methods: {
    addTodo(title) {
      this.todos.push({ title, checked: false, id: Date.now() });
    },
    toggleTodoTask({ isChecked, id }) {
      const itemIndex = this.todos.findIndex(todo => todo.id === id);
      this.todos[itemIndex].checked = isChecked;
    },

    changeFilter(filter) {
      this.filterFlag = filter;
    },
    changeTodo({ edit, id }) {
      const itemIndex = this.todos.findIndex(todo => todo.id === id);
      this.todos[itemIndex].title = edit;
    },

    deleteTodo({ id }) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  computed: {
    filteredTodos() {
      return this.filterFlag === null
        ? this.todos
        : this.todos.filter(todo => todo.checked === this.filterFlag);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.todo-popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 50px;
  right: -10px;
  width: 300px;
  min-height: 240px;
  max-height: 350px;
  background-color: rgba($color: #000, $alpha: 0.8);
  color: #fff;
  border-radius: 5px;
  padding: 0 14px 15px 17px;

  @include extra-large {
    width: 250px;
  }

  @include medium {
  }
}
.todo-popup__filter {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.2);
}

.filter__tab {
  flex: 1;
}

.fitter__tab--btn {
  @include reset-btn;
  font-size: 18px;
  padding: 10px 7px;
  width: 100%;
  font-weight: 200;

  [disabled] {
    color: #fff;
  }

  &:not([disabled]) {
    &:hover {
      background-color: $light-background;
      color: #fff;
    }
  }
}

.active {
  background-color: $light-background;
  color: #fff;
}
</style>
