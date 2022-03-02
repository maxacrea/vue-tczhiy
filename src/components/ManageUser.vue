<template>
  <div class="hello">
    <form action="" @submit="checkform" method="post">
      <input v-model="username" name="username" type="text" />
      <input v-model="age" name="age" type="number" />
      <button type="submit">ok</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  emits: ['checkuser'],
  data() {
    return {
      username: '',
      age: '',
    };
  },
  methods: {
    checkform: function (e) {
      this.$emit('checkuser', { username: this.username, age: this.age });
      e.preventDefault();
    },
  },
};
</script>
