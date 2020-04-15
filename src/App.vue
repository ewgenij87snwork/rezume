<template>
  <div id="app">
    <transition name="shljapa" mode="out-in">
      <router-view />
    </transition>
    <!-- start from displays/home.vue -->
    <p class="mylo-title">Please contact me:</p>
    <a href="mailto:ewgenij87snwork@gmail.com" class="mylo">ewgenij87snwork@gmail.com</a>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
body, html 
  margin: 0
  padding: 0
.mylo
  display: inline-block
  margin-top: 20px
  margin-bottom: 20px
  color: #fff
  font-size: 120%
.mylo-title
  margin: 0
  margin-top: 20px
  color: #fff
.shljapa-enter, .shljapa-leave-to
  transform: scale(0.2, 0.2) translateX(-500px) rotate(10deg)
  opacity: 0

.shljapa-enter-to, .shljapa-leave
  opacity: .8
  transform: scale(1, 1) translateX(0px)
.shljapa-enter-active, .shljapa-leave-active
  transition: all 0.8s cubic-bezier(.42, 0, .58, 1)
  transform-origin: center center

.container
  max-width: 940px
  margin: 0 auto
  // +r(960)
  //   margin: 0 20px


#app

  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background: black


#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
