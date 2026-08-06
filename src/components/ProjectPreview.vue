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
          <DeviceFrame :type="preview.type" :media="preview.media" />
          <p class="frame-title">{{ preview.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DeviceFrame from './DeviceFrame.vue'

defineProps({
  project: { type: Object, required: true }
})
</script>
