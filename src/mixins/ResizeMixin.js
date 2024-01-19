export default {
    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth
        },
    },
}
