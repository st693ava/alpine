window.modal = function(show, open, closeable, name) {
    return {
        show: show,
        open: open,
        closeable: closeable,
        name: name,
        autofocus() {
            let autofocus = this.$el.querySelector('[autofocus]');
            if (autofocus) {
                autofocus.focus();
                return;
            }
        },

        init() {

            this.$watch('show', value => {
                if (value) {
                    document.body.classList.add('overflow-y-hidden');
                    setTimeout(() => this.autofocus(), 100);
                } else {
                    document.body.classList.remove('overflow-y-hidden');
                }
            })
            if (open) {
                setTimeout(() => {this.show = true;}, 50);
            }

        },
        modal: {
             ['@open-modal.window']($event) {
                if ($event.detail == this.name) {
                    this.show = true;

                    this.$nextTick(() => {
                        // focus on the input with the autofocus attribute

                    });
                }
            },
            ['@close.stop']:"show = false",
            ['@keydown.escape.window']() {
                if (this.closeable) {
                    this.show = false;
                }
            },
            ['@keydown.shift.tab.prevent']: "prevFocusable().focus()",
            ['x-show']() {
                 return this.show;
            },


        }
    }
}
