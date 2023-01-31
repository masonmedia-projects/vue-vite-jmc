<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
<div>
    <NavComponent />
    <router-view></router-view>
</div>
</template>
