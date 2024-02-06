import { defineStore } from 'pinia'
import {
  getTransactions
} from "../api/api-transactions"

interface Pages {
  page: number;
  perPage: number;
}

export const useTransactions = defineStore('transactions', {
  state: () => ({
    transactions: []
  }),
  actions: {
    async getTransactions(pages: Pages) {
      try {
        const response = await getTransactions(pages)
        const data = await response.json()
        this.transactions = data
        return data
      } catch (error) {
        console.error(error)
      }
    },
  }
})