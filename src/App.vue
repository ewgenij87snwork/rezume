<template>
  <div id="app">
    <div class="out">
      <div class="wrapper">
        <!-- <display1></display1> -->
        <display2 :landings="landings"></display2>
        <!--         
        <display3></display3>
        <display4></display4>
        <footer></footer> -->
      </div>
    </div>
  </div>
</template>

<script>
// import display1 from "./displays/display1.vue";
import display2 from "./displays/display2.vue";
/*
  import display3 from "./displays/display3.vue"
  import display4 from "./displays/display4.vue"
  import footer from "./displays/footer.vue"
  */
export default {
  data: function() {
    return {
      landings: [
        {
          id: 1,
          name: "familyps",
          link: "landings/familyps",
          src: "familyps.gif"
        },
        { id: 2, name: "jelmon", link: "landings/jelmon", src: "jelmon.gif" },
        {
          id: 3,
          name: "academy",
          link: "landings/academy",
          src: "academy.gif"
        },
        {
          id: 4,
          name: "angrybirds",
          link: "landings/angrybirds",
          src: "angrybirds.gif"
        },
        {
          id: 5,
          name: "bino",
          link: "landings/bino",
          src: "bino.gif"
        },
        {
          id: 6,
          name: "bizzy",
          link: "landings/bizzy",
          src: "bizzy.gif"
        },
        {
          id: 7,
          name: "chart",
          link: "landings/chart",
          src: "chart.gif"
        },
        {
          id: 8,
          name: "distantjob",
          link: "landings/distantjob",
          src: "distantjob.gif"
        },
        {
          id: 9,
          name: "fashion",
          link: "landings/fashion",
          src: "fashion.gif"
        }
      ]
    };
  },
  components: {
    // display1,
    display2
    // display3,
    // display4,
    // footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
