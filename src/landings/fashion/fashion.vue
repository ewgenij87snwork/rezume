<template>
  <div id="incoming">
    <div class="out">
      <div class="wrap">
        <!-- begin header -->
        <header class="header">
          <img src="img/logo.png" class="header__logo" alt="Fashion Store" />
        </header>

        <div class="header__bottom">
          <div class="container">
            <nav>
              <input type="checkbox" id="nav" class="hidden" />
              <label for="nav" class="nav-btn">
                <i></i>
                <i></i>
                <i></i>
              </label>
              <div class="header__menu">
                <ul>
                  <li><a href="#">Home </a></li>
                  <li><a href="#">Clothing </a></li>
                  <li><a href="#">Shoes & accessories </a></li>
                  <li><a href="#">Trends </a></li>
                  <li><a href="#">Highlights </a></li>
                  <li><a href="#">Outfits </a></li>
                </ul>
              </div>
            </nav>
            <div class="header__icons">
              <a href="#" class="header__btn"
                ><div
                  class="icon"
                  style="background: url(require('./icon/search.svg'))"
                ></div
              ></a>
              <a href="#" class="cart header__btn">
                <div class="cart-number">4</div>
                <div
                  class="icon"
                  style="background: url(require('./icon/cart.svg'))"
                ></div
              ></a>
              <a href="#" class="header__btn"
                ><div
                  class="icon"
                  style="background: url(require('./icon/dots.svg'))"
                ></div
              ></a>
            </div>
          </div>
        </div>

        <!-- end header -->

        <!-- begin hero -->
        <section
          class="hero"
          style="background: url('img/bg.jpg') 50% 0% no-repeat; background-size: cover;"
        >
          <div class="container">
            <h2 class="hero__suptitle">Welcome to</h2>
            <h1 class="hero__title"><span>Fashion</span>store</h1>
            <div class="hero__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum et mi vulputate gen vehicula maximus sagittis rhoncus
                tortor. Class
              </p>
            </div>
            <div class="btn">
              <button>Great Sale</button>
            </div>
          </div>
        </section>
        <!-- end hero -->
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
/*	.icon-cart {
  width: 1em;
  height: 1em;
  fill: initial;
}
.icon-dots {
  width: 1em;
  height: 1em;
  fill: initial;
}
.icon-search {
  width: 1em;
  height: 1em;
  fill: initial;
}*/
</style>
