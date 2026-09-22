<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <SplendidLogo />
        <span>ITtwo</span>
      </div>
      <p class="copyright">
        Copyright &copy; {{ year }} ITtwo <b>All Rights Reserved.</b>
      </p>
    </div>
  </footer>
</template>

<script setup>
import SplendidLogo from './SplendidLogo.vue'

const year = new Date().getFullYear()
</script>
