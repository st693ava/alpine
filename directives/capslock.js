document.addEventListener('alpine:init', () => {
    Alpine.directive('capslock', el => {

        if (el.value !== el.value.toUpperCase())
            el.value = el.value.toUpperCase();

        el.addEventListener('input', () => {
            el.value = el.value.toUpperCase()
        })

    })
})
