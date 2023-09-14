document.addEventListener('alpine:init', () => {
    Alpine.directive('filter', (el, {expression,  modifiers}, { effect, evaluate } ) => {

        if (expression === '') {
            expression='search';
        }

        let content = el.textContent;
        let original_display = el.style.display;

        if (modifiers.includes('html')) {
            content = el.outerHTML;
        }


        effect(() => {

            const search = evaluate(expression);
            if (search) {

                if (search.length > 0) {

                    // hide the element if content not contains searched text
                    if (content.toLowerCase().includes(search.toLowerCase())) {
                        el.style.display = original_display;
                    }
                    else {
                        el.style.display = 'none';
                    }

                }
                else {
                    el.style.display = original_display;
                }
            }
            else {
                el.style.display = original_display;
            }



        });





    })
})
