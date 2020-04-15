<template lang="pug">
	div.container
		h1
			| One project in Vanilla JavaScript 
		.works 
			<work :landings="landings[10]"></work>

</template>

<script>
import work from "@/components/work.vue";

export default {
  name: "display-vanillajs",
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
h1
	+r(500)
		font-size: 1.2rem
		margin-top: 30px
		margin-bottom: 30px


.works
	width: 600px
	max-width: 100%
	margin: 0 auto
	margin-bottom: 50px
</style>
