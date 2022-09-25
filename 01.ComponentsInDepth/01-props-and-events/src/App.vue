<template>
  <AppHeader />
  <router-view @update-status="updateStatus"/>
</template>

<script>
import AppHeader from '@/layout/AppHeader';

const updateStatus = ({todoSize}) => {
  console.log("updateStatus", todoSize);
};

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  setup() {
    return {
      updateStatus,
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
