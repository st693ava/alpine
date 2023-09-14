document.addEventListener('alpine:init', () => {

    Alpine.directive('run', (el, { modifiers, expression }, { effect, evaluate }) => {

        let duration = 500; // default duration 500ms


        if (modifiers.includes('100')) {
            duration = 100;
        }

        if (modifiers.includes('200')) {
            duration = 200;
        }

        if (modifiers.includes('300')) {
            duration = 300;
        }

        if (modifiers.includes('300')) {
            duration = 300;
        }

        if (modifiers.includes('1000')) {
            duration = 100;
        }

        if (modifiers.includes('5000')) {
            duration = 5000;
        }

        setTimeout(() => {
            evaluate(expression);
        }, duration);


    })
})
