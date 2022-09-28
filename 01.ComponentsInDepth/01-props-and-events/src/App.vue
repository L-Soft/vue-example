<template>
  <AppHeader :todoInfo="todoInfo" />
  <router-view @set-todo-info="setTodoInfo"/>
  <AppFooter />
</template>

<script>
import AppHeader from '@/layout/AppHeader';
import { reactive } from 'vue';
import AppFooter from '@/layout/AppFooter';

const useTodos = () => {
  const todoInfo = reactive({totalTodo: 0, done: 0, undone: 0});
  const setTodoInfo = ({totalTodo, done, undone}) => {
    todoInfo.totalTodo = totalTodo;
    todoInfo.done = done;
    todoInfo.undone = undone;
  };

  return {
    todoInfo,
    setTodoInfo,
  }
};

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    return {
      ...useTodos(),
    }
  }
}
</script>

<style>
#app {
  font-family: 'NEXON Lv1 Gothic OTF Light', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #efefef;
}

@font-face {
  font-family: 'NEXON Lv1 Gothic OTF Light';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
