<template>
  <section id="portoPreview" v-if="project.devicePreviews.length">
    <div class="wrapper">
      <p class="title">project preview</p>
      <div class="proj-devices">
        <div
          v-for="(preview, i) in project.devicePreviews"
          :key="i"
          class="wrap-devices"
        >
          <div :class="`frame-${preview.type}`">
            <img
              :src="frameSrc(preview.type)"
              draggable="false"
              :alt="preview.type"
            />
            <div class="frame-content" data-helper-video-player>
              <img :src="preview.src" alt="devices" />
            </div>
          </div>
          <p class="frame-title">{{ preview.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})

function frameSrc(type) {
  const map = {
    laptop: '/images/sp-img-frame-laptop.webp',
    tablet: '/images/sp-img-frame-tablet.webp',
    hp: '/images/sp-img-frame-hp.webp'
  }
  return map[type] || ''
}
</script>
