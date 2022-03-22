const whiteBtn = document.getElementById('white')
const cont = document.querySelector('.container')
const openTxt = document.getElementById('open')
const openTxt1 = document.getElementById('open1')
console.log(cont)
whiteBtn.addEventListener('click', function() {
   document.body.style.backgroundColor = 'white'
   openTxt.style.color = 'black'
   openTxt1.style.color = 'black'




})