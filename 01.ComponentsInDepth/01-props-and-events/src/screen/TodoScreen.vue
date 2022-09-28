<template>
  <div class='todo-screen'>
    <div class='app-title'>일정관리</div>
    <TodoInsert @on-submit='onSubmit'/>
    <TodoList :todos='todos' @is-checked='isChecked' @todo-remove='todoRemove'/>
  </div>
</template>

<script>
import TodoInsert from '@/components/todo/TodoInsert';
import TodoList from '@/components/todo/TodoList';

export default {
  name: 'TodoScreen',
  components: {TodoInsert, TodoList},
  emits: [
    'setTodoInfo',
  ],
  data() {
    return {
      todos: (() => {
        return Array.from({length: 3}).map((_, index) => ({
          id: index,
          text: `테스트 ${index}`,
          checked: index % 2 === 0
        }));
      })()
    };
  },
  setup() {
  },
  created() {
    this.todoInfo();
  },
  mounted() {
  },
  unmounted() {
    this.data = null;
  },
  methods: {
    todoInfo () {
      this.$emit('setTodoInfo', {
        totalTodo: this.todos.length,
        done: this.todos.filter(todo => todo.checked).length,
        undone: this.todos.filter(todo => !todo.checked).length,
      });
    },
    isChecked ({id, checked}) {
      console.log("isChecked/TodoScreen", id, checked);
      this.todos = this.todos.map(todo =>
        todo.id === id ? { ...todo, checked: !checked } : todo);
    },
    todoRemove ({id}) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.todoInfo();
    },
    onSubmit ({text}) {
      const maxId = this.todos.reduce((acc, current) => {
        return acc.id > current.id ? acc.id : current.id;
      }, 0) + 1;

      this.todos = this.todos.concat({
        id: maxId,
        text,
        checked: false,
      });

      this.todoInfo();
    }
  },
};
</script>

<style scoped>
.todo-screen {
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  overflow: hidden;
}

.todo-screen .app-title {
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}

</style>
