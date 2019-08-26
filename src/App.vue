<template>
  <div id="app">
    <transition name="shljapa" mode="out-in">
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
html, body
  padding: 0
  margin: 0
  background: black 
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
