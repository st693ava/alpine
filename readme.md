# Custom Alpine Directives

## x-filter
### Filter an element based on a search string
```html
    <div x-data="{search:''}">
        <input type="text" placeholder="search" x-model="search">
        <span x-filter>Um</span>
        <span x-filter>Dois</span>
        <span x-filter>Tres</span>
        <span x-filter>Quatro</span>
    </div>
```
<br>

## x-sort & x-order
### <u>x-sort</u> sort a table column by clicking on it
### <u>x-order</u> Set the initial order of a table column
```html
    <table x-data>
        <thead>
            <tr>
                <th x-sort x-order>Nome</th>
                <th x-sort>Idade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Pedro</td>
                <td>35</td>
            </tr>
            <tr>
                <td>Ana</td>
                <td>34</td>
            </tr>
            <tr>
                <td>Sofia</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Dinis</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
```