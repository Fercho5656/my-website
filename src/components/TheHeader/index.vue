<template>
  <header class="flex items-center justify-evenly pt-3 sm:p-3">
    <button class="sm:hidden">
      <bars3 class="w-10 aspect-square" />
    </button>
    <p class="text-3xl lg:text-4xl transition-all text-green-pea-400 font-mono font-semibold">Fercho</p>
    <TheNavbarDesktop class="hidden sm:block" />
    <Button
      class="flex items-center gap-x-1 text-base lg:text-xl transition-all bg-green-pea-400 hover:bg-green-pea-500 focus:ring-green-pea-300 dark:focus:ring-green-pea-900">
      <Phone class="w-4 aspect-square" />
      Contact Me!
    </Button>
  </header>
</template>

<script setup lang="ts">
import Bars3 from '../Icons/Bars3.vue'
import Phone from '../Icons/Phone.vue'
import Button from '../UI/Button.vue'
import TheNavbarDesktop from '../TheNavbar/Desktop/index.vue'

</script>

<style scoped>

</style>