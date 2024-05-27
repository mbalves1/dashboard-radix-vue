<template>
  <div class="flex items-center h-20">
    <div class="flex items-center justify-center mx-auto gap-6 w-[200px]">
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