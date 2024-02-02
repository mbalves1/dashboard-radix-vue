<template>
  <div class="body w-screen flex gap-6 mx-auto">
    <aside
      class="h-full transition-width duration-500 ease-in-out"
      :class="resize ? 'w-[100px]' : 'w-[300px]'"
    >
      <BarSide></BarSide>
    </aside>
    <main class="p-6 w-full">
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
}
</style>