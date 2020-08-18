const body = document.querySelector('body')
const burger = document.querySelector('.menu_link')
const menu = document.querySelector('.menu')
const menuBg = document.querySelector('nav')
const mainBtns = document.querySelectorAll('li.menu-item > .btn')
const btns = document.querySelectorAll('div.menu-section__item > .btn')
const menuSections = document.querySelectorAll('li.menu-item > div.menu-section')
const lists = document.querySelectorAll('div.menu-section__item > ul.menu-list')

burger.onclick = () => {
    menuBg.classList.toggle('menu-bg_active')
    body.classList.toggle('lock')
    mainBtns.forEach((i, n) => {
        i.classList.remove('btn_active')
        menuSections[n].classList.remove('menu__active')
    })
    btns.forEach((i, n) => {
        i.classList.remove('btn_active')
        lists[n].classList.remove('menu-list_active')
    })
    burger.classList.toggle('menu_link-active')
    menu.classList.toggle('menu_open')
}

mainBtns.forEach((i, n) => {
    i.onclick = (e) => {
        mainBtns.forEach((k, n) => {
            k.classList.remove('btn_active')
            menuSections[n].classList.remove('menu__active')
        })
        btns.forEach((k, n) => {
            k.classList.remove('btn_active')
            lists[n].classList.remove('menu-list_active')
        })
        i.classList.add('btn_active')
        menuSections[n].classList.add('menu__active')
    }
})

btns.forEach((i, n) => {
    i.onclick = (e) => {
        btns.forEach((k, n) => {
            k.classList.remove('btn_active')
            lists[n].classList.remove('menu-list_active')
        })
        i.classList.add('btn_active')
        lists[n].classList.add('menu-list_active')
        const rect = e.target.getBoundingClientRect().y
        window.scroll(0, rect)
    }
})
