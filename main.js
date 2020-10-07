
const menuItens = document.querySelectorAll('a[href^="#"')

menuItens.forEach(itens => {
    itens.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target)

    scrollToPosition(to)
}

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}
