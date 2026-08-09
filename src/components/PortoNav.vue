<template>
  <nav id="portoNav">
    <div class="wrapper">
      <a href="#" @click.prevent="goBack">
        <i class="ci-arrow-left-02-round"></i>
        <p>Back to Projects</p>
      </a>
      <ThemeToggle />
    </div>
    <span></span>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const router = useRouter()

function goBack() {
  // If we arrived via in-app navigation, act like the browser back button
  if (window.history.state?.back) {
    router.back()
    return
  }
  // Direct page load — no history to go back to, land on the projects section
  router.push({ name: 'home', hash: '#projects' })
}
</script>
