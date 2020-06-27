<template>
  <a
    class="text-blue-100 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
    :href="linkUrl"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'LinkExternal',
  props: {
    linkUrl: {
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
