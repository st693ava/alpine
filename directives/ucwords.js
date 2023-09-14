document.addEventListener('alpine:init', () => {
    Alpine.directive('ucwords', el => {

        // convert to uppercase the first letter of each word
        el.value = el.value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });



        el.addEventListener('input', () => {
            el.value = el.value.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })
        })

    })
})
