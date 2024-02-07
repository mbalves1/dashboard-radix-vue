<template>
  <div class="flex items-center h-20">
    <div class="">
      <img src="/nuxt.avif" alt="" class="pl-2 w-12 mx-auto cursor-pointer">
    </div>
    <div class="flex items-center justify-center mx-auto gap-6">
      <LayoutDashboard class="text-green cursor-pointer bg-zinc-100 rounded w-12 h-12 p-3" />
      <UserRound class="text-green cursor-pointer bg-zinc-100 rounded w-12 h-12 p-3" />
      <PercentSquare class="text-green cursor-pointer bg-zinc-100 rounded w-12 h-12 p-3" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LayoutDashboard, UserRound, PercentSquare, Bell } from 'lucide-vue-next';

const currentMenu = ref('')

function alede() {
  alert('ol')
}
</script>