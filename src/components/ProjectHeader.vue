<template>
  <header id="portoHeader">
    <div class="wrapper">
      <div class="proj-devices">
        <DeviceFrame
          v-for="(device, i) in devices"
          :key="i"
          :type="device.type"
          :media="device.media"
        />
      </div>

      <div class="proj-title">
        <p class="status" :class="statusClass">{{ project.statusLabel }}</p>
        <p class="title">{{ project.title }}</p>
        <p class="desc">{{ project.description }}</p>
        <div class="proj-meta">
          <div class="meta-item">
            <i class="ci-browser"></i>
            <div>
              <p>type</p>
              <p>{{ project.type }}</p>
            </div>
          </div>
          <div class="meta-item">
            <i class="ci-code"></i>
            <div>
              <p>core technology</p>
              <p>{{ project.coreTech }}</p>
            </div>
          </div>
          <div class="meta-item">
            <i class="ci-calendar-03"></i>
            <div>
              <p>year</p>
              <p>{{ project.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import DeviceFrame from './DeviceFrame.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

// Use headerDevices if defined, otherwise fall back to a single laptop with previewImg
const devices = computed(() => {
  if (props.project.headerDevices?.length) return props.project.headerDevices
  return [{ type: 'laptop', media: { kind: 'img', src: props.project.previewImg } }]
})

const statusClass = computed(() => ({
  done: props.project.status === 'finished',
  soon: props.project.status === 'coming-soon'
}))
</script>
