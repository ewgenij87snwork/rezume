<template>
  <div>
    <h1>{{ k }}</h1>
    <button :click="ga">asddf</button>
  </div>
</template>

<script>
export default {
  name: "familyps",
  props: {
    k: Array
  },
  methods: {
    ga: function() {
      console.log("sdsd");
      return;
    }
  }
};
</script>
