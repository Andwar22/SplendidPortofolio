<template>
  <nav id="navbar" ref="navbarRef">
    <div class="wrapper">
      <input type="checkbox" id="nav-toggle" v-model="menuOpen" />

      <div class="nav-brand">
        <a href="/" @click.prevent="scrollTo('#mainHeader')">
          <SplendidLogo />
        </a>
      </div>

      <div id="menus" class="nav-menu">
        <div class="logo-nav-mobile">
          <SplendidLogo />
          <div><span>splendid</span></div>
        </div>

        <label for="nav-toggle" class="close-menu" @click="menuOpen = false">
          <i class="ci ci-cancel-01"></i>
        </label>

        <ul>
          <li v-for="link in links" :key="link.hash">
            <a
              :href="link.hash"
              class="nav-link"
              :class="{ active: activeSection === link.hash }"
              @click.prevent="navigateTo(link.hash)"
            >{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="nav-actions">
        <ThemeToggle />
        <label for="nav-toggle" class="open-menu">
          <i class="ci ci-menu-01"></i>
        </label>
      </div>
    </div>
    <div class="nav-layer trans"></div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useScrollTo } from '@/composables/useScrollTo'
import SplendidLogo from './SplendidLogo.vue'
import ThemeToggle from './ThemeToggle.vue'

const router = useRouter()
const route = useRoute()
const { scrollToSelector } = useScrollTo()

const menuOpen = ref(false)
const activeSection = ref('#mainHeader')

const links = [
  { hash: '#mainHeader', label: 'Home' },
  { hash: '#about', label: 'About Us' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#why', label: 'Why Us' },
  { hash: '#contact', label: 'Contact' }
]

function navigateTo(hash) {
  menuOpen.value = false
  activeSection.value = hash

  if (route.path !== '/') {
    router.push({ path: '/', hash }).then(() => {
      setTimeout(() => scrollToSelector(hash), 100)
    })
  } else {
    scrollToSelector(hash)
  }
}
</script>
