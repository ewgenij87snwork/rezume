<template>
  <div>
    <div @click="landingsLink">
      <router-link :to="landings.link" class="work">
        <div class="work__image">
          <img :src="imgUrl" alt />
        </div>
        <div class="work__bottom">
          <div class="work__title">{{ landings.name }}</div>
          <div class="work__go">go to view</div>
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

.work
	display: block
	text-decoration: none
	word-spacing: 5px
	letter-spacing: 1px
	position: relative
	border: 1px solid black
	+r(600)
		margin: 20px

	&__image
		overflow: hidden
		position: relative
		display: block
		padding-bottom: 70%
		img
			display: block
			width: 100%
			height: 100%
			position: absolute
			object-fit: cover 
			object-position: center top
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
		overflow: hidden
	&__title
		font-size: 1.5em
		margin-bottom: 5px
		color: #fff
		+r(450)
			font-size: 0.8em

	&__go
		font-size: .75em
		line-height: 1.4
		color: #fff
		// +r(450)
		// font-size: 0.6em
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

		.work__go
			transition: .5s ease-out
			letter-spacing: 2px
</style>
