document.addEventListener('alpine:init', () => {
    Alpine.directive('copy', (el, {modifiers, expression}, { effect, evaluate } ) => {



        el.addEventListener('click', () => {

            let element = el;

            if (expression != '') {
                element = document.getElementById(expression);
            }


            const type = "success";
            const message = "Copied to clipboard";



            if (modifiers.includes('html')) {
                navigator.clipboard.writeText(element.outerHTML);
            }
            else {
                navigator.clipboard.writeText(element.textContent);
            }

            window.dispatchEvent(new CustomEvent('notify', {detail: {type:type, content:message}}))



        })





    })
})
