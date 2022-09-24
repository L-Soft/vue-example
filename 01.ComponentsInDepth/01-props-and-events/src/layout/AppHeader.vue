<template>
  <div class='wrap'>
    <nav>
      <router-link to="/">홈</router-link>
      |
      <router-link to="/todo">할일</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
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
  methods() {

  },
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
