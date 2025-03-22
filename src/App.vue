<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

import Login from './components/Login.vue';

export default {
  components: {
    Login
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
