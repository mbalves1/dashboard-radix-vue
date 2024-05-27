<template>
  <div class="body w-screen sm:h-[100vh] flex gap-6 mx-auto flex-col-reverse sm:flex-row">
    <aside
      class="sm:h-full transition-width duration-500 ease-in-out h-[100px] flex justify-center"
      :class="resize ? 'sm:w-[100px]' : 'sm:w-[300px] w-full'"
    >
      <BarSide class="hidden sm:block sm:mr-0"></BarSide>
      <BarSideMobile class="sm:hidden rounded-3xl w-[200px] mx-auto bg-white"></BarSideMobile>
    </aside>
    <main class="p-0 sm:p-6 w-full">
      <HeaderView></HeaderView>
      <slot></slot>
    </main>
  </div>
</template>
<script setup>
const store = useUserStore()
const resize = ref(false)

watch(() => {
  return store.config.resize;
}, (novoValor) => {
  resize.value = novoValor;
});

</script>
<style>
.body {
  width: 100% !important;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #2DCE89 0%,
    #2DCE89 30%,
    #EFF1F3 30%,
    #EFF1F3 100%
  );
/* 
  @media screen and (max-width: 425px) {
    height: 0;
  } */
}
</style>