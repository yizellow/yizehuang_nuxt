<template>
   
</template>

<script>

export default {
    props: ['msg'],
    setup(props) {
        const message = props.msg
        return {message}
    },
}
</script>

<style scoped>

</style>