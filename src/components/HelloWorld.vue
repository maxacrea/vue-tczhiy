<template>
  <div class="hello">
    <ul v-for="user in users">
      <li>{{ user.username }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['users'],
};
</script>
