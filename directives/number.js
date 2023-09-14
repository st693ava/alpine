document.addEventListener('alpine:init', () => {
    Alpine.directive('number', (el, { modifiers, expression }, { effect, evaluate }) => {

        el.setAttribute('inputmode', 'numeric');


        el.addEventListener('input', (e) => {

            if (modifiers.includes('integer')) {
                // only allow integers numbers
                el.value = el.value.replace(/[^0-9]/g, '');

            }

            if (modifiers.includes('decimal')) {

                let separator='.';

                if (modifiers.includes('comma')) {
                    separator = ',';
                }

                if (separator == ',') {
                    // replace dot with comma
                    el.value = el.value.replace(/\./g, ',');

                    // only allow decimal numbers with comma
                    el.value = el.value.replace(/[^0-9,]/g, '').replace(/(\,,*)\,/g, '$1');

                    // only allow one comma
                    el.value = el.value.replace(/,/g, function (match, i, original) {
                        return i === original.indexOf(match) ? match : '';
                    }
                    );




                }
                else {
                    // replace comma with dot
                    el.value = el.value.replace(/,/g, '.');

                    // only allow decimal numbers with dot
                    el.value = el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

                    // only allow one dot
                    el.value = el.value.replace(/\./g, function (match, i, original) {
                        return i === original.indexOf(match) ? match : '';
                    }
                    );
                }


             }


            if (!modifiers.includes('decimal') && !modifiers.includes('integer')) {

                // replace comma with dot
                el.value = el.value.replace(/,/g, '.');


                el.value = el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
            }


        })


    })
})
