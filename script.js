const whiteBtn = document.getElementById('white')
const cont = document.querySelector('.container')
const openTxt = document.getElementById('open')
const openTxt1 = document.getElementById('open1')
const displayers = document.querySelector('.display')
const displayers1 = document.querySelector('.toppro')
const displayers2 = document.querySelector('.about')
const displayers3 = document.querySelector('.contact')
const nav = document.querySelector('.nav')
const darkBtn = document.getElementById('dark')

console.log(displayers)
whiteBtn.addEventListener('click', function() {
   document.body.style.backgroundColor = 'white'
   openTxt.style.color = 'black'
   openTxt1.style.color = 'black'
   displayers.style.backgroundColor = '#f5715b'
   displayers1.style.backgroundColor = '#f5715b'
   displayers2.style.backgroundColor = '#f5715b'
   displayers3.style.backgroundColor = '#f5715b'
   nav.style.backgroundColor = '#f5715b'

})

darkBtn.addEventListener('click', function() {
   document.body.style.backgroundColor = '#2a2a2a'
   openTxt.style.color = 'white'
   openTxt1.style.color = 'white'
   displayers.style.backgroundColor = 'black'
   displayers1.style.backgroundColor = 'black'
   displayers2.style.backgroundColor = 'black'
   displayers3.style.backgroundColor = 'black'
   nav.style.backgroundColor = 'black'




})

