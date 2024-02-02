<template>
  <div class="h-[88%] bg-white m-6 rounded-xl transition-width duration-500 ease-in-out"
    :class="{'w-full': isResize, 'w-[100px]': !isResize}"
  >
    <div class="flex flex-col justify-between h-[100%]">
      <div>
        <img @click="resize" src="/nuxt.avif" alt="" class="w-12 mx-auto mt-4 cursor-pointer">
  
        <Separator
          class="bg-zinc-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-[80%] data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px] mx-auto"
        />

        <div class="">
          <div class="my-3">
            <div class="flex mx-5 p-4 cursor-pointer rounded-xl items-center justify-between hover:bg-zinc-100 bg-zinc-50">
              <p
                v-if="isResize"
                class="appear-after-delay"
                :class="{ 'appear-active': isResize }"
              >Dashboard</p>
              <LayoutDashboard />
            </div>
    
            <div class="flex mx-5 p-4 cursor-pointer rounded-xl items-center justify-between hover:bg-zinc-100">
              <p v-if="isResize">Profile</p>
              <CircleUserRound />
            </div>

            <div class="flex mx-5 p-4 cursor-pointer rounded-xl items-center justify-between hover:bg-zinc-100">
              <p v-if="isResize">Leads</p>
              <PercentSquare />
            </div>
          </div>
        </div>
      </div>
      
      <div class="">
        <img @click="resize" src="/helpus.svg" alt="" class="w-36 mx-auto mt-4">
        <div class="flex justify-center">
          <div>e-mail</div>
          <div>whattsapp</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LayoutDashboard, CircleUserRound, PercentSquare } from 'lucide-vue-next';

const store = useUserStore()

const isResize = ref(true)

const resize = () => {
  isResize.value = store.config.resize
  store.config.resize = !store.config.resize
}

</script>