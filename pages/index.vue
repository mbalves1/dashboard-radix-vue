<template>
  <div class="grid lg:grid-cols-2 h-screen sm:mt-0">
    <Transition>
      <div v-if="register" class="bg-green-400 bg-[url('/img/credit.gif')] bg-no-repeat bg-center"></div>
    </Transition>
    <div class="mx-auto flex flex-col justify-center">
      <UserAccount @change-view-event="changePainel"></UserAccount>
    </div>
    <Transition>
      <div v-if="!register" class="sm:bg-green-400 sm:bg-[url('/img/credit.gif')] bg-no-repeat bg-center"></div>
    </Transition>
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>