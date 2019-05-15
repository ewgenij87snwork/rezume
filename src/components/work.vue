<template>
  <a href="#" class="work">
    <div class="work__image">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="work__bottom">
      <div class="work__title">Перейти</div>
      <div class="work__date">к просмотру <br />{{ landings.name }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "work",
  props: {
    landings: Object
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
	&__wrap
		display: grid
		grid-template-columns: repeat(4,1fr)
		grid-gap: 17px
		// +r(620)
		// 	grid-template-columns: repeat(2,1fr)
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
	&__title
		font-size: 1.5em
		margin-bottom: 5px
		color: #fff
		// +bebas
	&__date
		font-size: 1em
		line-height: 1.4
		color: #fff
	&:hover,&:active
		.work__image
			background: rgba(0,0,0, .5)
		.work__bottom
			transition: .5s ease-out
			opacity: 1
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
