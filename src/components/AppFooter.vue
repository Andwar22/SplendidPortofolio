<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <SplendidLogo />
        <span>splendid</span>
      </div>
      <p class="copyright">
        Copyright &copy; {{ year }} Splendid <b>All Rights Reserved.</b>
      </p>
    </div>
  </footer>
</template>

<script setup>
import SplendidLogo from './SplendidLogo.vue'

const year = new Date().getFullYear()
</script>
