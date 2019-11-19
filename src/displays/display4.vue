<template>
  <div class="container">
    <div class="listWrap">
      <div class="already side">
        <h4>Такое уже делал</h4>
        <ul>
          <li><span></span>подключение preloader</li>
          <li>
            <span></span>эффект начального появления всего материала на сайте
          </li>
          <li><span></span>эффекты при наведении</li>
          <li><span></span>flex (загуглить как расписать)</li>
          <li><span></span>подключение шрифтов</li>
          <li><span></span>выпадающее меню</li>
          <li><span></span>адаптация под мобильные дисплеи</li>
          <li><span></span>popup (всплывающие окна)</li>
          <li>
            <span></span>небольшая настройка javascript (--это переписать как
            правильно)
          </li>
          <li><span></span>слайдер</li>
          <li>
            <span></span>
            размещение сайта на GithubPages, с которого сайт потом размещается
            на бесплатном домене
          </li>
          <li>
            <span></span>
            размещение сайта на Heroku
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="nochNicht side">
        <h4>С таким хочу разбираться</h4>
        <ul>
          <li><span></span>VueJs, а через него и JavaScript осваивать</li>
          <li><span></span>Эффекты прокрутки страницы (scrolling)</li>
          <li><span></span>БЭМ-нейминг</li>
          <li><span></span>Git-репозитории (выход с разных аккаунтв)</li>
          <li><span></span>Миксины (собирательство )</li>
          <li><span></span>Canvas</li>
          <li><span></span>Фон в движении</li>
          <li><span></span>Все доступные свойства transition (>animation)</li>
          <li><span></span>Загрузка файлов на сайт</li>
          <li>
            <span></span>Взаимодействие с 1 000 000 базой продуктов,
            исторических статей
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="sass">

ul
	padding: 0
	li
		position: relative
		line-height: 1.44
		background: #fff
		text-align: left
		list-style: none
		margin: 15px 0
		padding: 15px
		padding-right: 40px
		span
			position: absolute
			right: 5px
			background: url('./../assets/nochNicht.svg') no-repeat
			top: 50%
			right: -5px
			transform: translate(-50%, -50%)
			width: 20px
			height: 20px
		&:before
			content: ''
			position: absolute
			right: 0
			top: 0
			height: 100%
			width: 40px
			background: rgba(98, 129, 202, 0.35)
		&:after
			content: ''
			position: absolute
			height: 1px
			width: 100%
			left: 0
			bottom: 0
			background: rgba(98, 129, 202, 0.55)
			z-index: 999
.listWrap
	display: flex
	-webkit-justify-content: space-between
	justify-content: space-between
	+r(600)
		display: block
		.side
			+r(600)
				width: 95%
				margin: 0 auto
		
.line
	background: #161616
	width: 5px
	height: auto
.already
	width: 47%

	ul
		li
			padding-right: 0
			padding-left: 55px
			span
				position: absolute
				background: url('./../assets/already.svg') no-repeat
				top: 50%
				left: 25px
				transform: translate(-50%, -50%)
				width: 20px
				height: 20px
			&:before
				content: ''
				position: absolute
				left: 0
				top: 0
				height: 100%
				width: 40px
				background: rgba(98, 129, 202, 0.35)
			&:after
				content: ''
				position: absolute
				height: 1px
				width: 100%
				left: 0
				bottom: 0
				background: rgba(98, 129, 202, 0.55)
				z-index: 999
.nochNicht
	width: 47%
</style>
