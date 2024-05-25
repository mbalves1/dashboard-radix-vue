<template>
  <div class="grid lg:grid-cols-2 h-screen sm:mt-0">
    <div v-if="register" class="bg-green-400 bg-[url('/img/credit.gif')] bg-no-repeat bg-center"></div>
    <div class="mx-auto flex flex-col justify-center">
      <UserAccount @change-view-event="changePainel"></UserAccount>
    </div>
    <div v-if="!register" class="sm:bg-green-400 sm:bg-[url('/img/credit.gif')] bg-no-repeat bg-center"></div>
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