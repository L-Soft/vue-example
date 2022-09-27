<template>
  <div class='wrap'>
    <nav>
      <router-link to="/">홈</router-link>
      |
      <router-link to="/todo">일정관리</router-link>
    </nav>
  </div>
  <div class='todo-info'>
    <p>{{todoInfoDisplay}}</p>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
  props: {
    todoInfo: {
      todoSize: Number,
      done: Number,
      undone: Number,
    },
  },
  data() {
    return {
      currentTodoInfo: this.todoInfo,
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
  methods:{
  },
  computed: {
    todoInfoDisplay () {
      return [
        `전체: ${this.currentTodoInfo.todoSize}`,
        `완료: ${this.currentTodoInfo.done}`,
        `미완료: ${this.currentTodoInfo.undone}`
      ].join(", ");
    }
  }
};
</script>

<style scoped>
.wrap {
  display: flex;
  height: 50px;
  background-color: #344955;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px 1px #232F34;
}

.todo-info {
  width: 100%;
  height: 3rem;
  background-color: #F9AA33;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

nav {
  padding: 0;
}

nav a {
  font-weight: bold;
  font-size: 1.125rem;
  color: #E0E4E6;
  text-decoration-line: none;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}

nav a.router-link-exact-active {
  color: #F9AA33;
  text-decoration-line: none;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
</style>
