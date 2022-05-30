document.querySelectorAll('.rate').forEach((element) => {
    star_rater(element)
})

// document.getElementById('').

// window.getComputedStyle

function star_rater(e) {
    var percent = Number(e.querySelector('.rate span').innerText)
    var star = document.createElement('div')
    star.classList.add('rate_star')
    star.style.backgroundImage = `url('../img/stars.svg') , linear-gradient(to right, gold ${percent}%, #00000000 ${percent}% ${100 - percent}%)`
    e.append(star)
}

function show_content(e) {
    var title = e.target.parentElement.querySelector('.title').innerText
    var auther = e.target.parentElement.querySelector('.auther').innerText
    var percent = e.target.parentElement.querySelector('.rate span').innerText
    var content = e.target.parentElement.querySelector('.display_none').innerText
    var image_url = window.getComputedStyle(e.target.parentElement.querySelector('.blog_image'), null).getPropertyValue('background-image').slice(5, -2)

    var elements = `
    <div class="back" style="height: ${document.body.scrollHeight}px;">
    <div class="exit" onclick="exit(event)"><p>&#10006</p></div>
    <div class="blog_post">
        <h1 class="title_post">${title}</h1>
        <div class="divider">
            <div class="auther">${auther}</div>
            <div class="rate"><span>${percent}</span><span>%</span></div>
        </div>
        <div class="image_post" style="background-image: url('${image_url}');"></div>
        <br>
        <br>
        <div class="content_post">${content}</div>
    </div>
    </div>
    `

    document.querySelector('.content').innerHTML += elements

    document.querySelectorAll('.rate').forEach((element) => {
        if (element.querySelector('.rate_star') == null) {
            star_rater(element)
        }
    })

    // console.log(title,'\n',auther,'\n',percent,'\n');

}

function exit(event) {
    // console.log()
    event.target.parentElement.parentElement.remove()
}