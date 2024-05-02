const menu_mobile_button = document.querySelector('.menu-mobile-button')
const menu = document.querySelector('header .header-content .header-item .menu')
const menu_items = document.querySelectorAll('.menu-container a')
const body = document.querySelector('body')

menu_mobile_button.addEventListener('click', (e) => {
    menu.style.width = '80vw'
})

function menu_item_click(e) {
    menu.style.width = '0vw'
}

function close_menu_by_body_click(e) {
    if (e.target.className == 'menu' || e.target.className == 'menu-mobile-button') {
        return
    }

    if (menu.style.width !== '0vw') {
        menu.style.width = '0vw'
    }
}

function set_click_if_mobile(x) {
    if (x.matches) {
        menu_items.forEach(menu_item => {
            menu_item.addEventListener('click', menu_item_click)
        })

        body.addEventListener('click', close_menu_by_body_click)
    } else {
        menu_items.forEach(menu_item => {
            menu_item.removeEventListener('click', menu_item_click)
        })

        body.removeEventListener('click', close_menu_by_body_click)
    }
}

const is_mobile_media_query = window.matchMedia("screen and (max-device-width: 480px) and (orientation: portrait)")

set_click_if_mobile(is_mobile_media_query);

is_mobile_media_query.addEventListener("change", function () {
    set_click_if_mobile(is_mobile_media_query);
});