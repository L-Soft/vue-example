<template>
  <form class='wrap'>
    <input placeholder='할 일을 입력하세요.' v-model='text'/>
    <button @click='onInsert'>
      <mdicon name="plus"/>
    </button>
  </form>
</template>

<script>
export default {
  name: 'TodoInsert',
  components: {},
  emits: [
    'onSubmit'
  ],
  data() {
    return {
      text: '',
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
    onInsert(e) {
      if (this.text.trim().length > 0) {
        this.$emit("onSubmit", { text: this.text })
        this.text = '';
      }
      e.preventDefault();
    }
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  background-color: #495057;
}

.wrap input {
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;
}

.wrap input::placeholder {
  color: #dee2e6;
}

.wrap button {
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
}

.wrap button:hover {
  background: #adb5bd;
}
</style>
