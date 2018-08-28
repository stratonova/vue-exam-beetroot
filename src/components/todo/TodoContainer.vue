<template>
  <div
  :class="{'todo__container-empty': !todos.length}" 
  class="todo__container">

    <ul class="todo__list" v-if="todos.length">
      <li 
      class="todo__list--item"
      v-for="(item, key) in todos" 
      :key="key">


        <div class="todo__list--left">
          <input
            type="checkbox"
            @change="toggleTodoTask($event, item.id)"
            :checked="item.checked">

          <span
          class="todo__item--value"
          v-if="isOpenEditModeId !== item.id"
          :class="{ 'completed': item.checked === true }">
            {{item.title}}
          </span>

          <input
            class="todo__edit--input"
            type="text"
            placeholder=""
            @keyup.enter="onChangeTodo($event, item.id)"
            :value="item.title"
            v-else >
        </div>

        <div class="todo__list--right">
          <button 
          @click="onToggleEdit(item.id)"
          class="todo__edit todo-item-btn">
            <i class="el-icon-edit"></i>
          </button>

          <button 
          @click="onDelete(item.id)"
          class="todo__delete todo-item-btn">
            <i class="el-icon-delete"></i>
          </button>
        </div>


      </li>
    </ul>    

    <p 
    class="todo__empty-message"
    v-else>
    Any todos yet :(
    </p>

  </div>
</template>

<script>
export default {
  data: () => ({
    isOpenEditModeId: null
  }),
  props: ["todos"],
  methods: {
    addNewTodo() {},

    toggleTodoTask({ target }, id) {
      const isChecked = target.checked;
      this.$emit("onToggleTask", {
        id,
        isChecked
      });
    },

    onToggleEdit(id) {
      this.isOpenEditModeId = id;
    },

    onChangeTodo({ target }, id) {
      if (target.value.trim().length) {
        this.$emit("onChangeTodo", {
          id,
          edit: target.value
        });
        this.onToggleEdit(id);
      }
      this.isOpenEditModeId = null;
    },

    onDelete(id) {
      this.$emit("onDelete", {
        id
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/_mixins.scss";
@import "../../assets/_vars.scss";

.todo__container {
  min-width: 100px;
  min-height: 100px;
  max-height: 260px;
  padding: 8px 10px 8px 0;

  overflow: scroll;
}

.todo__container-empty {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo__list--left {
  display: flex;
}

.todo__list--right {
  width: 48px;
}

.todo__list--item {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
}

.todo__item--value {
  margin-left: 7px;
  font-size: 17px;
}

.todo-item-btn {
  @include reset-btn;
  font-size: 20px;

  &:hover {
    color: #fff;
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
}

.todo__edit--input {
  @include reset-input;
  margin-left: 7px;
  font-size: 17px;

  @media screen and (max-width: 1170px) {
    width: 110px;
  }
}

.todo__empty-message {
  font-style: italic;
}

.todo__list {
  @include reset-list;
}

.completed {
  text-decoration: line-through;
}

.is-visible {
  display: block;
}
</style>
