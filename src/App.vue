<template>
  <div id="app">
    <ManageUser @checkuser="addUser" />
    <HelloWorld :users="users" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ManageUser from './components/ManageUser.vue';

import { getDatabase, ref, set, onValue } from 'firebase/database';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ManageUser,
  },
  data() {
    return {
      users: [],
      username: null,
    };
  },

  mounted() {
    const db = getDatabase();
    const startUsers = ref(db, 'users/');
    onValue(startUsers, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.users = data;
    });
  },
  methods: {
    addUser(user) {
      const db = getDatabase();
      console.log(user);
      set(ref(db, 'users/' + user.username), {
        username: user.username,
        age: user.age,
      })
        .then(() => {
          // Data saved successfully!
        })
        .catch((error) => {
          // The write failed...
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
