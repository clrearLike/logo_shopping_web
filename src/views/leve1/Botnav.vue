<template>
    <div id="botnav">
        <router-view class="router"></router-view>

        <cube-tab-bar
            class="botnav"
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler">
  </cube-tab-bar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectedLabelDefault: '首页',
            tabs: [
                {
                    label: '首页',
                    icon: 'cubeic-home'
                },
                {
                    label: '分类',
                    icon: 'cubeic-tag'
                },
                {
                    label: '购物车',
                    icon: 'cubeic-mall'
                },
                {
                    label: '我的',
                    icon: 'cubeic-person'
                }
            ]
        }
    },
    methods: {
        clickHandler(label){

        },
        changeHandler(label){
            switch(label){
                case '首页':
                    this.$router.push({path: '/botnav/home'});
                break;
                case '分类':
                    this.$router.push({path: '/botnav/list'});
                break;
                case '购物车':
                    this.$router.push({path: '/botnav/cart'});
                break;
                case '我的':
                    this.$router.push({path: '/botnav/mine'});
                break;
            }
        }
    }
}
</script>
<style lang="stylus">
.cube-tab-bar.botnav
    position fixed
    bottom 0
    left 0
    z-index 1000
    width 100%
    background #ffffff
    .cube-tab div
        font-size 16px
    i 
        font-size 20px
</style>