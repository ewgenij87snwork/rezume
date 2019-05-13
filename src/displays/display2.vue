<template lang="pug">
	div
		h1
			| Небольшие лендинги
		.works
			<work :landings="landings[0]"></work>
			<work :landings="landings[1]"></work>

</template>

<script>
import work from "@/components/work.vue";
export default {
  name: "display2",
  props: {
    landings: Array
  },

  components: {
    work
  }
};
</script>
<style lang="sass">
.works
	background: teal
	display: grid
	grid-template-columns: repeat(6,1fr)
	grid-gap: 50px
	a.work
		display: block
		padding-bottom: 60%
		border-radius: 3px
		border: 2px solid yellow
</style>
