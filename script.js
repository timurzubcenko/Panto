const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body')

function clickBurger() {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
}

const tabClick = document.querySelectorAll('.tab')
const tabsItems = document.querySelectorAll('.cards')

tabClick.forEach(function (item) {
    item.addEventListener('click', function () {
        let curentBtn = item
        let tabId = curentBtn.getAttribute('data-tab')
        let curentTab = document.querySelector(tabId)



        tabClick.forEach(function (item) {
            item.classList.remove('active')
        })

        tabsItems.forEach(function (item) {
            item.classList.remove('active')
        })

        curentBtn.classList.add('active')
        curentTab.classList.add('active')
    })
})


const btnSlider = document.querySelector('#btn')
const btnSlider2 = document.querySelector('#btn_2')

const itemSlide = document.querySelector('.item')

itemSlide.style.width = 'auto'

function clickBtn() {

}

