<template>
  <div class="flex flex-col justify-between gap-6">
    <div class="block"> \zsd</div>
    <div class="my-1 w-full  grid grid-cols-3">
      <div class="flex overflow-x-scroll scrollbar-custom gap-6 col-span-3">
        <div v-for="(month, mx) in array" :key="mx" class="min-w-[300px] h-80 p-6 bg-white rounded-xl">
          {{ month.name }}
        </div>
      </div>
    </div>
    <div class="w-full sm:grid sm:grid-cols-3 gap-6">
      <div class="col-span-2 bg-white rounded-lg mb-6 sm:mb-0">
        <!-- <Form @submit="onSubmit" ref="refsForms">
          <div class="flex flex-col">
            <label for="Nome">Nome</label>
            <Field name="Nome" id="Nome" type="text" :rules="isRequired" required class="border-2 outline-blue-500"></Field>
            <ErrorMessage name="Nome" class="text-sm text-red-400 italic"/>
          </div>
  
          <div class="flex flex-col">
            <label for="email">Email</label>
            <Field name="email" type="text" class="border focus:border-red-300"></Field>
            <ErrorMessage name="email" class="text-sm color-red-400 italic"/>
          </div>

          <button type="submit" class="border p-6 bg-blue-100">Submit</button>

        </Form> -->

        
      </div>
      <div class="col-span-1 bg-white rounded-lg">
        <div class="px-4 pt-4 text-lg">Cartões</div>
        <Separator
          class="bg-zinc-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-[90%] data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px] mx-auto"
        />

        <div>

          <Button class="bg-red-400">Aqui</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const { getTransactions } = useTransactions()
  const refsForms = ref()

  function isRequired(value: any) {
    if (value && value.trim()) {
      return true;
    }
    return 'This is required';
  }

  async function onSubmit(values: any) {
    console.log('aqui')
  }
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

  onMounted(() => {
    fetchData()
  })

  const pages = {
    page: 1,
    perPage: 1000
  }

  async function fetchData() {
    try {
      // const transations = await getTransactions(pages)
      const transations = [{}]

      const filteredByMonth = transations
    } catch (error) {
      console.error(error);
    }
  }

</script>