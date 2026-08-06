<template>
  <div v-if="project">
    <PortoNav />
    <ProjectHeader :project="project" />
    <ProjectDescription :project="project" />
    <ProjectPreview :project="project" />
    <ProjectGallery :project="project" />
    <ContactCTA />
    <AppFooter />
  </div>
  <div v-else class="not-found">
    <p>Project not found.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data/projects'
import PortoNav from '@/components/PortoNav.vue'
import ProjectHeader from '@/components/ProjectHeader.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import ProjectPreview from '@/components/ProjectPreview.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'
import ContactCTA from '@/components/ContactCTA.vue'
import AppFooter from '@/components/AppFooter.vue'

const props = defineProps({
  slug: { type: String, required: true }
})

const project = computed(() => projects.find(p => p.slug === props.slug) || null)
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}
.not-found a {
  color: var(--primary);
  margin-top: 1rem;
}
</style>
