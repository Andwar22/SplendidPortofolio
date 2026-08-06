<template>
  <div id="app-root">
    <AppNavbar v-if="showMainNav" />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <BackToTop />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import BackToTop from '@/components/BackToTop.vue'

const route = useRoute()
const showMainNav = computed(() => route.name !== 'project-detail')
</script>

<style>
/* CSS is imported globally via main.js */
</style>
