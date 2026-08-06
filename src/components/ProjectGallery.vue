<template>
  <section id="portoMoreScreen" v-if="project.gallery.length">
    <div class="wrapper">
      <p class="title">more screens</p>
      <div class="tiles">
        <button
          v-for="(img, i) in project.gallery"
          :key="i"
          class="gallery-tile"
          @click="openAt(i)"
          :aria-label="`View image ${i + 1}`"
        >
          <img :src="img.src" alt="image" loading="lazy" />
        </button>
      </div>
    </div>
    <AppLightbox
      ref="lightboxRef"
      v-model="lightboxOpen"
      :items="lightboxItems"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppLightbox from './AppLightbox.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const lightboxOpen = ref(false)
const lightboxRef = ref(null)

const lightboxItems = computed(() =>
  props.project.gallery.map(img => ({
    src: img.src,
    alt: img.title || 'screenshot',
    caption: img.description || ''
  }))
)

function openAt(index) {
  if (lightboxRef.value) {
    lightboxRef.value.openAt(index)
  }
  lightboxOpen.value = true
}
</script>
