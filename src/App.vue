<template>
  <div id="app">
    <nav-bar />
    <main-content></main-content>
    <info-bar></info-bar>
    <footer-bar></footer-bar>
    <router-view/>
  </div>
</template>

<script>
import { NavBar, MainContent, InfoBar, FooterBar } from '@/components/layout'

export default {
  name: 'App',
  components: {
    FooterBar,
    InfoBar,
    MainContent,
    NavBar
  }
}
</script>

<style lang="scss">
</style>
