<template>
  <router-link class="text-blue-100 hover:underline" :to="routeName">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'LinkExternal',
  props: {
    routeName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss">
.bg-red-75 > p > a,
.bg-blue-75 > p > a,
.bg-red-50 > p > a,
.bg-blue-50 > p > a {
  @apply text-yellow-100;
}
</style>
