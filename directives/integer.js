document.addEventListener('alpine:init', () => {
    Alpine.directive('integer', (el, { modifiers, expression }, { effect, evaluate }) => {

        el.setAttribute('inputmode', 'numeric');

        // only allow integers numbers
        el.value = el.value.replace(/[^0-9-]/g, '');


        el.addEventListener('input', (e) => {

            el.value = el.value.replace(/[^0-9-]/g, '');
        })


    })
})
