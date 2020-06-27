<template>
  <div id="app" :class="{ 'theme-dark': $route.name === 'BTAB' }">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/btab">BTAB</router-link>
      <router-link to="/general-assembly">General Assembly</router-link>
    </div> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer class="container mx-auto p-2 xl:p-4">
      <div class="border-t-2 border-r-2 p-2">
        <p class="text-right">Horace Keating {{ currentYear }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="postcss">
#app {
  font-family: Oxygen-Regular, Helvetica, Arial, sans-serif;
  background: rgb(249,249,249);
  color: rgb(48,48,58);
}
#app.theme-dark {
  background: rgb(48,48,58);
  color: rgb(249,249,249);
}

.bg-red-75 a,
.bg-blue-75 a,
.bg-red-50 a,
.bg-blue-50 a {
  @apply text-yellow-100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
