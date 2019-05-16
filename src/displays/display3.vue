<template lang="pug">
	<div>
		<h1>Микро-сайты (from "Code in the Dark")</h1>
		<div class="works">
			<work 
			|:landings="landings" 
			|v-for="(landings, index) in landings" 
			|v-if="index >= 2" 
			|:key="landings.id"
			|> </work>
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
  }
};
</script>
<style lang="sass" scoped>
.works
	display: grid
	grid-template-columns: repeat(3,1fr)
	grid-gap: 20px
	// padding: 50px
	padding-top: 0
</style>
