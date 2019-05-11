<template lang="pug">
	a.work(href="#")
		.work__image
			img(src="@/assets/logo.png" alt="name")
			.work__bottom 
				.work__look
					| Перейти к
					br
					| просмотру {{ landings.name }}
	<!-- <ul>
		<li v-for="landing in landings"><h1>{{ landing.name }}</h1>
		</li>
	</ul> -->


</template>

<script>
export default {
  name: "work",
  props: {
    landings: Object
  }
};
</script>

<style scoped lang="scss"></style>
