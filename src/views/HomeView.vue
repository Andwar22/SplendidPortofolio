<template>
  <div>
    <!-- Hero Header -->
    <header id="mainHeader">
      <div class="wrapper">
        <div class="hero-txt">
          <h1>We Build Digital Solutions That <span class="highlight">Drive Impact</span></h1>
          <h4>We're a team of developers and designers building websites and apps for startups and growing businesses. We take projects from the very first idea to launch, backed by experience since 2018.</h4>
          <div class="hero-btns">
            <a href="#projects" class="hero-btn-primary" @click.prevent="scrollToSelector('#projects')">
              View Our Work <i class="ci-arrow-right-02-round"></i>
            </a>
            <a href="#contact" class="hero-btn-outline" @click.prevent="scrollToSelector('#contact')">
              Let's Collaborate
            </a>
          </div>
        </div>
        <div class="hero-img-wrap">
          <div class="hero-glow"></div>
          <img :src="publicAsset('/images/sp-img-hero-light.webp')" alt="Digital Solutions Mockup" class="hero-img" />
        </div>
      </div>
    </header>

    <!-- Partners -->
    <section id="partners">
      <p class="partners-title">Trusted by startups and companies</p>
      <div class="partners-list">
        <div v-for="p in partners" :key="p.name" class="partner-item">
          <svg class="partner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <template v-if="p.icon === 'leaf'">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </template>
            <template v-else-if="p.icon === 'circle'">
              <circle cx="7" cy="17" r="3.5" fill="currentColor"/><circle cx="17" cy="17" r="3.5" fill="currentColor"/><circle cx="12" cy="7.5" r="3.5" fill="currentColor"/>
            </template>
            <template v-else-if="p.icon === 'cloud'">
              <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1564 20.2064 10.2312 17.9 10.0243C17.4339 6.58986 14.4746 4 10.875 4C6.91255 4 3.7 7.21255 3.7 11.175C3.7 11.5367 3.72688 11.892 3.77884 12.2386C2.17646 13.0645 1 14.733 1 16.6667C1 19.3333 3.16667 21.5 5.83333 21.5H17.5V19Z"/>
            </template>
            <template v-else-if="p.icon === 'droplet'">
              <path d="M7 6v7a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V6" stroke-width="2.5"/>
            </template>
            <template v-else>
              <path d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z"/><circle cx="12" cy="12" r="3"/>
            </template>
          </svg>
          <span>{{ p.name }}</span>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <div class="wrapper">
        <div class="about-txt">
          <p class="subtitle">About Us</p>
          <p class="title">Building With Passion, Delivering With Purpose</p>
          <p class="desc">We're a digital product studio focused on creating high-quality websites, web apps, and digital experiences. Since 2018, we've combined design, technology, and strategy to help businesses grow online and we're just as comfortable building from scratch as we are improving what's already there.</p>
          <div class="about-stats">
            <div v-for="stat in aboutStats" :key="stat.label" class="stat-item">
              <div class="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <template v-if="stat.icon === 'user'">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </template>
                  <template v-else-if="stat.icon === 'monitor'">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </template>
                  <template v-else>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </template>
                </svg>
              </div>
              <div class="stat-info">
                <h3>{{ stat.value }}</h3>
                <p>{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-img-wrap">
          <img :src="publicAsset('/images/sp-img-about.webp')" alt="NovaCode Team Collaboration" class="about-img" />
          <div class="about-floating-card">
            <div class="card-badge-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <p>We turn ideas into digital products that people love.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <div class="wrapper">
        <div class="projects-header">
          <p class="subtitle">Our Projects</p>
          <p class="title">Selected Works We're Proud Of</p>
          <p class="desc">A look at the websites and apps we're proud of a selection that best shows what we can build together.</p>
        </div>
        <div class="project-timeline">
          <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
        </div>
      </div>
    </section>

    <!-- Why Us -->
    <section id="why">
      <div class="wrapper">
        <div class="why-header">
          <p class="subtitle">Why Choose Us</p>
          <p class="title">Your Vision, Our Expertise</p>
          <p class="desc">From idea to launch, we help businesses build digital products that are clean, fast, and ready to grow with their users.</p>
        </div>
        <div class="why-list">
          <div v-for="item in whyItems" :key="item.title" class="why-item">
            <div class="why-icon">
              <i :class="item.icon"></i>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <ContactCTA />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { useScrollTo } from '@/composables/useScrollTo'
import ProjectCard from '@/components/ProjectCard.vue'
import ContactCTA from '@/components/ContactCTA.vue'
import AppFooter from '@/components/AppFooter.vue'
import { projects, partners, aboutStats, whyItems } from '@/data/projects'

const { scrollToSelector } = useScrollTo()
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
</script>
