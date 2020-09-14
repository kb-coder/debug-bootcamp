<template>
  <section class="info-bar">
    <div class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ heroTitle }}
          </h1>
          <h2
            class="subtitle"
            v-if="showSubtitle">
            {{ heroSubtitle }}
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBar',
  props: {
    heroTitle: {
      type: String,
      default: ''
    },
    heroSubtitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    showSubtitle () {
      return this.heroSubtitle && this.heroSubtitle.length > 0
    }
  }
}
</script>
