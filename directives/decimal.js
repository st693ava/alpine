document.addEventListener('alpine:init', () => {
    Alpine.directive('decimal', (el, { modifiers, expression }, { effect, evaluate }) => {

        el.setAttribute('inputmode', 'numeric');

        let decimal = 2;

        if (expression > 0) {
            decimal = expression;
        }
        else
            decimal = 2;

        el.value = el.value.replace(/[^0-9.]/g, '');

        if (el.value > 0) {

            // only allow numbers and decimal points

            // force the input to be a decimal number with the specified number of decimal places
            el.value = parseFloat(el.value).toFixed(decimal);

        }



        el.addEventListener('input', (e) => {

            // replace commas with decimal points
            el.value = el.value.replace(/,/g, '.');

            el.value = el.value.replace(/[^0-9.-]/g, '');

            // control the number of decimal places, dont allow more than decimal
            let decimalCount = el.value.split('.')[1];
            if (decimalCount && decimalCount.length > decimal) {
                el.value = parseFloat(el.value).toFixed(decimal);
            }

            //only allow one decimal point
            let decimalPoint = el.value.split('.');
            if (decimalPoint.length > 2) {
                el.value = decimalPoint[0] + '.' + decimalPoint[1];
            }


        });

        el.addEventListener('blur', (e) => {

            // if the input is empty,
            if (el.value == '') {
                return;
            }


            // force the input to be a decimal number with the specified number of decimal places
            el.value = parseFloat(el.value).toFixed(decimal);




        });



    })


})
