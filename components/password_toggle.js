window.password_toggle = function () {
    return {
        type: 'password',
        init() {
            this.type = 'password';

            this.$watch('type', (value) => {
                this.$refs.input.type = this.type;
            });
        },
        changeType() {
            if (this.type == 'password') {
                this.type = 'text';
            } else {
                this.type = 'password';
            }
        },

        'toggle': {
            ['@click']() {
                this.changeType();
            },
        },
        'input': {
            ['x-ref']: 'input',
        },

    }
}
