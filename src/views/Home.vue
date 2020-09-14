<template>
  <div>
    <hero-bar
      hero-title="Home"
    />
    <div class="pt-3 pb-3 pr-6 pl-6">
      Hello my name is DEMO!
    </div>
  </div>
</template>
<script>
import { HeroBar } from '@/components/layout'

export default {
  name: 'Home',
  components: {
    HeroBar
  }
}
</script>
