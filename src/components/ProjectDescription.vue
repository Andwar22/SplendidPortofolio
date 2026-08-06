<template>
  <section id="portoDescription">
    <div class="wrapper">
      <p class="title">project overview</p>
      <div class="details-list">
        <div class="details-item" v-if="project.challenge">
          <i class="ci-body-part-muscle"></i>
          <div>
            <p>the challenge</p>
            <p>{{ project.challenge }}</p>
          </div>
        </div>
        <div class="details-item" v-if="project.solution">
          <i class="ci-stars"></i>
          <div>
            <p>the solution</p>
            <p>{{ project.solution }}</p>
          </div>
        </div>
        <div class="details-item" v-if="project.features.length">
          <i class="ci-software-license"></i>
          <div>
            <p>key features</p>
            <ul>
              <li v-for="(f, i) in project.features" :key="i">{{ f }}</li>
            </ul>
          </div>
        </div>
        <div class="details-item" v-if="project.tools.length">
          <i class="ci-code"></i>
          <div>
            <p>tools & technologies</p>
            <div class="tools">
              <img
                v-for="tool in project.tools"
                :key="tool.name"
                :src="tool.src"
                :title="tool.name"
                :alt="tool.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>
