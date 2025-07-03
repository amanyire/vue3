<template>
     <div>
    <h1>Latest Tesla News</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="articles.length">
      <li v-for="article in articles" :key="article.url">
        <a :href="article.url" target="_blank">{{ article.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const articles = ref([])
const loading = ref(true)
const error = ref(null)

const apiKey = '822216578bf64a08b89d2dc3ff9b15e1'
const endpoint = `https://newsapi.org/v2/everything?q=tesla&from=2025-06-03&sortBy=publishedAt&apiKey=${apiKey}`

const fetchNews = async () => {
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    articles.value = data.articles
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchNews)

</script>
<style scoped>

</style>