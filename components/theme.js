window.theme = function() {
    return {
        theme: localStorage.getItem('theme') || localStorage.setItem('theme', 'light'),

        toggle() {

            if (this.theme === 'light')
            {
                localStorage.setItem('theme', 'dark');
                this.theme = 'dark';
                document.documentElement.classList.replace('light', 'dark');
            }
            else {
                localStorage.setItem('theme', 'light');
                this.theme = 'light';
                document.documentElement.classList.replace('dark', 'light');
            }




        },




        light: {
            ['x-show']() {
                return this.theme === 'dark';
            },
            ['@click']() {
                console.log('click on light');
                this.toggle();
            }
        },
        dark: {
            ['x-show']() {
                return this.theme === 'light';
            },
            ['@click']() {
                console.log('click on dark');
                this.toggle();
            }
        }


    }
}
