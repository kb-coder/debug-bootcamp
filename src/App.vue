<template>
  <div id="app">
    <nav-bar />
    <router-view name="hero">
      <!--hero -->
    </router-view>
    <section class="main-content">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated" name="content">
          <!--content -->
        </router-view>
      </transition>
    </section>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { NavBar, FooterBar } from '@/components/layout'

export default {
  name: 'App',
  components: {
    FooterBar,
    NavBar
  }
}
</script>

<style lang="scss">
</style>
