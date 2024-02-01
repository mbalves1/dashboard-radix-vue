<template>
  <div class="body w-full flex gap-6">
    <aside class="h-full col-span-1 min-w-[300px]">
      <BarSide></BarSide>
    </aside>
    <main class="col-span-2 md:col-span-4">
      <slot></slot>
    </main>
  </div>
</template>
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