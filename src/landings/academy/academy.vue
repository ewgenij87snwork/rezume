<template>
  <div class="out" id="loading">
    <div class="other">
      <div class="linkGit">
        <h3>
          Чтобы увидеть сделанный лендинг, перейдите на<br /><a
            href="https://ewgenij87snwork.github.io/academy/"
          >
            <h2>GitHub Pages</h2></a
          >
        </h3>
      </div>
      <transitionTitle></transitionTitle>
      <h1>{{ landingsLink }}</h1>
      <h1>{{ landingsLink }}</h1>
      <p>Без стилей app.sass подключенных</p>
      <h3>
        Если вы первый раз перешли на эту страницу -- это будут первые слова на
        странице. Если видите сверху название сайта -- вы зашли на эту страницу
        второй раз (без перезагрузки браузера)
      </h3>
      <h5>
        Как же это можно использовать для интернет-магазинов... Ну хотя бы --
        при возврате на страницу "подождать 2 секунды и обновить все кнопки" Как
        это выделить?... Ну чтобы выделить нужно разобраться как работают "хуки"
        VueJS.
      </h5>
    </div>
    <!-- begin preloader -->
    <div class="preloader">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
    </div>
    <!-- end preloader -->

    <!-- begin header -->
    <div class="header">
      <div class="logo">
        <img src="img/logo.png" alt="" />
      </div>
      <div class="navigation">
        <ul class="nav">
          <li class="p15">
            <a href="#"
              >Program
              <div class="t1">
                <div class="in"></div>
              </div>
              <div class="t2">
                <div class="in"></div>
              </div>
            </a>
          </li>
          <li class="p15">
            <a href="#"
              >For foretag
              <div class="t1">
                <div class="in"></div>
              </div>
              <div class="t2">
                <div class="in"></div>
              </div>
            </a>
          </li>
          <li class="list-down p15">
            <a href="#"
              >Om Academy
              <div class="t1">
                <div class="in"></div>
              </div>
              <div class="t2">
                <div class="in"></div>
              </div>
            </a>
            <ul class="nav-down">
              <li class="p15">
                <a href="#"
                  >For foretag
                  <div class="t1">
                    <div class="in"></div>
                  </div>
                  <div class="t2">
                    <div class="in"></div>
                  </div>
                </a>
              </li>
              <li class="p15">
                <a href="#"
                  >For foretag
                  <div class="t1">
                    <div class="in"></div>
                  </div>
                  <div class="t2">
                    <div class="in"></div>
                  </div>
                </a>
              </li>
              <li class="p15">
                <a href="#"
                  >For foretag
                  <div class="t1">
                    <div class="in"></div>
                  </div>
                  <div class="t2">
                    <div class="in"></div>
                  </div>
                </a>
              </li>
              <li class="p15">
                <a href="#"
                  >For foretag
                  <div class="t1">
                    <div class="in"></div>
                  </div>
                  <div class="t2">
                    <div class="in"></div>
                  </div>
                </a>
              </li>
              <li class="p15">
                <a href="#"
                  >For foretag
                  <div class="t1">
                    <div class="in"></div>
                  </div>
                  <div class="t2">
                    <div class="in"></div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button>Bli IT-konsult</button>
    </div>
    <!-- end header -->

    <!-- begin photo -->
    <div class="photo">
      <div class="container">
        <img src="img/image.jpg" alt="" />
      </div>
    </div>
    <!-- end photo -->
    <!-- begin section -->
    <div class="section">
      <div class="container">
        <h1 class="section__title">Vara konsulter</h1>
        <p class="section__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          assumenda adipisci commodi cum nobis, architecto amet nostrum
          obcaecati eius! Iste ea dolore tempora illum, voluptatum dolor
          deleniti consequuntur itaque veniam doloribus quos dolores, obcaecati
          eaque laboriosam voluptatibus ex voluptas fugiat magni mollitia
          tenetur placeat expedita. Reprehenderit aut, delectus quidem rem.
        </p>
      </div>
    </div>
    <!-- end section -->
  </div>
</template>
<script>
// import linkHome from "@/components/linkHome.vue";
import transitionTitle from "@/components/transitionTitle";
// import preloader from "./js/preloader.js";
import { eventBus } from "@/main";
export default {
  name: "academy",
  data: function() {
    return {
      landingsLink: ""
    };
  },
  components: {
    // linkHome,
    transitionTitle
  },
  created() {
    eventBus.$on("landingsLink", data => {
      this.landingsLink = data.landingsLink;
    });
    // preloader
  }
};
</script>
<style scoped lang="sass">
// @import url(./sass/app.sass)
</style>
