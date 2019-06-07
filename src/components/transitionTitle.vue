<template>
  <!-- <transition v-on:leave="leave" v-bind:css="false"> -->
  <h1>{{ landings.name }}</h1>
  <!-- </transition> -->
</template>
<script>
import { TimelineMax } from "gsap";
export default {
  name: "transitionTitle",
  props: {
    landings: Object
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
