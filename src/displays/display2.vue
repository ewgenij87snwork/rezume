<template lang="pug">
	div
		h1
			| Небольшие лендинги
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
