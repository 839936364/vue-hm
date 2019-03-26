<template>
    <div>
        <comment :id="id"></comment>
    </div>
</template>

<script>
import comment from '../subcomponents/comment'
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    methods: {
        
    },
    components:{
        comment
    }
}
</script>

<style lang="less" scoped>


</style>

