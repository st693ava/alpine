document.addEventListener('alpine:init', () => {
    Alpine.directive('lower', el => {

      // lowercase the input value
        el.value = el.value.toLowerCase();

        el.addEventListener('input', () => {
             // lowercase the input value
                el.value = el.value.toLowerCase()

        })

        el.addEventListener('blur', () => {
            // lowercase the input value
            el.value = el.value.toLowerCase()
        })





    })
})
