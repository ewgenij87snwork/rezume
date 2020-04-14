<template lang="pug">
	<div class="container">
		<h1>...and "micro-sites"</h1>
		<div class="works">
			<work :landings="landings" v-for="(landings, index) in landings" v-if="index >= 2 && index < 9" :key="landings.id"> </work>
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
.container
	max-width: 940px
	margin: 0 auto
	margin-bottom: 80px
	min-height: 100vh
	min-height: 500px
	position: relative


.works
	display: grid
	grid-template-columns: repeat(3,1fr)
	grid-gap: 20px
	// padding: 50px
	padding-top: 0
	margin: 0 20px
	+r(800)
	grid-template-columns: repeat(2,1fr)
</style>
