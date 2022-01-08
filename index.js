function darkTheme() {
    let body = document.querySelector('html')
    body.classList.add("dark")
    let header = document.querySelector('.navbar')
    header.classList.add("dark")
    let card = document.querySelector('#card')
    card.classList.add("dark")
    let box = document.querySelector('.box')
    box.classList.add("dark")
    let title = document.querySelector('.title')
    title.classList.add("darktitles")
    let label = document.querySelectorAll('.label')
    label[0].classList.add("darktitles")
    label[1].classList.add("darktitles")
    let links = document.querySelectorAll('#taglink')
    links[0].classList.add("taglink")
    links[1].classList.add("taglink")
    let p = document.querySelectorAll('p')
    p.forEach((p)=>{
      p.style.color = "#fff8dc"
    })
  }