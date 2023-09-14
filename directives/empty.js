document.addEventListener('alpine:init', () => {
    Alpine.directive('empty', (el, {expression,  modifiers}, { effect, evaluate } ) => {


        // log where the updated variable is updated

        effect(() => {

            const search = evaluate('show');

            console.log('updated: ' + search);

        });




    })
})
