document.addEventListener('alpine:init', () => {

    Alpine.directive('tab', (el, { modifiers, expression }, { effect, evaluate }) => {

        let active = evaluate('active');
        let result;
        let active_class = '';



        el.addEventListener('click', () => {
            result = evaluate("active = '" + expression + "'")

            // if el has attribute 'active
            if (el.hasAttribute('active')) {
                active_class = el.getAttribute('active');
            }

            if (active == expression) {
                if (active_class != '')
                    el.classList.add(active_class);
                else
                    el.classList.add('active');

            } else {

                if (active_class != '')
                    el.classList.remove(active_class);
                else
                    el.classList.remove('active');

            }

        })


        effect(() => {

            let active = evaluate('active');


            if (active == expression) {
                el.classList.add('active');
                el.classList.remove('opacity-50');
            } else {
                el.classList.remove('active');
                el.classList.add('opacity-50');
            }
        }
        );

    })
})
