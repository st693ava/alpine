window.search = function(options) {
    return {
        search: '',
        data: options,
        empty: false,
        filtered: null,
        init() {

            this.filtered = this.data;

            this.$watch('search', ((value) => {

                this.filtered = Object.keys(this.data)
                    .filter((key) => this.data[key].toLowerCase().includes(value.toLowerCase()))
                    .reduce((filtered, key) => {
                        filtered[key] = this.data[key]
                        return filtered
                    }, {})

                this.empty = Object.keys(this.filtered).length === 0;
            }))


        },
    }
}

