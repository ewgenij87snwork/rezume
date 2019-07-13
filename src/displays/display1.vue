<template lang="pug">
	div.container
		.header__wrap
			h1
				| Портфолио-резюме
				br
				span
					| Сорокин Евгений Николаевич
				br
				br
				a(href="https://github.com/ewgenij87snwork/rezume" target="_blank")
					| Ссылка на GitHub
				br
				a(href="https://ewgenij87snwork.herokuapp.com/" target="_blank")
					| Ссылка на Heroku
				br
				a(href="https://www.facebook.com/100002256371507" target="_blank")
					| Ссылка на Facebook
			.rightSide
				img(src="@/assets/155_bg_450px_419px.jpg" alt="Сорокин Е.Н.")
			particles.particles
		.sides
			.leftSide
				.aboutMe
					p
						| Мне 31 год. Ищу возможность работать и развиваться на должности html-верстальщика, Junior Front-End, в последующем развиваться в сторону VueJS. Пока в базисе знания html, css, поверхностное представление и попытки использовать js, vuejs. Git -- использовал только 3 команды: add, commit и push. 
					p
						| Ищу учителя, наставника, товарища. Для меня мир frontend-разработки как океан, и себя я представляю как неумеющего плавать, которого закинули в воду чтобы он пока догреб до берега научился плавать, но в своей "грёбле" я не вижу берегов и даже не представляю в правильную ли сторону "учусь"...
					p
						| Мне нравится работать над созданием сайтов, т.к. это открывает бескрайнюю тропу -- "Путь Знания". Последние несколько лет, параллельно работе учусь создавать сайты. Проходил удаленные курсы по верстке (2,5 месяца - раз в неделю), проходил пару лет назад курсы по html/css от htmlacademy (31 курс, 541 задание, общий прогрес - 41%). Учился по видео Юрия Артюха (2 сайта - верстка, 1 сайт перевод на Vue Cli). Учился по бесплатным интенсивам WebCademy. Делал сайт по уроках FrontCoder. К сожалению, знаний и практики за длительный срок скопилось не достаточно -- то забрасывал на длительные периоды и многое забывал, то после 8-10 часовой рабочей смены учеба "откладывалась на потом", то днями зацыкливался на непонятных/непроходимых вещах. 
					p
						| Т.к. неструктурированные знания быстро забываются -- имею много пробелов в Html/Css/Front-End/верстке. Считаю нужным выполнить минимум 2 проекта вслед за старшим прежде чем приступать к живому проекту.
					p
						| Стараюсь с каждой работой наращивать свои знания, как цепочку - в каждом коде приходится находить что-то новое, что потом использую в следующем коде. Будь то просто синтаксис или относительно сложная наработка. 
					p
						| От себя: буду стараться быть порядочным, настойчивым, деликатным. По максимуму преданным своему обучению в области создания и развития сайтов. В частности, технологий, плагиновых наработок... "Разработчик сайтов"



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
		a
			font-size: .7em
			z-index: 10

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
		// border-radius: 2px
		// border: 3px dashed green
</style>
