# Custom Alpine Directives

## x-copy
### Copy the content of an element to the clipboard
```html
<span x-data x-copy>Click to copy text to the clicpboard</span>
```


## x-decimal
### Restrict the input to a decimal number
```html    
<div class="flex flex-col space-y-2" x-data >
    <input name="decimal1" type="text" x-decimal="1" placeholder="decimal with 1 place" class="w-full" />
    <input name="decimal2" type="text" x-decimal placeholder="decimal with 2 places" class="w-full" />
    <input name="decimal3" type="text" x-decimal="3" placeholder="decimal with 3 places" class="w-full" />
</div>
```


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

## x-sort & x-order & x-export
### <u>x-sort</u> sort a table column by clicking on it
### <u>x-order</u> Set the initial order of a table column
### <u>x-export</u> Export the table to an excel file
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

<button type="button" x-data x-export="table_id">Export Table</button>
```

## x-flash
### Send a event to the flash component to show a notification

```html
<div class="flex items-start justify-center space-x-2 w-full bg-gray-200" >
    <x-button x-flash.success="Success notification :)" success label="Sucess Notitification" class="my-4" />
    <x-button x-flash.info="info notification !" info label="info Notitification" class="my-4" />
    <x-button x-flash.warning="warning notification :(" warning label="warning Notitification" class="my-4" />
    <x-button x-flash.error="danger notification :(" danger label="Error Notitification" class="my-4" />
</div>
```

## x-integer
### Restrict the input to an integer number
```html
<div class="flex flex-col space-y-2" x-data >
    <input type="text" x-integer placeholder="integer" class="w-full" />
</div>
```

## x-run
### Run automatically a magic method after a delay in milliseconds

```html
<span x-data x-run.500="$flash('Run flash message automatically in 500ms', 'success') " ></span>
```


## x-lower
### Force the input to lowercase
```html
<div class="flex flex-col space-y-2" x-data >
    <input type="text" x-lower placeholder="lowercase" class="w-full" />
</div>
```

## x-prefix
### force an input to start with a prefix
```html
<input x-prefix="PT002" name="CPE" type="text" placeholder="PT002" maxlength="7" />
```

## x-typewrite
### Simulate the typewriting when the input has focus

```html
<input x-typewrite="Introduzir o nome do cliente" name="nome_cliente" type="text" placeholder="Nome do Cliente" />
```


