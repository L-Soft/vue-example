<template>
  <div class='footer'>
    <p>Footer Component</p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
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
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #d2dbe0;
  color: #232F34;
  text-align: center;
  font-weight: bold;
}
</style>
