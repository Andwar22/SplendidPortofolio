<template>
  <Teleport to="body">
    <Transition name="lb-fade">
      <div
        v-if="visible"
        class="lightbox-overlay"
        @click.self="close"
        @keydown="onKeydown"
        ref="overlayRef"
        tabindex="-1"
      >
        <!-- Close button -->
        <button class="lb-close" @click="close" aria-label="Close lightbox">
          <i class="ci-cancel-01"></i>
        </button>

        <!-- Prev button -->
        <button
          v-if="items.length > 1"
          class="lb-nav lb-prev"
          @click.stop="prev"
          aria-label="Previous image"
        >
          <i class="ci-arrow-left-02-round"></i>
        </button>

        <!-- Image -->
        <div class="lb-content" @click.stop>
          <img
            :key="currentIndex"
            :src="items[currentIndex]?.src"
            :alt="items[currentIndex]?.alt || 'image'"
            class="lb-image"
            draggable="false"
          />
          <p v-if="items[currentIndex]?.caption" class="lb-caption">
            {{ items[currentIndex].caption }}
          </p>
        </div>

        <!-- Next button -->
        <button
          v-if="items.length > 1"
          class="lb-nav lb-next"
          @click.stop="next"
          aria-label="Next image"
        >
          <i class="ci-arrow-right-02-round"></i>
        </button>

        <!-- Counter -->
        <div v-if="items.length > 1" class="lb-counter">
          {{ currentIndex + 1 }} / {{ items.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
  modelValue: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue', 'close'])

const visible = ref(false)
const currentIndex = ref(0)
const overlayRef = ref(null)

watch(() => props.modelValue, (val) => {
  if (val) open(0)
  else visible.value = false
})

function open(index = 0) {
  currentIndex.value = index
  visible.value = true
  document.body.classList.add('has-modal')
  nextTick(() => overlayRef.value?.focus())
}

function close() {
  visible.value = false
  document.body.classList.remove('has-modal')
  emit('update:modelValue', false)
  emit('close')
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

function openAt(index) {
  open(index)
  emit('update:modelValue', true)
}

onBeforeUnmount(() => {
  document.body.classList.remove('has-modal')
})

defineExpose({ openAt, close })
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  outline: none;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.lb-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  color: #fff;
  font-size: 1.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: background var(--anim, 0.3s ease), transform var(--anim, 0.3s ease);
}
.lb-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.08);
}

.lb-nav {
  position: absolute;
  top: 50%;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  color: #fff;
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transform: translateY(-50%);
  transition: background var(--anim, 0.3s ease), transform var(--anim, 0.3s ease);
}
.lb-nav:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: translateY(-50%) scale(1.08);
}

.lb-prev { left: 1rem; }
.lb-next { right: 1rem; }

.lb-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 92vw;
  max-height: 90vh;
  user-select: none;
}

.lb-image {
  max-width: 100%;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
}

.lb-caption {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.75rem;
}

.lb-counter {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.35rem 1rem;
  border-radius: 999px;
}

/* ---- Transitions ---- */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}
.lb-fade-enter-active .lb-image,
.lb-fade-leave-active .lb-image {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.lb-fade-enter-from .lb-image {
  transform: scale(0.92);
  opacity: 0;
}
.lb-fade-leave-to .lb-image {
  transform: scale(0.92);
  opacity: 0;
}

/* ---- Responsive ---- */
@media (max-width: 767px) {
  .lb-nav {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
  .lb-prev { left: 0.5rem; }
  .lb-next { right: 0.5rem; }
  .lb-close {
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
    top: 0.75rem;
    right: 0.75rem;
  }
  .lb-content {
    max-width: 96vw;
  }
}
</style>
