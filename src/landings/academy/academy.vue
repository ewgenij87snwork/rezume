<template>
  <div>
    <transitionTitle></transitionTitle>
    <h1>{{ landingsLink }}</h1>
    <h1>{{ landingsLink }}</h1>
  </div>
</template>
<script>
// import linkHome from "@/components/linkHome.vue";
import transitionTitle from "@/components/transitionTitle";
import { eventBus } from "@/main";
export default {
  name: "academy",
  data: function() {
    return {
      landingsLink: ""
    };
  },
  components: {
    // linkHome,
    transitionTitle
  },
  created() {
    eventBus.$on("landingsLink", data => {
      this.landingsLink = data.landingsLink;
    });
  }
};
</script>
<style></style>
