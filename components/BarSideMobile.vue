<template>
  <div class="flex">
    <img src="/nuxt.avif" alt="" class="w-12 mx-auto mt-4 cursor-pointer">

    <Separator
      class="bg-zinc-200 my-[15px] my-auto"
      orientation="vertical"
    />

    <div class="flex mx-5 p-4 cursor-pointer rounded-xl items-center justify-between hover:bg-zinc-100 bg-zinc-50">
      <LayoutDashboard />
    </div>

    <div class="flex mx-5 p-4 cursor-pointer rounded-xl items-center justify-between hover:bg-zinc-100 bg-zinc-50">
      <LayoutDashboard />
    </div>
    <div class="flex mx-5 p-4 cursor-pointer rounded-xl items-center justify-between hover:bg-zinc-100 bg-zinc-50">
      <LayoutDashboard />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LayoutDashboard } from 'lucide-vue-next';

</script>