<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import { storeToRefs } from 'pinia'
import { useTextStore } from '../stores/text'

const { content, loading, error } = storeToRefs(useTextStore())
const { fetchData } = useTextStore()

fetchData()

onMounted(() => {
  AOS.init({
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-sine', // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
  })
})
</script> 

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3" v-if="content.hero" data-aos="fade-down">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">jen mason consulting</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li class="nav-item pe-2" v-for="(item, index) in content.nav.slice(1, 5)" :key="index">
              <a class="nav-link" aria-current="page" 
              :href="item.url" v-html="item.title"></a>
            </li>
            <li class="nav-item">
              <button class="mt-3 mt-lg-0 btn btn-outline-light fw-bold"
              data-bs-toggle="modal" data-bs-target="#exampleModal">newsletter</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Benchmark newsletter signup Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">JMC Newsletter Signup</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-2">
            <iframe style="width:100%; min-height:50vh;" allowfullscreen src="https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq%252BnuC4b%252BprMCP5pwVnAjsSIWFkuV4uvWyDtO5iNRn8gS049TyW7spdJ"></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>