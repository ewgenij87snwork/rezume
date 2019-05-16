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
<style lang="sass" scoped>
.works
	display: grid
	grid-template-columns: repeat(2,1fr)
	grid-gap: 50px
	padding: 50px
	padding-top: 0
</style>
