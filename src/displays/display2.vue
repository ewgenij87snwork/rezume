<template lang="pug">
	div.container
		h1
			| Old practice in Landing pages
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

body, html 
  margin: 0
  padding: 0
h1
  +r(500)
    font-size: 1.2rem
    padding-top: 50px
    margin-bottom: 30px
.works
  display: grid
  grid-template-columns:  repeat(2,1fr)
  grid-gap: 20px
  padding: 0 250px 50px 250px
  +r(500)
    padding: 10px
    grid-template-columns: repeat(1,1fr)
    
</style>
