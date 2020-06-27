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
