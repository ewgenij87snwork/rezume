<template lang="pug">
	div.container
		.header__wrap
			h1
				| Work package
				br
				span
					| Yevhenii Sorokin
				br
			.header__link
				a(href="https://www.linkedin.com/in/ewgenij-sorokin-829b7b18a" target="_blank")
					| LinkedIn
				a(href="https://github.com/ewgenij87snwork/rezume" target="_blank")
					| GitHub
				a(href="https://www.facebook.com/100002256371507" target="_blank")
					| Facebook
			.rightSide
			
		.sides
			.leftSide
				.aboutMe
					p
						| I am 32 years old. Looking for an opportunity to work and study in the position of html-builder (Junior Front-End Developer). I have knowledge of html, css; basic presentation and attempts to use js, vuejs... In general, my experience at this moment fits into this "site portfolio" with transitions to 9 "landings" and "site-conspect"(frontendworkbook), which is essentially a training ground for English, javascript, vueJS, little animated transitions, architecture and other.

					p
						| I like to work on creation of the websites since it opens a deep path - "Way of Knowledge". The last several years after work I learn to create the websites. But, unfortunately, the knowledge and practice for a long time accumulated not enough -- or threw away for long periods and forgotten a lot, or after 8-10 hours of work shift study "put away for later", or stopped before incomprehensible / impassable things for days, weeks.
					br
					p
						| P.s. I'm sorry about the errors on this sites -- I'm learning and I'm constantly learning something new, and, of course, I'd like to make portfolio better, but unfortunately, there's no time to remake every understandable detail. Maybe while studying ReactJS...
					br
</template>

<script>
export default {
  name: "display1",
  components: {
  
  }
};
</script>

<style scoped lang="sass">
* 
	box-sizing: border-box
	margin: 0

body, html 
	margin: 0
	padding: 0
.container
	width: 940px
	max-width: 90%
	margin: 0 auto
	margin-bottom: 20px
	min-height: 100vh
	min-height: 500px
	position: relative
	


.header__wrap
	display: flex
	flex-direction: column
	margin-bottom: 30px
	+r(750)
		display: block
	h1
		align-self: center
		font-size: 2rem
		padding: 50px
		margin: 0
		span
			display: inline-block
			margin-top: 20px
			border-top: 1px solid
			border-bottom: 1px solid
			font-weight: bold
			font-size: 3rem
			line-height: 1
			padding-bottom: 5px
.header__link
	display: flex
	justify-content: space-evenly
	align-items: center
	width: 600px
	max-width: 100%
	margin: 0 auto
	+r(400)
		flex-direction: column
		a
			margin-bottom: 10px

	a
		font-size: 1.5em
		color: #FFF
		background: rgba(0,0,0, .3)
		padding: 5px
		text-decoration: none
		border-radius: 5px
		box-shadow: 3px 3px 3px rgba(255,255,255,.7)
		transition: color .2s ease-in
		border: 1px solid transparent
		&:hover
			border: 1px solid rgba(0,0,0, .3)
			box-shadow: 2px 2px 3px rgba(255,255,255,.9)
			color: rgba(0,0,0, .75)
		&:active
			transform: scale(.97)

.sides
	display: flex
.rightSide
	img
		max-width: 250px
		box-shadow: 0px 0px 8px 8px rgba(255,255,255,.7)
.aboutMe
	font-size: 120%
	line-height: 140%
	+r(360)
		text-align: center
		padding: 5px
		font-size: 100%
</style>
