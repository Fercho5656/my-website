<template>
  <li>
    <a :href="props.href">
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
interface Props {
  href: string
}

const props = withDefaults(defineProps<Props>(), {
  href: '#'
})
</script>

<style scoped>

</style>