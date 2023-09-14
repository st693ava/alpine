window.addEventListener('alpine:init', () => {

    Alpine.bind('tab', (name) => ({
        'name': name,
        '@click'() {
            this.open(name);
            this.active = name;
        },
        ':class'() {
            if (this.active == name) {
                return 'bg-primary text-primary-content';
            }
        }
    }))

})
