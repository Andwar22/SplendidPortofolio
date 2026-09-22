<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 725 725">
    <defs>
      <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="477" y1="221" x2="144" y2="221">
        <stop offset="0" style="stop-opacity:1; stop-color:#6F4CF1"/>
        <stop offset="1" style="stop-opacity:1; stop-color:#2F5AF4"/>
      </linearGradient>
    </defs>
    <g>
      <rect fill="none" width="725" height="725"/>
      <g>
        <path fill="#2F5AF4" d="M33 203l0 486c0,11 5,20 14,26 9,6 20,6 29,2l149 -73c12,-6 20,-18 20,-32l0 -514c0,-4 -2,-8 -6,-11 -4,-2 -8,-3 -12,-1l-174 85c-12,6 -20,18 -20,32z"/>
        <path fill="url(#id0)" d="M540 618l0 -301c0,-11 6,-20 16,-25l120 -59c10,-5 16,-14 16,-25l0 -174c0,-10 -5,-18 -13,-23 -8,-5 -18,-6 -27,-1l-339 165c-11,5 -17,15 -17,27l0 49c0,7 3,13 9,17 6,4 12,4 19,1 8,-4 17,-3 24,2 7,5 11,12 11,21l0 407c0,5 3,10 7,13 5,3 10,3 15,1l143 -70c10,-5 16,-14 16,-25z"/>
      </g>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  svgClass: { type: String, default: '' }
})
</script>
