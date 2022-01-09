const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', () => {
    let body = document.querySelector('html')
    body.classList.toggle("dark")

    let header = document.querySelector('.navbar')
    header.classList.toggle("dark")

    let card = document.querySelector('#card')
    card.classList.toggle("dark")


    let box = document.querySelector('.box')
    box.classList.toggle("dark")

    /* let content = document.querySelector("exp")
    content.classList.toggle("dark") */

    let title = document.querySelector('.title')
    title.classList.toggle("darktitles")


    /* let label = document.querySelectorAll('.label')
    label[0].classList.toggle("darktitles")
    label[1].classList.toggle("darktitles") */

    let links = document.querySelectorAll('#taglink')
    links[0].classList.toggle("taglink")
    links[1].classList.toggle("taglink")

    let p = document.querySelectorAll('p')
    p[0].classList.toggle("taglink")
    p[1].classList.toggle("taglink")
})