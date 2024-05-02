const service_items_cntr = document.querySelectorAll('.service-items-cntr');

service_items_cntr.forEach(items_container => {
    items_container.addEventListener('transitionend', (e) => {
        e.preventDefault();
        if (items_container.computedStyleMap().get('height').value !== 0) {
            console.log(items_container.computedStyleMap().get('height'));
            items_container.style.height = "auto"
        }
    })
})

const service_section_button_list = document.querySelectorAll('.service-section-title-button-cntr');

service_section_button_list.forEach(container => {
    container.addEventListener('click', (e) => {
        e.preventDefault();

        // if (e.target.className == 'service-section-button') {
        // console.log(e.target.className, container.nextElementSibling)
        const items_container = container.nextElementSibling

        if (items_container.style.height === "0px") {
            items_container.style.height = `${items_container.scrollHeight}px`
        } else {
            items_container.style.height = `${items_container.scrollHeight}px`;
            window.getComputedStyle(items_container, null).getPropertyValue("height");
            items_container.style.height = "0";
        }
        // }
    })
})