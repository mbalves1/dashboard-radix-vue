<template>
  <div class="h-[88%] bg-white m-6 rounded-lg  transition-width duration-500 ease-in-out"
    :class="{'w-full': isResize, 'w-[100px]': !isResize}"
  >
    <div class="flex flex-col">
      <img src="/nuxt.avif" alt="" class="w-12 mx-auto mt-4">

      <Separator
        class="bg-zinc-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-[80%] data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px] mx-auto"
      />

      <button @click="resize">Diminuir</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const isResize = ref(true)

const resize = () => {
  isResize.value = !isResize.value
}
</script>