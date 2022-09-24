<template>
  <div class='todo-list-item'>
    <div class='checkbox' @click='setChecked'>
      <mdicon :name='isClipboard(checked)'/>
      <div :class='setTextCSS()'>{{text}}</div>
    </div>
    <div class='remove' @click='todoRemove'>
      <mdicon name='trash-can'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  components: {},
  props: {
    id: Number,
    text: String,
    checked: Boolean,
  },
  emits:[
    'isChecked',
    'todoRemove'
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
    setTextCSS() {
      return this.checked ? ['text', 'checked'] : ['text'];
    },
    isClipboard(checked) {
      return checked ? 'clipboard-check' : 'clipboard';
    },
    setChecked() {
      console.log("setChecked/TodoListItem")
      this.$emit('isChecked', {
        id: this.id,
        checked: this.checked
      });
    },
    todoRemove() {
      this.$emit('todoRemove', {id: this.id});
    },
  }
};
</script>

<style scoped>
.todo-list-item {
  padding: 1rem;
  display: flex;
  align-items: center;
  border-top: 1px solid #dee2e6;
}

.todo-list-item .checkbox {
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
}

.todo-list-item .checkbox .text {
  margin-left: 0.5rem;
  text-align: left;
  flex: 1;
}

.todo-list-item .checkbox .text.checked {
  color: #adb5bd;
  text-decoration: line-through;
}

.todo-list-item .remove {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
}

.todo-list-item .remove:hover {
  color: #ff8787;
}

</style>
