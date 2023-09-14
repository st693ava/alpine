document.addEventListener('alpine:init', () => {




    Alpine.directive('slug', el => {
        // If the value is not already in slug format, convert it

        let text = el.value;

        // Convert the value to slug format
        text = convert_string_to_slug(text);

        // Set the value
        el.value = text;


        el.addEventListener('input', () => {

            // Get the value
            let text = el.value;

            // Convert the value to slug format
            text = convert_string_to_slug(text);

            // Set the value
            el.value = text;


        })

        function convert_string_to_slug(text) {

            let $conversion_table = {
                'à': 'a',
                'á': 'a',
                'â': 'a',
                'ã': 'a',
                'ä': 'a',
                'å': 'a',
                'æ': 'ae',
                'ç': 'c',
                'è': 'e',
                'é': 'e',
                'ê': 'e',
                'ë': 'e',
                'ì': 'i',
                'í': 'i',
                'î': 'i',
                'ï': 'i',
                'ð': 'd',
                'ñ': 'n',
                'ò': 'o',
                'ó': 'o',
                'ô': 'o',
                'õ': 'o',
                'ö': 'o',
                'ø': 'o',
                'ù': 'u',
                'ú': 'u',
                'û': 'u',
                'ü': 'u',
                'ý': 'y',
                ' ': '-',
                '_': '-',
            }

            for (var key in $conversion_table) {
                text = text.replace(key, $conversion_table[key]);
            }

            // convert to lowercase
            text = text.toLowerCase();

            // remove all characters that are not a-z, 0-9, -
            //text = text.replace(/[^a-z0-9-]/g, '-');

            // remove duplicate -
            text = text.replace(/-+/g, '-');

            return text;

        }




    })
})
