<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/posts'

  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  fetchPosts()
</script>

<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div class="" v-if="posts.hero">
        <!-- <div v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        <p>{{ post.body }}</p>
        </div> -->
        <div class="container-fluid p-0">
      <div id="banner" class="row min-vh-100 mt-5 mx-0 w-100">
        <div class="col-lg-6 p-5 bg-sand-gradient d-flex flex-column justify-content-center align-items-stretch  text-left mt-4 mt-lg-0 min-vh-75">
          <h1 class="site-title font-weight-bold"
          v-html="posts.hero.title"></h1>
          <h3 class="site-subtitle text-dark my-3" v-html="posts.hero.subtitle"></h3>
          <div>
            <a :href="'#' + posts.hero.btn1Link" class="btn btn-outline-dark cta me-2 px-4" role="button"
            v-html="posts.hero.btn1"></a>
            <a :href="'#' + posts.hero.btn2link">
              <div class="btn btn-dark cta px-4" role="button" v-html="posts.hero.btn2"></div>
            </a>
          </div>
        </div>
        <div class="col-lg-6 bg-sand p-0">
          <img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${posts.hero.img.path}`"
          width="1000" height="600"
          class="w-100 img-full min-vh-50 p-0" />
        </div>
    </div>
    </div>

    </div>
  </main>
</template>