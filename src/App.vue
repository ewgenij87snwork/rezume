<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- start from displays/home.vue -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="sass">
// @import '@/sass/_mixins.sass'
.fade-enter-active, .fade-leave-active 
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.fade-enter, .fade-leave-to 
  transform: translateX(100px)
  opacity: 0

.container
  max-width: 940px
  margin: 0 auto
  // +r(960)
  //   margin: 0 20px
html, body
  padding: 0
  margin: 0
.linkGit
  min-height: 10vh
  margin: 15%
  padding: 15%
  background: rgba(0,128,128, .6)

#app

  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
