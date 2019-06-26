<template lang="pug">
	div.container
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
  },
  data: function() {
    return {
      nextSendLandings: this.landings
    };
  },
  methods: {}
};
</script>
<style lang="sass" scoped>
@import '@/sass/_mixins.sass'


.works
	display: grid
	grid-template-columns: repeat(2,1fr)
	grid-gap: 20px
	padding: 50px
	padding-top: 0
	+r(500)
		grid-template-columns: repeat(1,1fr)
</style>
