<template>
  <div id="app">
    <router-view />
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

.container
  max-width: 940px
  margin: 0 auto
  // +r(960)
  //   margin: 0 20px
html, body
  padding: 0
  margin: 0

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
