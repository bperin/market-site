import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
      products :[{
        name: "First product name",
        description : "First product descritptio"
      }]
  })
})
