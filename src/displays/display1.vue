<template lang="pug">
	div.container
		.header__wrap
			h1
				| Portfolio-resume
				br
				span
					| Yevhenii Sorokin
				br
				br
				a(href="https://github.com/ewgenij87snwork/rezume" target="_blank")
					| Link to GitHub
				br
				a(href="https://ewgenij87snwork.herokuapp.com/" target="_blank")
					| Link to Heroku
				br
				a(href="https://www.facebook.com/100002256371507" target="_blank")
					| Link to Facebook
			.rightSide
				img(src="@/assets/155_bg_450px_419px.jpg" alt="Сорокин Е.Н.")
			particles.particles
		.sides
			.leftSide
				.aboutMe
					p
						| I am 31 years old. Looking for an opportunity to work and study in the position of html-builder (Junior Front-End Developer). I have knowledge of html, css; basic presentation and attempts to use js, vuejs... In general, my experience at this moment fits into this "site portfolio" with transitions to 9 "landings" and "site-conspect"(frontendworkbook), which is essentially a training ground for English, javascript, vueJS, little animated transitions, architecture and other.

					p
						| I like to work on creation of the websites since it opens a deep path - "Way of Knowledge". The last several years after work I learn to create the websites. But, unfortunately, the knowledge and practice for a long time accumulated not enough -- or threw away for long periods and forgotten a lot, or after 8-10 hours of work shift study "put away for later", or stopped before incomprehensible / impassable things for days, weeks.
						<!-- Проходил удаленные курсы по верстке (2,5 месяца - раз в неделю), проходил пару лет назад курсы по html/css от htmlacademy (31 курс, 541 задание, общий прогрес - 41%). Учился по видео Юрия Артюха (2 сайта - верстка, 1 сайт перевод на Vue Cli). Учился по бесплатным интенсивам WebCademy. Делал сайт по уроках FrontCoder.  -->
						<!-- то долбаное "дизайнерство" со своим теребоньканьем тютеличек сжыгало время похлеще танков -->

					br
					p
						| P.s. I'm sorry about the errors on this sites -- I'm learning and I'm constantly learning something new, and, of course, I'd like to make portfolio better, but unfortunately, there's no time to remake every understandable detail.


</template>

<script>
import particles from "@/components/particles";
export default {
  name: "display1",
  components: {
    particles
  }
};
</script>
<style scoped lang="sass">
.container
	max-width: 940px
	margin: 0 auto
	margin-bottom: 80px
	min-height: 100vh
	min-height: 500px
	position: relative
	padding-top: 10vh


.header__wrap
	display: flex
	justify-content: space-between
	margin-bottom: 50px
	+r(750)
		display: block
	h1
		align-self: center
		z-index: 10
		font-size: 2rem
		span
			display: inline-block
			margin-top: 30px
			border-top: 1px solid 
			border-bottom: 1px solid 
			font-weight: bold
			font-size: 3rem
			line-height: 1.44
		a
			font-size: .7em
			z-index: 10
			color: #FFF
			background: rgba(0,0,0, .3)
			padding: 5px
			text-decoration: none
			line-height: 2.4
			border-radius: 5px
			box-shadow: 5px 5px 5px 5px rgba(255,255,255,.7)

.particles
	width: 100%
	height: 100%
	position: absolute

.sides
	display: flex
.rightSide
	img
		max-width: 250px
		box-shadow: 0px 0px 8px 8px rgba(255,255,255,.7)
		+r(360)
.aboutMe
	text-align: left
	padding: 15px
</style>
