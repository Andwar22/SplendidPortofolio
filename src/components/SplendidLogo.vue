<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1888 1888" :class="svgClass">
    <g>
      <path fill="currentColor" d="M237 382l287 -166 287 -165c84,-49 181,-49 266,0l287 165 113 65 -886 512c86,37 189,34 276,-17l734 -423 50 29c84,49 133,133 133,231l0 331 0 331c0,98 -49,182 -133,231l-287 165 -287 166c-85,49 -182,49 -266,0l-287 -166 -11 -6 610 -351c87,-51 141,-138 152,-232l-886 512 -152 -88c-85,-49 -133,-133 -133,-231l0 -331 0 -331c0,-98 48,-182 133,-231z"/>
      <rect fill="none" width="1888" height="1888"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  svgClass: { type: String, default: '' }
})
</script>
