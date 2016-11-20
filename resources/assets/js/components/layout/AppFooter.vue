<template>
    <footer>
        <h1>{{footer}}</h1>
    </footer>
</template>
<script>
export default {
    created() {
        this.setFooter()
    },
    data() {
        return {
            footer: ''
        }
    },
    methods: {
        setFooter() {
            this.$set('footer', 'this is footer!');
        }
    }
}
</script>