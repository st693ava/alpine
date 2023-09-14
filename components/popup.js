window.popup = function() {
    return {
        show: false,
        init() {
            this.$nextTick(() => this.show = true)

            setTimeout(() => this.transitionOut(), 2000)
        },
        transitionOut() {
            this.show = false

            setTimeout(() => this.remove(this.notification), 500)
        },

        popup: {
            ['x-show']: "show"

        },
        close: {
            ['x-on:click']: "transitionOut()"
        }
    }
}
