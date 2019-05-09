<template>
  <div id="app">
    <div class="out">
      <div class="wrapper">
        <display1></display1>
        <!--         
        <display2></display2>
        <display3></display3>
        <display4></display4>
        <footer></footer> -->
      </div>
    </div>
  </div>
</template>

<script>
import display1 from "./displays/display1.vue";
/*
  import display2 from './displays/display2.vue'
  import display3 from './displays/display3.vue'
  import display4 from './displays/display4.vue'
  import footer from './displays/footer.vue'
  */
export default {
  components: {
    display1
    // display2,
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
