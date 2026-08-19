<template>
  <div :class="`frame-${type}`">
    <img
      :src="frameChromeSrc"
      draggable="false"
      :alt="type"
    />
    <div class="frame-content" data-helper-video-player>
      <!-- Image mode -->
      <img
        v-if="media.kind === 'img'"
        :src="media.src"
        alt="devices"
      />

      <!-- Video mode -->
      <template v-else-if="media.kind === 'video'">
        <video
          ref="videoRef"
          data-helper-video
          :muted="media.muted ?? true"
          :playsinline="media.playsinline ?? true"
          :preload="media.preload || 'none'"
          :poster="media.poster"
          :autoplay="media.autoplay ?? false"
          @play="onPlay"
          @pause="onPause"
        >
          <source
            v-for="(s, i) in media.sources"
            :key="i"
            :src="s.src"
            :type="s.type"
          />
          Your browser does not support the video tag.
        </video>
        <button
          class="video-controls"
          aria-label="Play video"
          :aria-pressed="String(isPlaying)"
          data-helper-video-toggle
          @click="togglePlay"
        >
          <i :class="isPlaying ? 'ci-pause' : 'ci-play'"></i>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  type: { type: String, required: true, validator: v => ['laptop', 'tablet', 'hp'].includes(v) },
  media: {
    type: Object,
    required: true,
    validator: v => {
      if (!['img', 'video'].includes(v.kind)) return false
      if (v.kind === 'img') return !!v.src
      if (v.kind === 'video') return Array.isArray(v.sources) && v.sources.length > 0
      return false
    }
  }
})

const videoRef = ref(null)
const isPlaying = ref(false)
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const frameChromeSrc = computed(() => {
  const map = {
    laptop: publicAsset('/images/sp-img-frame-laptop.webp'),
    tablet: publicAsset('/images/sp-img-frame-tablet.webp'),
    hp: publicAsset('/images/sp-img-frame-hp.webp')
  }
  return map[props.type] || ''
})

function togglePlay() {
  const video = videoRef.value
  if (!video) return

  if (video.paused) {
    playVideo(video)
  } else {
    video.pause()
  }
}

function playVideo(video) {
  video.play().catch(() => {
    const resume = () => {
      video.play().catch(() => {})
    }
    document.addEventListener('click', resume, { once: true })
    document.addEventListener('touchstart', resume, { once: true })
  })
}

function onPlay() {
  isPlaying.value = true
}

function onPause() {
  isPlaying.value = false
}

onMounted(() => {
  const video = videoRef.value
  if (!video || props.media.kind !== 'video') return
  isPlaying.value = !video.paused

  if (props.media.autoplay && video.readyState >= 2) {
    playVideo(video)
  } else if (props.media.autoplay) {
    video.addEventListener('canplay', () => playVideo(video), { once: true })
  }
})
</script>
