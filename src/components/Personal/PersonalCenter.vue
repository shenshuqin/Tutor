<template>
<div class="personal">
    <PersonalHeader></PersonalHeader>
    <div class="jy-main clearfix">
        <div class="min-width">
            <PersonalList></PersonalList>
            <keep-alive>
                <router-view style="width:75%;float:right"></router-view>
            </keep-alive>
        </div>
        <!-- min-width end -->
    </div>
    <!-- jy-main end -->
</div>
</template>

<script>
import PersonalHeader from './personalheader.vue'
import PersonalList from './personallist.vue'
export default {
    name: 'Personal',
     components: {
        PersonalHeader,
        PersonalList,
    },
    data () {
        return {
         
        }
    },
    created(){
    },
    mounted () {
       
    },
    methods: {
    
    }

}
</script>

<style  scoped>

</style>