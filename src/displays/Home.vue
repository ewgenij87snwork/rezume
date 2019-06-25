<template>
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
@import '@/../../sass/_mixins.sass'
.out
  background: #DCDCDC 
.wrapper>*
  margin-top: 100px
  &:first-child
    margin-top: 0
.fff
  border-top: 20px solid rgba(98, 129, 202, 0.35)
</style>
