<template>
	<div class="toStart__wrapper animated_button" >
    <a href="http://ewgenij87snwork.herokuapp.com/" class="toStart">
      <div class="toStart__text">Back</div>
    </a>
  </div>
</template>
<script>
	export default {
		name: 'buttonBack'
	}
</script>
<style scoped lang="sass">
.toStart
  text-decoration: none
  &__wrapper
    box-sizing: border-box
    position: fixed
    top: 25%
    left: -5px
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.75)
    border-radius: 0 10px 10px 0
    background: rgba(0,0,0,.7)
    border: 3px solid #fff
    border-left: none
    width: 65px
    height: 32px
    z-index: 1000
    padding-left: 5px
  &__text
    color: #fff
    font-size: 16px
    text-transform: uppercase
    text-decoration: none
    line-height: 26px
    margin: 0
    font-family: Avenir, Helvetica, Arial, sans-serif
.animated_button
  -moz-animation: cycle 4s linear infinite
  -webkit-animation: cycle 4s linear infinite

@-moz-keyframes cycle
  35%
    transform: rotate(0) translate(0, 0)

  40%
    transform: rotate(5deg) translate(0, -2px)  

  45%
    transform: rotate(-3deg) translate(0, -2px)
    box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.75)
  50%
    transform: rotate(5deg) translate(0, -2px)
    box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.75)
  55%
    transform: rotate(-3deg) translate(0, -2px)
    box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.75)
  60%
    transform: rotate(5deg) translate(0, -2px)
  65%
    transform: rotate(-3deg) translate(0, -2px)
  70%
    transform: rotate(0) translate(0, 0)

@-webkit-keyframes cycle
  35%
    transform: rotate(0) translate(0, 0)
  40%
    transform: rotate(5deg) translate(0, -2px)
  45%
    transform: rotate(-3deg) translate(0, -2px)
    box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.75)
  50%
    transform: rotate(5deg) translate(0, -2px)
    box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.75)
  55%
    transform: rotate(-3deg) translate(0, -2px)
    box-shadow: 0px 0px 5px 5px rgba(255,255,255,0.75)
  60%
    transform: rotate(5deg) translate(0, -2px)
  65%
    transform: rotate(-3deg) translate(0, -2px)
    
  70%
    transform: rotate(0) translate(0, 0)
</style>