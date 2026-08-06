<template>
  <div class="cr-dropdown theme" aria-label="Theme mode" title="Theme mode">
    <button
      ref="toggleRef"
      class="cr-drop-toggle cr-icon"
      type="button"
      aria-label="More options"
      aria-haspopup="true"
      :aria-expanded="open"
      aria-controls="crDropdownActionsMenu"
      @click="open = !open"
    >
      <i class="ci-sun-03"></i>
      <i class="ci-moon-2"></i>
      <i class="ci-computer-settings"></i>
    </button>
    <ul
      id="crDropdownActionsMenu"
      class="cr-drop-menu"
      :aria-hidden="!open"
      :style="{ display: open ? 'block' : 'none' }"
    >
      <li v-for="opt in options" :key="opt.value">
        <button
          class="cr-drop-item"
          type="button"
          :data-theme-value="opt.value"
          :aria-pressed="theme === opt.value"
          @click="selectTheme(opt.value)"
        >
          <i :class="opt.icon"></i> {{ opt.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, applyTheme } = useTheme()
const open = ref(false)
const toggleRef = ref(null)

const options = [
  { value: 'light', label: 'Light', icon: 'ci-sun-03' },
  { value: 'dark', label: 'Dark', icon: 'ci-moon-2' },
  { value: 'system', label: 'System', icon: 'ci-computer-settings' }
]

function selectTheme(value) {
  applyTheme(value)
  open.value = false
}

function handleClickOutside(e) {
  if (toggleRef.value && !toggleRef.value.closest('.cr-dropdown')?.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
