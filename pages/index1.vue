<template>
  <div class="grid lg:grid-cols-2 sm:h-screen dark">
    <div v-if="register" class="bg-green-400"></div>
    <div class="flex justify-center items-center">
      <UserAccount @change-view-event="changePainel"></UserAccount>
    </div>
    <div v-if="!register" class="bg-green-400"></div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'layout'
})

const register = ref(true)

const changePainel = (event: boolean) => {
  register.value = !register.value
}
</script>
<style>
body {
  background: white;
}
</style>