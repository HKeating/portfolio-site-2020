<template>
  <router-link class="text-blue-100 hover:underline" :to="{ name: routeName }">
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

<style lang="postcss"></style>
