<script setup>
import { onMounted } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import { storeToRefs } from 'pinia'
import { useTextStore } from '../stores/text'

const { content, loading, error } = storeToRefs(useTextStore())
const { fetchData } = useTextStore()

fetchData()

onMounted(() => {
  gsap.to("#banner h1", {
    duration: 1.5,
    x: 100,
  });
  // gsap.utils.toArray(".up").forEach(layer => {
  //               gsap.from(layer, {
  //               y: 70,
  //               opacity: 0,
  //               stagger: 0.3,
  //               ease: "power1.inOut",
  //               scrollTrigger: {
  //                   trigger: layer,
  //               }
  //           });
  //       })
})
  

// import { ref, reactive, onMounted } from 'vue'
// // let content = ref(null)
// let state = reactive({content:[]})
// // let content = []
// function getData() {
//   fetch('https://content.jenmasonconsulting.ca/cockpit/api/content/item/home_page')
//   .then(response => response.json())
//   .then(json => {
//     state.content = json
//     console.log(state.content
//     )})
// }

// onMounted(() => {
//   // getData();
//   fetchData();
// })

</script>

<template>
  <div>
    <main>

      <!-- loading, error messages -->

      <h1 v-if="loading" class='col-lg-12 center-center p-5 min-vh-100 text-secondary fw-light'>Welcome to Jen Mason Consulting</h1>
      <h1 v-if="error" class="col-lg-12 center-center text-secondary p-5 min-vh-100 fw-light">{{ error.message }}</h1>

      <!-- main content -->
      <div class v-if="content.hero">
        <div class="container-fluid p-0">

          <!-- hero -->
          <div id="banner" class="row min-vh-100 mt-5 mx-0 w-100">
            <div class="col-lg-6 p-5 bg-sand d-flex flex-column justify-content-center align-items-stretch text-left mt-4 mt-lg-0 min-vh-75">
              <h1 class="site-title font-weight-bold" v-html="content.hero.title"></h1>
              <h3 class="site-subtitle text-dark my-3" v-html="content.hero.subtitle"></h3>
              <div>
                <a :href="'#' + content.hero.btn1Link"
                class="btn btn-outline-dark cta me-2 px-4"
                role="button"
                v-html="content.hero.btn1"></a>
                <a :href="'#' + content.hero.btn2link">
                  <div class="btn btn-dark cta px-4" role="button" v-html="content.hero.btn2"></div>
                </a>
              </div>
            </div>
            <div class="col-lg-6 bg-sand p-0">
              <img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.hero.img.path}`"
              width="1000"
              height="600"
              class="w-100 img-full min-vh-50 p-0" />
            </div>
          </div>

          <!-- mission -->

          <div class="row min-vh-100" id="mission">
            <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
              <h5 class="up text-uppercase font-weight-bold" v-html="content.mission.microtitle"></h5>
              <h2 class="up section-title" v-html="content.mission.title"></h2>
              <div class="up mb-4" v-html="content.mission.text"></div>
              <a href="#services-intro">
                <button role="button" class="up btn btn-info" v-html="content.servicesIntro.btn"></button>
              </a>
            </div>
            <div class="col-lg-12 p-0 center-center">
              <img
                :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.mission.img.path}`"
                width="1000"
                height="600"
                class="img-full min-vh-50"
              />
            </div>
          </div>

          <!-- services intro -->

          <div class="row min-vh-100 bg-linen" id="services-intro">
            <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
              <h5 class="up text-uppercase font-weight-bold"
              v-html="content.servicesIntro.microtitle"
              ></h5>
              <h2 class="up section-title" v-html="content.servicesIntro.title"></h2>
              <div class="up mb-4" v-html="content.servicesIntro.text"></div>
              <a href="#services">
                <button role="button" class="up btn btn-info" v-html="content.servicesIntro.btn"></button>
              </a>
            </div>
          </div>

        <!-- services array -->

      <div class="row min-vh-100" id="services"
      v-for="(item, index) in content.services" :key="index">
      <div v-if="index % 2 === 0" class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-6 min-50 align-left-center my-auto p-5 m-0 order-2 order-lg-1">
          <h6 class="up text-uppercase small" v-html="item.microtitle"></h6>
          <h2 class="up section-title" v-html="item.title"></h2>
          <div class="up mb-4" v-html="item.text"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
        </div>
        <div class="col-lg-6 min-vh-50 p-0 order-1 order-lg-12">
          <img width="1000" height="600" :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" class="w-100 h-100 object-fit" alt="" />
        </div>
      </div>
      <div v-else class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-6 min-vh-50 p-0">
          <img width="1000" height="600" :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" class="w-100 h-100 object-fit" alt="" />
        </div>
        <div class="col-lg-6 min-50 align-left-center my-auto p-5 m-0">
          <h6 class="up text-uppercase small" v-html="item.microtitle"></h6>
          <h2 class="up section-title" v-html="item.title"></h2>
          <div class="up mb-4" v-html="item.text"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
          </div>
        </div>
      </div>

      <!-- about -->

      <div id="about" class="row min-vh-100 bg-linen">
        <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
          <h5 class="up text-uppercase font-weight-bold" v-html="content.about.microtitle"></h5>
          <h2 class="up section-title" v-html="content.about.title"></h2>
          <div class="up" v-html="content.about.text"></div>
            <a href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
            </a>
          </div>
          <div class="col-lg-12 p-0 center-center">
            <img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.about.img.path}`"
              width="1000"
              height="600"
              class="img-full min-vh-50"
            />
          </div>
        </div>

        <!-- contact -->

        <div id="contact" class="row bg-dark text-light">
          <div class="col-lg-8 offset-lg-2 p-5 min-vh-75 center-center">
            <h5 class="up text-uppercase font-weight-bold" v-html="content.contact.microtitle"></h5>
            <h1 class="section-title" v-html="content.contact.title"></h1>
            <p class="mb-4" v-html="content.contact.text"></p>
            <a :href="content.contactbtnLink">
              <button role="button" class="btn btn-info" v-html="content.contact.btn"></button>
            </a>
          </div>
          <div class="col-sm-12 p-0 position-relative">
            <img width="1000" height="500" class="w-100 object-fit" 
            :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.contact.img.path}`" alt="A group jumping on a beach at sunset signifying teamwork, joy, and cameraderie.">
          </div>
        </div>

        <!-- footer -->

        <footer>
          <div class="row p-0 m-0">
            <div class="col-lg-12 p-5 bg-dark center-center">
              <button type="button" role="button" class="btn btn-outline-light" v-html="content.footer" disabled></button>
            </div>
          </div>
        </footer>


      </div><!--end main container-->
    </div>
  </main>
  </div>
</template>
