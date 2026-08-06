<template>
  <nav id="portoNav">
    <div class="wrapper">
      <router-link to="/#projects">
        <i class="ci-arrow-left-02-round"></i>
        <p>Back to Projects</p>
      </router-link>
      <ThemeToggle />
    </div>
    <span></span>
  </nav>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>
