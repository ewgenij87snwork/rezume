<template>
  <div class="out">
    <div class="wrapper">
      <stylereseter></stylereseter>
      <display1></display1>
      <!-- <displayvanillajs :landings="landings"></displayvanillajs> -->
      <display2 :landings="landings"></display2>
      <display3 :landings="landings"></display3>
      <display-frontendworkbook :landings="landings"></display-frontendworkbook>
      <!--<display4 class="fff"></display4>-->

      <!--<footer>
        <div class="footer">
          <h4>Some not fixed error in my front-end developing:</h4>
          <ul>
            <li>
              <i>
                При переходе на 1-й лендинг (зеленый, familyps) -- сайт
                открывается не сверху, а с середины. Jelmon тоже сразу
                открывается с футера
              </i>
            </li>
          </ul>
        </div>
      </footer>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import stylereseter from '@/components/stylereseter';
import display1 from './display1.vue';
//  import displayvanillajs from "./display-vanillajs.vue";
import display2 from './display2.vue';
import display3 from './display3.vue';
import displayFrontendworkbook from './display-frontendworkbook.vue';
/* import display4 from "./display4.vue";  */
/*
  import footer from "./displays/footer.vue"
  */

// import transitionTitle from "@/components/transitionTitle";
export default {
  name: 'home',
  components: {
    stylereseter,
    display1,
    // displayvanillajs,
    display2,
    display3,
    displayFrontendworkbook,
    /* display4 */
    // footer
  },
  data: function() {
    return {
      show: false,
      landings: [
        {
          id: 1,
          name: 'familyps',
          link: '/familyps',
          src: 'familyps',
        },
        {
          id: 2,
          name: 'jelmon',
          link: '/jelmon',
          src: 'jelmon',
        },
        {
          id: 3,
          name: 'academy',
          link: '/academy',
          src: 'academy',
        },
        {
          id: 4,
          name: 'angrybirds',
          link: '/angrybirds',
          src: 'angrybirds',
        },
        {
          id: 5,
          name: 'bino',
          link: '/bino',
          src: 'bino',
        },
        {
          id: 6,
          name: 'bizzy',
          link: '/bizzy',
          src: 'bizzy',
        },
        {
          id: 7,
          name: 'chart',
          link: '/chart',
          src: 'chart',
        },
        {
          id: 8,
          name: 'distantjob',
          link: '/distantjob',
          src: 'distantjob',
        },
        {
          id: 9,
          name: 'fashion',
          link: '/fashion',
          src: 'fashion',
        },
        {
          id: 10,
          name: 'frontendworkbook',
          link: '/frontendworkbook',
          src: 'frontendworkbook',
        },
        {
          id: 11,
          name: 'Project in Vanilla_JS',
          link: '/vanillajs',
          src: 'vanillajs',
        },
      ],
    };
  },
  // mixins: [transitionTitle],
};
</script>
<style scoped lang="sass">

.fade-enter-active, .fade-leave-active
  transition: all 1.25s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.fade-enter, .fade-leave-to
  transform: translateX(100px)
  opacity: 0

.out
  background: #DCDCDC
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
