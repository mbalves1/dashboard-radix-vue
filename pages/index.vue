<template>
  <div class="grid lg:grid-cols-2 sm:h-screen">
    <div class="bg-red-500"></div>
    <div class="flex justify-center items-center">
      <UserAccount></UserAccount>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'layout'
})
</script>