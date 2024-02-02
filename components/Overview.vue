<template>
  <div class="flex">
    <div class="my-8 w-full max-w-2xl mx-auto flex">
      <div class="flex overflow-x-scroll">
        <div v-for="(month, mx) in array" :key="mx" class="border w-[300px] p-6 bg-white rounded-xl">
          {{ month.name }}
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-[400px] bg-red-50">
      aqui
    </div>
  </div>
</template>
<script setup>

const array = [
  { name: 'Janeiro', value: 100},
  { name: 'Fevereiro', value: 100},
  { name: 'Março', value: 100},
  { name: 'Abril', value: 100},
  { name: 'Maio', value: 100},
  { name: 'Junho', value: 100},
  { name: 'Julho', value: 100},
  { name: 'Agosto', value: 100},
  { name: 'Setembro', value: 100},
]

</script>