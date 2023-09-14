

window.addEventListener('alpine:init', () => {


    // Directive: x-export
    Alpine.directive('export', (el, { expression }) => {




        // check if the script tag is already added
        let scriptTag = document.querySelector('script[src="https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js"]');

        // if not, add it

        if (!scriptTag) {
            let html_headers = document.getElementsByTagName('head');
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js';
            html_headers[0].appendChild(script);
        }


        el.addEventListener('click', () => {

            // get the table
            let table = document.getElementById(expression);

            // get the table headers
            let headers = table.querySelectorAll('th');
            let headersArray = [];
            headers.forEach(header => {
                headersArray.push(header.innerText);
            });

            // get the table rows
            let rows = table.querySelectorAll('tbody tr');
            let rowsArray = [];
            rows.forEach(row => {
                let rowArray = [];
                row.querySelectorAll('td').forEach(cell => {
                    rowArray.push(cell.innerText);
                });
                rowsArray.push(rowArray);
            });

            // if table has footer
            let footer = table.querySelector('tfoot');

            // get the table footer
            let footerArray = [];
            if (footer) {
                footer.querySelectorAll('td').forEach(cell => {
                    footerArray.push(cell.innerText);
                });
            }

            // create the excel file
            let wb = XLSX.utils.book_new();
            let ws = XLSX.utils.aoa_to_sheet([headersArray, ...rowsArray, footerArray]);
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, "export.xlsx");

        });

    });

})
