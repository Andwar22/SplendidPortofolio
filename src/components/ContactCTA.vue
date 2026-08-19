<template>
  <section id="contact">
    <div class="wrapper">
      <div class="contact-cta">
        <div class="contact-cta-icon">
          <i class="ci-message-02"></i>
        </div>
        <p class="subtitle">Let's Work Together</p>
        <h2>Ready to build something amazing together?</h2>
        <p>Tell us what you want to create, and we will help turn the idea into a digital product that is clear, reliable, and ready to grow.</p>
        <a :href="whatsappLink" class="contact-cta-btn" aria-label="Start a project conversation on WhatsApp" target="_blank" rel="noopener">
          <i class="ci-whatsapp"></i>
          Start a Conversation
          <i class="ci-arrow-right-02-round"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsappLink = 'https://wa.me/6281286944675/?text=Hello%20Splendid%2C%20I%20would%20like%20to%20discuss%20a%20project'
</script>
