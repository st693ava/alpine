document.addEventListener('alpine:init', () => {
    Alpine.directive('type', (el, { expression }, { evaluate }) => {

        el.addEventListener('click', () => {
            // dispatch a type event with the expression as the detail
            el.dispatchEvent(new CustomEvent('input', { detail: expression }, { bubbles: true }))

        })

    })
})
