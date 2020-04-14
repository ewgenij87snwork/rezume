<template lang="pug">
	div.container
		h1
			| Some little practice in NuxtJS, JavaScript, Argon Design System and other:
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
  width: 940px
  max-width: 100%
  margin-bottom: 80px
  margin: 0 auto

.works
  max-width: 600px
  margin: 10px auto
</style>
