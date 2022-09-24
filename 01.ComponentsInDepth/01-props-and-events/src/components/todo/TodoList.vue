<template>
  <div class='todo-list'>
    <TodoListItem v-for='todo in todos'
                  @is-checked='isChecked'
                  @todo-remove='todoRemove'
                  :key='todo.id'
                  :id='todo.id'
                  :text='todo.text'
                  :checked='todo.checked'/>
  </div>
</template>

<script>
import TodoListItem from '@/components/todo/TodoListItem';

export default {
  name: 'TodoList',
  components: {TodoListItem},
  props: {
    todos: {
      validation: function(object) {
        return object.id && Number.isInteger(object.id) &&
          object.text && typeof object.text === "string" &&
          object.checked && typeof object.checked === "boolean";
      }
    }
  },
  emits: [
    'isChecked',
    'todoRemove',
  ],
  data() {
    return {
      block: '',
    };
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    isChecked({id, checked}) {
      console.log('isChecked/TodoListItem', id, checked);
      this.$emit('isChecked', {id, checked});
    },
    todoRemove({id}) {
      this.$emit('todoRemove', {id});
    }
  },
};
</script>

<style scoped>
.todo-list {
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  background-color: white;
}
</style>
