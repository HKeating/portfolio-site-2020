<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    transitionName() {
      if (this.$route.name === 'home') return 'slide-left';
      else return 'slide-right';
    },
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// .slide-left-enter-active, .slide-left-leave-active {
//   transition: transform 300ms ease-in-out;
// }
// .slide-left-enter, .slide-left-leave-to {
//   transform: translateX(-30vw);
// }

// .slide-right-enter-active, .slide-right-leave-active {
//   transition: transform 300ms ease-in-out;
// }
// .slide-right-enter, .slide-right-leave-to {
//   transform: translateX(30vw);
// }
</style>
