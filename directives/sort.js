document.addEventListener('alpine:init', () => {
    Alpine.directive('sort', (el, { modifiers, expression }) => {

        // this alpine directive is used to sort a collumn in a table when the user clicks on the header, the directive accepts a modifier to define the collumn type, the default type is string
        // if click two times the collumn will be sorted in reverse order

        // on hover set the cursor to pointer
        el.style.cursor = 'pointer';

        el.addEventListener('click', () => {

            // get the table
            const table = el.closest('table');

            // get the table body
            const tbody = table.querySelector('tbody');

            // get the collumn index
            const index = el.cellIndex;

            // get the collumn type
            const type = modifiers[0] || 'string';

            // get the collumn order
            const order = el.getAttribute('data-order') || 'asc';

            // get the collumn values
            const values = Array.from(tbody.querySelectorAll('tr')).map((row) => {
                return row.children[index].innerHTML;
            });

            // sort the collumn values
            if (type == 'number') {
                values.sort((a, b) => {
                    return order == 'asc' ? a - b : b - a;
                });
            } else {
                values.sort((a, b) => {
                    return order == 'asc' ? a.localeCompare(b) : b.localeCompare(a);
                });
            }

            // sort the table rows
            values.forEach((value) => {
                tbody.append(Array.from(tbody.querySelectorAll('tr')).find((row) => {
                    return row.children[index].innerHTML == value;
                }));
            });

            // change the collumn order
            el.setAttribute('data-order', order == 'asc' ? 'desc' : 'asc');

        });

    })

    Alpine.directive('order', (el, { modifiers, expression }) => {
        // apine directive to set the default order of a collumn in a table
        // the directive accepts a modifier to define the collumn type, the default type is string
        // the directive accepts an expression to define the default order, the default order is asc
        el.setAttribute('data-order', expression || 'asc');

        const table = el.closest('table');
        const tbody = table.querySelector('tbody');
        const index = el.cellIndex;
        const type = modifiers[0] || 'string';
        const order = expression || 'asc';

        const values = Array.from(tbody.querySelectorAll('tr')).map((row) => {
            return row.children[index].innerHTML;
        }

        );

        if (type == 'number') {
            values.sort((a, b) => {
                return order == 'asc' ? a - b : b - a;
            });
        }
        else {
            values.sort((a, b) => {
                return order == 'asc' ? a.localeCompare(b) : b.localeCompare(a);
            });
        }

        values.forEach((value) => {
            tbody.append(Array.from(tbody.querySelectorAll('tr')).find((row) => {
                return row.children[index].innerHTML == value;
            }));
        }

        );


    });
})
