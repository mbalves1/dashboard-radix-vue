import { defineStore } from 'pinia'

interface UserInfo {
  name: string
  age: number
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // for initially empty lists
      userList: [] as UserInfo[],
      // for data that is not yet loaded
      user: 'Murilo',
      config: {
        resize: true
      }
    }
  },
  persist: true,
})
