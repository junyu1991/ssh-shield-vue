<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      if(!this.$store.state.userInfo && to.name!=='login') {
        console.log('user info null ' + to.name);
        next('/login')
      } else {
        console.log('user info not null')
        next();
      }
    })
  }
}
</script>

<style>
  html {
    height: 100%;
    width: 100%;
  }
  body{
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .app {
    height: 100%;
  }
</style>