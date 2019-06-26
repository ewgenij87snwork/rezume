<template>
  <div class="particles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
import "particles.js";
export default {
  name: "particles",
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 363
            }
          },
          color: {
            value: "#373737"
          },
          shape: {
            type: "edge",
            stroke: {
              width: 1,
              color: "#373737"
            },
            polygon: {
              nb_sides: 3
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.39411878257512395,
            random: true,
            anim: {
              enable: true,
              speed: 7.902240325865581,
              opacity_min: 0.7820773930753564,
              sync: true
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 207.079689136843,
              size_min: 61.71786813490223,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 609.2965831288986,
            color: "#555555",
            opacity: 0.7616207289111233,
            width: 0
          },
          move: {
            enable: true,
            speed: 3.5,
            direction: "top-left",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 3000,
              rotateY: 3000
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "remove"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 341.0724291665649,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 219.26084732136317,
              size: 8.120772123013452,
              duration: 0.9744926547616141,
              opacity: 0.6902656304561433,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  }
};
</script>

<style scoped>
#particles-js {
  /*background: black;*/
  height: 100%;
  width: 100%;
}
</style>
