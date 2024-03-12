import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [], // Products will be fetched from the server
    currentPage: 1,
    totalPages: 0, // Assuming the server can provide total page count
    pageSize: 50 // Assuming server decides this, but client is aware of the size
  }),
  actions: {
    // Fetch products for the current page from the server
    async fetchProducts(page) {
      try {
        // Example API call to fetch products by page
        // Replace 'your-api-endpoint' with your actual endpoint
        const response = await fetch(`your-api-endpoint/products?page=${page}`) //todo
        const data = await response.json()
        this.products = data.products // Assuming the response has a 'products' array
        this.totalPages = data.totalPages // Assuming the server sends total page count
        this.currentPage = page // Update current page
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    },

    // Convenient methods for navigating pages
    async nextPage() {
      if (this.currentPage < this.totalPages) {
        await this.fetchProducts(this.currentPage + 1)
      } else {
        console.error('Already on the last page')
      }
    },

    async prevPage() {
      if (this.currentPage > 1) {
        await this.fetchProducts(this.currentPage - 1)
      } else {
        console.error('Already on the first page')
      }
    }
  }
})
