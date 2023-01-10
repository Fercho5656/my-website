<template>
  <nav class="flex-1 max-w-xl">
    <ul class="flex gap-x-4 justify-evenly transition-all text-xl lg:text-2xl lg:font-semibold whitespace-nowrap">
      <Link href="#home">Home</Link>
      <Link href="#about-me">About Me</Link>
      <Link href="#portfolio">Portfolio</Link>
      <Link href="#blog">Blog</Link>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import Link from './Link.vue'
</script>

<style scoped>

</style>