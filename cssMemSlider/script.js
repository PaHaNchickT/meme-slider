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

let page = 1

