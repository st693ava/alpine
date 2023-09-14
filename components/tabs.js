window.tabs = function() {
    return {
        selectedId: null,
        init() {
            // Set the first available tab on the page on page load.
            this.$nextTick(() => this.select(this.$id('tab', 1)))
        },
        select(id) {
            this.selectedId = id
        },
        isSelected(id) {
            return this.selectedId === id
        },
        whichChild(el, parent) {
            return Array.from(parent.children).indexOf(el) + 1
        },
        tabs: {
            [':id']:"$id('tabs')",
        },
        tablist: {
            ['x-ref']: 'tablist',
            ['@keydown.right.prevent.stop']: "$focus.wrap().next()",
            ['@keydown.home.prevent.stop']: "$focus.first()",
            ['@keydown.page-up.prevent.stop']: "$focus.first()",
            ['@keydown.left.prevent.stop']: "$focus.wrap().prev()",
            ['@keydown.end.prevent.stop']: "$focus.last()",
            ['@keydown.page-down.prevent.stop']: "$focus.last()",
            [':role']: "'tablist'",
        },
        tab: {
            [':id']:"$id('tab', whichChild($el.parentElement, $refs.tablist))",
            ['@click']:"select($el.id)",
            ['@mousedown.prevent']: "",
            ['@focus']:"select($el.id)",
            [':tabindex']:"isSelected($el.id) ? 0 : -1",
            [':aria-selected']: "isSelected($el.id)",
            ['role']: "tab",

        },
        tabpanel: {
            ['x-show']: "isSelected($id('tab', whichChild($el, $el.parentElement)))",
            [':aria-labelledby']: "$id('tab', whichChild($el, $el.parentElement))",
            ['role']: "tabpanel"
        }
    }
}
