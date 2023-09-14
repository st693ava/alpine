document.addEventListener('alpine:init', () => {
    Alpine.directive('prefix', (el, { modifiers, expression }) => {
        let prefix = expression;

        el.addEventListener('input', (e) => {

            if (e.target.value.length > 0) {

                // check it the input value starts with the prefix
                if (!e.target.value.startsWith(prefix)) {

                    // get the last typed character
                    let lastChar = e.target.value[e.target.value.length - 1];

                    let length = e.target.value.length;

                    let expected = prefix[length - 1];

                    if (lastChar != expected) {

                        // check case insensitivity
                        if (lastChar.toLowerCase() == expected.toLowerCase()) {
                            // replace the last character with the expected one
                            e.target.value = e.target.value.slice(0, -1);
                            e.target.value += expected;
                        }
                        else {
                            e.target.value = e.target.value.slice(0, -1);

                        }

                    }

                }


            }
        });

    })
})
