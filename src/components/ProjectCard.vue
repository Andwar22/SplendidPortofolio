<template>
  <router-link
    :to="linkTo"
    class="timeline-item"
    :aria-label="`View details for ${project.title}`"
  >
    <div class="timeline-media">
      <img :src="project.previewImg" :alt="`${project.title} project preview`" />
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <div class="timeline-heading">
        <p :class="statusClass">{{ project.statusLabel }}</p>
        <h3 class="timeline-title">{{ project.title }}</h3>
      </div>
      <div class="timeline-date">
        <span title="type"><i class="ci-browser"></i>{{ project.type }}</span>
        <span title="core technology"><i class="ci-code"></i>{{ project.coreTech }}</span>
        <span title="year"><i class="ci-calendar-03"></i>{{ project.year }}</span>
      </div>
      <p class="timeline-desc">{{ project.shortDesc }}</p>
      <div class="timeline-tools">
        <img
          v-for="tool in project.tools"
          :key="tool.name"
          :src="tool.src"
          :title="tool.name"
          :alt="tool.name"
        />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const linkTo = computed(() =>
  props.project.pageFile
    ? { name: 'project-detail', params: { slug: props.project.slug } }
    : '/'
)

const statusClass = computed(() => {
  if (props.project.status === 'finished') return 'done'
  if (props.project.status === 'coming-soon') return 'soon'
  return ''
})
</script>
