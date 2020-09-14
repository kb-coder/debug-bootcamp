<template>
  <div id="app">
    <nav-bar />
    <main class="main-content">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated" name="content">
          <!--content -->
        </router-view>
      </transition>
    </main>
    <router-view name="footer">
      <!--footer -->
    </router-view>
  </div>
</template>

<script>
import { NavBar } from '@/components/layout'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
// attempt to fix footer to be sticky. Needs work.
.main-content {
  flex: 1;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
