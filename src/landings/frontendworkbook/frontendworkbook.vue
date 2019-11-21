<template
  ><div class="out">
    <buttonBack /></div
></template>
<script>
export default {
  name: "frontendworkbook",
  data: function() {
    return {};
  },
  components: {
    buttonBack: () => import("@/components/buttonBack")
  },
  methods: {},
  mounted() {
    window.open("https://frontendworkbook.herokuapp.com", "_blank");
  }
};
</script>
<style></style>
