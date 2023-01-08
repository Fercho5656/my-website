<template>
  <header class="flex items-center justify-between pt-2">
    <button>
      <bars3 class="w-10 aspect-square" />
    </button>
    <p class="text-3xl text-green-pea-400 font-mono font-semibold">Fercho</p>
    <Button
      class="flex items-center gap-x-1 text-base bg-green-pea-400 hover:bg-green-pea-500 focus:ring-green-pea-300 dark:focus:ring-green-pea-900">
      <Phone class="w-4 aspect-square" />
      Contáctame
    </Button>
  </header>
</template>

<script setup lang="ts">
import Bars3 from '../Icons/Bars3.vue'
import Phone from '../Icons/Phone.vue'
import Button from '../UI/Button.vue'
</script>

<style scoped>

</style>