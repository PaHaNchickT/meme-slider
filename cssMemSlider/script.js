import memes from './memes.js';

/////////adding html structure//////////

const body = document.querySelector('body')

body.insertAdjacentHTML('beforeend', `<header>`)
body.insertAdjacentHTML('beforeend', `<div class="main">`)
const main = body.querySelector('.main')
main.insertAdjacentHTML('beforeend', `<div class="container">
<div class="images">
    <div class="img img1"></div>
    <div class="img img2"></div>
    <div class="img img3"></div>
    <div class="img img4"></div>
</div>
<div class="hood">
    <p>Чё смотришь? Мой попу</p>
    <div class="control">
        <div class="btn btn1 active"></div>
        <div class="btn btn2"></div>
        <div class="btn btn3"></div>
        <div class="btn btn4"></div>
    </div>
</div>
</div>`)
body.insertAdjacentHTML('beforeend', `<footer>
<a href="">GitHub</a>
<p>Meme Slider © 2022</p>
<a href="">RolingScopes</a>
</footer>`)

//////////core functions//////////

let page = '1'

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const control = document.querySelector('.control')
const text = document.querySelector('p')

document.querySelectorAll('.img').forEach((e, i) => {
    e.style.backgroundImage = `url('./assets/0${i+1}.jpg')`
})

function activePage(num) {
    document.querySelectorAll('.btn').forEach((e, i) => {
        e.classList.remove('active')
        if (i+1 === +num) {
            e.classList.add('active')
        }
        // console.log(e.className.slice(9, 15))
        // console.log(e, num)
    })
}

function slides(num) {
    switch(num) {
        case '1':
            img1.style.left = '0'
            img2.style.left = '500px'
            img3.style.left = '1000px'
            img4.style.left = '1500px'
            activePage('1')
            break
        case '2':
            img1.style.left = '-500px'
            img2.style.left = '0'
            img3.style.left = '500px'
            img4.style.left = '1000px'
            activePage('2')
            break
        case '3':
            img1.style.left = '-1000px'
            img2.style.left = '-500px'
            img3.style.left = '0'
            img4.style.left = '500px'
            activePage('3')
            break
        case '4':
            img1.style.left = '-1500px'
            img2.style.left = '-100px'
            img3.style.left = '-500px'
            img4.style.left = '0'
            activePage('4')
            break
    }
}

control.addEventListener('click', function(event) {
    if (event.target.className.slice(0, 3) === 'btn') {
        slides(event.target.className.slice(7, 8))
    }
})