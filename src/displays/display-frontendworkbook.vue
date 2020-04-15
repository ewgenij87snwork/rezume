<template lang="pug">
	div.container
		h1
			| ...and in NuxtJS, JavaScript, Argon Design System, HighlightJS and other:
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
body, html 
  margin: 0
  padding: 0
  background: black

h1
  +r(500)
    font-size: 1.2rem
    margin-top: 50px
    margin-bottom: 30px
.container
  width: 940px
  max-width: 90%
  margin: 0 auto
  padding-bottom: 10px

.works
  width: 600px
  max-width: 100%
  margin: 0 auto
  margin-bottom: 20px
</style>
