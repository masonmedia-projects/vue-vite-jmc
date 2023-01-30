import { defineStore } from 'pinia'

export const useTextStore = defineStore({
  id: 'content',
  state: () => ({
    content: [],
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  }, 
  actions: {
    async fetchData() {
      this.content = []
      this.loading = true
      try {
        this.content = await fetch(import.meta.env.VITE_API_ENDPOINT)
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})