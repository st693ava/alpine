document.addEventListener('alpine:init', () => {
    Alpine.directive('flash', (el, {modifiers, expression}, { effect, evaluate } ) => {

        let type;
        let message;

        if (modifiers.includes('success')) {
            type = 'success';
        }

        if (modifiers.includes('error')) {
            type = 'error';
        }

        if (modifiers.includes('warning')) {
            type = 'warning';
        }

        if (modifiers.includes('info')) {
            type = 'info';
        }

        message = expression;


        el.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('notify', {detail: {type:type, content:message}}))
        })

    })




    Alpine.magic('flash', el => (...params) => {

        if (params.length === 0) {
            return;
        }

        let message = params[0] || '';
        let type = params[1] || 'success';


        window.dispatchEvent(new CustomEvent('notify', {detail: {type:type, content:message}}))

    })
})
