<template>
  <div :class="{search_box: isActive, search_box_hidden: !isActive}"></div>
</template>

<script>
export default {
  name: "AnimalSearch",
  components: {},
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      block: ''
    }
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
}
</script>

<style scoped>
.search_box {
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  height: 300px;
  width: 900px;
  background-color: #F9AA33;
}
.search_box_hidden {
  visibility: hidden;
}
</style>
