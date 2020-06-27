<template>
  <a target="_blank" rel="noopener noreferrer" :href="linkUrl">
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

<style lang="postcss"></style>
