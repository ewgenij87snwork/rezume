<template>
  <!-- <transition v-on:leave="leave" v-bind:css="false"> -->
  <h1></h1>
  <!-- <h1>{aaaaaaaaa</h1> -->
  <!-- </transition> -->
</template>
<script>
import { eventBus } from "@/main";
import { TimelineMax } from "gsap";
export default {
  name: "transitionTitle",
  data: function() {
    return {
      landingsLink: ""
    };
  },
  created() {
    eventBus.$on("landingsLink", data => {
      this.landingsLink = data.landingsLink;
    });
    // alert(landingsLink);
  },
  methods: {
    leave: function(el, done) {
      let tl = new TimelineMax({ onComplete: done });
      tl.fromTo(el, 1.3, { y: 0, opacity: 1 }, { y: 100, opacity: 0 });
    }
  }
};
</script>

<style>
/*.flip-enter-active {
  transition: all 1.3s ease-in-out;
}

.flip-leave-active {
  transition: all 1.3s ease-in-out;
}

.flip-enter {
  transform: translateY(-100%);
  opacity: 0;
}
.flip-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.flip-leave {
  transform: translateY(0);
  opacity: 1;
}
.flip-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.letter {
  display: inline-block;
  position: relative;
}*/
</style>
