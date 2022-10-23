<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
<div class="">
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <NavComponent />

  </header>

  <router-view></router-view>
</div>
</template>
