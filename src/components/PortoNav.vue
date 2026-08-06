<template>
  <nav id="portoNav">
    <div class="wrapper">
      <router-link :to="backLink">
        <i class="ci-arrow-left-02-round"></i>
        <p>Back to Projects</p>
      </router-link>
      <ThemeToggle />
    </div>
    <span></span>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()

const backLink = computed(() => {
  const ref = route.query.ref
  return ref ? `/#project-${ref}` : '/#projects'
})
</script>
