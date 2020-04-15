<template lang="pug">
	<div class="container">
		<h1>...and "micro-sites"</h1>
		<div class="works">
			<work :landings="landings" v-for="(landings, index) in landings" v-if="index >= 2 && index < 9" :key="landings.id" class="work-wrapp"> </work>
		</div>
	</div>

</template>

<script>
import work from "@/components/work.vue";
export default {
  name: "display3",
  props: {
    landings: Array
  },
  components: {
    work
    // goOut: () => import('@/components/goOut.vue')
  }
};
</script>
<style lang="sass" scoped>
body, html 
	margin: 0
	padding: 0
h1
	+r(500)
		font-size: 1.2rem
		margin-top: 30px
		margin-bottom: 30px
.container
	width: 940px
	max-width: 100%
	margin: 0 auto
	margin-bottom: 30px
	min-height: 100vh
	min-height: 500px
	position: relative


.works
	display: grid
	grid-template-columns: repeat(3,1fr)
	grid-gap: 20px
	padding-top: 0
	
	+r(600)
		display: flex
		flex-direction: column

</style>
