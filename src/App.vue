<template>
  <div id="app">
    <div class="out">
      <div class="wrapper">
        <display1></display1>
        <display2 :landings="landings"></display2>
        <display3 :landings="landings"></display3>
        <display4 class="fff"></display4>
        <!--         
        <footer></footer> -->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import display1 from "./displays/display1.vue";
import display2 from "./displays/display2.vue";
import display3 from "./displays/display3.vue";
import display4 from "./displays/display4.vue";
/*
  import footer from "./displays/footer.vue"
  */
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
  },
  components: {
    display1,
    display2,
    display3,
    display4
    // footer
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
