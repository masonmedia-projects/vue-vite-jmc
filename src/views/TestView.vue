<script setup>
//   import { RouterLink } from 'vue-router'
//   import { storeToRefs } from 'pinia'
//   import { usecontenttore } from '../stores/content'

//   const { content, loading, error } = storeToRefs(usecontenttore())
//   const { fetchcontent } = usecontenttore()

//   fetchcontent()

  import { ref, onMounted } from 'vue';
  import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

  const content = ref([]);

  async function getData() {
    const res = await fetch("https://content.jenmasonconsulting.ca/cockpit/api/content/item/home_page");
    const finalRes = await res.json();
    content.value = finalRes;
  }

 getData()

//  onMounted(() => {
//      gsap.from('#banner h1', {x: 100});
//          gsap.utils.toArray(".up").forEach(layer => {
//                 gsap.from(layer, {
//                 y: 70,
//                 opacity: 0,
//                 stagger: 0.3,
//                 ease: "power1.inOut",
//                 scrollTrigger: {
//                     trigger: layer,
//                 }
//             });
//         })
//  })
</script>

<template>
  <main>
    <!-- <p v-if="loading">Loading content...</p>
    <p v-if="error">{{ error.message }}</p> -->
    <div class="" v-if="content.hero">
        <!-- <div v-for="post in content" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        <p>{{ post.body }}</p>
        </div> -->
        <div class="container-fluid p-0">
      <div id="banner" class="row min-vh-100 mt-5 mx-0 w-100">
        <div class="col-lg-6 p-5 bg-sand-gradient d-flex flex-column justify-content-center align-items-stretch  text-left mt-4 mt-lg-0 min-vh-75">
          <h1 class="up site-title font-weight-bold"
          v-html="content.hero.title"></h1>
          <h3 class="up site-subtitle text-dark my-3" v-html="content.hero.subtitle"></h3>
          <div>
            <a :href="'#' + content.hero.btn1Link" class="btn btn-outline-dark cta me-2 px-4" role="button"
            v-html="content.hero.btn1"></a>
            <a :href="'#' + content.hero.btn2link">
              <div class="btn btn-dark cta px-4" role="button" v-html="content.hero.btn2"></div>
            </a>
          </div>
        </div>
        <div class="col-lg-6 bg-sand p-0">
          <img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.hero.img.path}`"
          width="1000" height="600"
          class="w-100 img-full min-vh-50 p-0" />
        </div>
    </div>
    </div>

    </div>
  </main>
</template>