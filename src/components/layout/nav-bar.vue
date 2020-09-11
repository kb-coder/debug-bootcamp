<template>
  <header class="navbar is-bold">
    <div class="container">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'Home' }">
        <img alt="Vue logo" src="../../assets/logo.png">
      </router-link>
      <a class="navbar-item is-hidden-desktop" href="#" target="_blank" />
      <div class="navbar-burger burger" data-target="navbarDropdown">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarDropdown" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="#">
            Other Pages
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="#">
              <router-link :to="{ name: 'About' }">About</router-link>
            </a>
            <a class="navbar-item" href="#">
              Item 2
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="#">
              Item after divider
            </a>
            <a class="navbar-item is-active" href="#">
              Item is-active
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary is-outlined" href="http://www.google.com" target="_blank">
                <span>Google Me</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation'
}

// /* burger navigation */ USE VUE!!!
// document.addEventListener('DOMContentLoaded', function () {
//   // Get all "navbar-burger" elements
//   var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(function ($el) {
//       $el.addEventListener('click', function () {
//         // Get the target from the "data-target" attribute
//         var target = $el.dataset.target
//         var $target = document.getElementById(target)
//         // Toggle the class on both the "navbar-burger" and the "navbar-menu"
//         $el.classList.toggle('is-active')
//         $target.classList.toggle('is-active')
//       })
//     })
//   }
// })
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #e0e0e0;
}
</style>
