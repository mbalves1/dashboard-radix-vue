<template>
  <div class="flex justify-between max-w-full">
    <div class="">
    </div>
    <div class="flex gap-4">
      <div class="flex">
        <TagsInputRoot add-on-paste class="border rounded-lg bg-white p-1">
          <TagsInputInput placeholder="Search..." class="text-sm focus:outline-none flex-1 rounded text-green9 bg-transparent placeholder:text-mauve9 px-1" />
        </TagsInputRoot>
      </div>
      <div class="flex gap-4 items-center">
        <UserRound class="text-white cursor-pointer" />
        <p class="text-white mr-2 font-bold">Sign In</p>
        <Bolt class="text-white cursor-pointer" />
        <Bell class="text-white cursor-pointer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserRound, Bolt, Bell } from 'lucide-vue-next';

const modelValue = ref<string>('')
</script>