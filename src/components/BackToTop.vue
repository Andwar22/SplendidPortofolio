<template>
  <button @click="backToTop" id="bttBtn" ref="btnRef">
    <i class="ci-arrow-up-01-round"></i>
  </button>
</template>

<script setup>
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()

function backToTop() {
  scrollTo(0)
}
</script>
