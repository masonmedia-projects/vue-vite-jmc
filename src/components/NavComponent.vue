<script setup>
import { storeToRefs } from 'pinia'
import { useTextStore } from '../stores/text'

const { content, loading, error } = storeToRefs(useTextStore())
const { fetchData } = useTextStore()

fetchData()
</script> 

<template>
  <div>
    <!-- sidenav -->
    <!-- <div class="container-fluid w-100 d-flex align-items-center justify-content-center bg-dark p-3">
                <a class="navbar-brand" href="#">jmc</a>
                <button class="btn btn-link text-light ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                </button>
    </div>-->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3" v-if="content.hero">
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
              <a class="nav-link" aria-current="page" :href="item.url" v-html="item.title"></a>
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
          <div class="modal-body">
            <iframe style="width:100%; min-height:50vh;" allowfullscreen src="https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq%252BnuC4b%252BprMCP5pwVnAjsSIWFkuV4uvWyDtO5iNRn8gS049TyW7spdJ"></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark" class="py-3 px-4">
            <router-link class="nav-link navbar-brand" to="/" v-html="data.menu.brand"></router-link>
            <b-navbar-toggle target="nav-collapse">
                <span class="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
    </b-navbar-toggle>-->

    <!-- <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <span v-for="item in data.menu.menu_links" :key="item.id">
                    <b-nav-item :href="item.link">
                        {{item.text}}
                    </b-nav-item>
                </span>
            </b-navbar-nav>
    </b-collapse>-->
    <!-- </b-navbar> -->

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  </div>
</template>