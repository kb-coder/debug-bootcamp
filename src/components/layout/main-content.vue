<template>
  <section class="main-content">
    <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style lang="scss" scoped>
.main-content {
  min-height: 400px;
}
</style>
