<template>
  <div class="out">
    <div class="wrapper">
      <display1></display1>
      <display2 :landings="landings"></display2>
      <display3 :landings="landings"></display3>
      <display4 class="fff"></display4>

      <footer>
        <div class="footer">
          <h4>Some not fixed error in my front-end developing:</h4>
          <ul>
            <li>
              <i
                >При переходе на 1-й лендинг (зеленый, familyps) -- сайт
                открывается не сверху, а с середины</i
              >
            </li>
            <li>
              <i
                >При переходе с "1-го на 2-й лендинг" -- на 2-м (красно-черный,
                jelmon) размер изображений в слайдере и под слайдером
                увеличивается на десятки раз. И опять -- сайт открывается не
                сверху, а с footer'a</i
              >
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import display1 from "./display1.vue";
import display2 from "./display2.vue";
import display3 from "./display3.vue";
import display4 from "./display4.vue";
/*
  import footer from "./displays/footer.vue"
  */

// import transitionTitle from "@/components/transitionTitle";
export default {
  name: "home",
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
  // mixins: [transitionTitle],
  components: {
    display1,
    display2,
    display3,
    display4
    // footer
  }
};
</script>
<style scoped lang="sass">
// @import '@/sass/_mixins.sass';
.out
  background: #DCDCDC
// .wrapper>*
//   margin-top: 100px
//   &:first-child
//     margin-top: 0
.fff
  border-top: 20px solid rgba(98, 129, 202, 0.35)
.footer
  background: rgba(255,255,255,0.5)
  padding: 10%
  margin: 10%
  margin-bottom: 0px
  li
    position: relative
    text-align: left
    margin-bottom: 2em
    padding: 0.5em
    list-style: none
    background: rgba(255, 100,100, 0.1)
    &::before
      position: absolute
      content: ""
      height: 1em
      width: 1em
      background: red
      left: -2em
      top: 50%
      transform: translate(0, -50%)
      border-radius: 50%
    &::after
      position: absolute
      content: ""
      height: .4em
      width: .4em
      background: black
      left: -1.2em
      top: 51%
      transform: translate(0, -51%)
      border-radius: 50%


    &:first-of-type
      margin-top: 3em
</style>
