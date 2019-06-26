<template>
  <div>
    <div @click="landingsLink">
      <router-link :to="landings.link" class="work">
        <div class="work__image">
          <img :src="imgUrl" alt="" />
        </div>
        <div class="work__bottom">
          <div class="work__title">Перейти</div>
          <div class="work__date">к просмотру <br />{{ landings.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main";
export default {
  name: "work",
  props: {
    landings: Object
  },
  // data: function() {
  //   return {
  //   	landingsLink: Object
  //   };
  // },
  methods: {
    landingsLink() {
      eventBus.$emit("landingsLink", {
        landingsLink: this.landings.name
      });
    }
  },
  computed: {
    imgUrl() {
      return require(`@/assets/thumbs/${this.landings.src}.jpg`);
    }
  }
};
</script>

<style scoped lang="sass">
@import '@/sass/_mixins.sass'
.work
	display: block
	text-decoration: none
	word-spacing: 5px
	letter-spacing: 1px
	position: relative
	border: 1px solid black

	&__image
		overflow: hidden
		position: relative
		display: block
		padding-bottom: 70%
		img
			display: block
			width: 100%
			position: absolute
			left: 0
			right: 0
			top: 0
			bottom: 0


	&__bottom
		border: 1px solid #dbdbdb
		// border-top: none
		padding: 13px
		text-transform: uppercase
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%,-50%)
		font-weight: bold
		opacity: 0
		max-width: 20%
	&__title
		font-size: 1.5em
		margin-bottom: 5px
		color: #fff
		+r(450)
			font-size: 0.8em
		// +bebas
	&__date
		font-size: 1em
		line-height: 1.4
		color: #fff
		+r(450)
			font-size: 0.6em
	&:hover,&:active
		.work__bottom
			min-width: 60%
			max-width: 70%
			transition: .5s ease-out
			opacity: 1
			background: rgba(0,0,0, .7)
		.work__title
			box-sizing: border-box
			transition: .5s ease-out
			letter-spacing: 3px
			// +r(640)
			// 	letter-spacing: 2px

		.work__date
			transition: .5s ease-out
			letter-spacing: 2px
</style>
