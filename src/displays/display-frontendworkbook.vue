<template lang="pug">
	div.container
		h1
			| Now I'm working and studying here:
		.works 
			<work :landings="landings[9]"></work>

</template>

<script>
import work from "@/components/work.vue";

export default {
  name: "displayFrontendworkbook",
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
.container
	max-width: 940px
	margin: 0 auto
	margin-bottom: 80px
	+r(650)
		margin: 20px


.works
	max-width: 600px
	margin: 10px auto
</style>
