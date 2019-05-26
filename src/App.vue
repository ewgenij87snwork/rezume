<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      landings: [
        {
          id: 1,
          name: "familyps",
          link: "/familyps",
          src: "familyps"
        },
        {
          id: 2,
          name: "jelmon",
          link: "/jelmon",
          src: "jelmon"
        },
        {
          id: 3,
          name: "academy",
          link: "/academy",
          src: "academy"
        },
        {
          id: 4,
          name: "angrybirds",
          link: "/angrybirds",
          src: "angrybirds"
        },
        {
          id: 5,
          name: "bino",
          link: "/bino",
          src: "bino"
        },
        {
          id: 6,
          name: "bizzy",
          link: "/bizzy",
          src: "bizzy"
        },
        {
          id: 7,
          name: "chart",
          link: "/chart",
          src: "chart"
        },
        {
          id: 8,
          name: "distantjob",
          link: "/distantjob",
          src: "distantjob"
        },
        {
          id: 9,
          name: "fashion",
          link: "/fashion",
          src: "fashion"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import '@/sass/_mixins.sass'

.container
  max-width: 940px
  margin: 0 auto
  +r(960)
    margin: 0 20px
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
