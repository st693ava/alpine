document.addEventListener('alpine:init', () => {
    Alpine.directive('typewrite', (el, { modifiers, expression }) => {
        let message = expression;

        let original_placeholder = el.placeholder;

        if (!el.value) {

            el.addEventListener('focus', function () {
                // repeat the effect when the element is focused
                let i = 0;
                let timer = setInterval(function () {
                    el.placeholder = message.substring(0, i);

                    i++;

                    if (i > message.length) {
                        // wait 1 second before clearing the placeholder
                        let clear =setTimeout(function () {
                            el.placeholder = '';
                            i = 0;
                            clearInterval( clear);
                        }, 1000);
                    }

                    // stop the effect when the element loses focus
                    //check if the element is focused
                    if (!el.matches(':focus')) {
                        el.placeholder = original_placeholder;
                        i = 0;
                        clearInterval(timer);
                    }

                }, 100);



            });

            el.addEventListener('blur', function () {
                el.placeholder = original_placeholder;

            });


        }





    })
})
