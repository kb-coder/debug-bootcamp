<template>
  <div>
    <hero-bar
      hero-title="Home"
    />
    <div class="pt-3 pb-3 pr-6 pl-6">
      <label>First Name:
        <input
          type="text"
          v-model="firstName"
        />
      </label>
      <p>Hello my name is <span class="has-text-info-dark">{{ firstName }}</span>!</p>
      <button @click="saveToState">Save</button>
    </div>
  </div>
</template>
<script>
import { HeroBar } from '@/components/layout'

export default {
  name: 'Home',
  components: {
    HeroBar
  },
  data () {
    return {
      firstName: ''
    }
  },
  created () {
    this.firstName = this.$store.state.person.firstName
  },
  methods: {
    saveToState () {
      const person = this.$store.state.person
      person.firstName = this.firstName
      this.$store.dispatch('person/updatePerson', person)
    }
  }
}
</script>
