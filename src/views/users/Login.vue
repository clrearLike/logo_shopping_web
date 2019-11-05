<template>
    <div id="login">
        <img 
        src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png"
         class="img">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
        <div class="gister" @click="toRegister()">免费注册</div>
    </div>
</template>
<script>
import storage from '../../localstorage/localstorage.js'
export default {
    data(){
        return {
            model: {
                username: '',
                password: ''
            },
            schema: {
                fields: [
                    {
                        type: 'input',
                        modelKey: 'username',
                        props: {
                            placeholder: '手机/邮箱/用户名'
                        },
                        rules: {
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 25
                        },
                        trigger: 'blur',
                        message: {
                            required: '用户名不能为空',
                            min: '不能小于3个字符',
                            max: '不能大于25个字符'
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'password',
                        props: {
                            placeholder: '请输入密码',
                            type: 'password',
                            eye: {
                                open: false
                            }
                        },
                        rules: {
                            required: true
                        },
                        trigger: 'blur',
                        message: {
                            required: '密码不能为空',
                        }
                    },
                    {
                        type: 'submit',
                        label: '登录'
                    }
                ]
            }
        }
    },
    methods: {
        //点击免费注册的时候进行路由跳转
        toRegister(){
            this.$router.push({path: '/users/register'});
        },
        //提交表单事件
        async submitHandler(e){
            //点击的时候不进行跳转  
            e.preventDefault();
            //一下是模拟数据，不是真是数据
            try{
                const result = await this.$http.get('/api/login',{params: this.model});
                console.log(result);
                if(result.data.code == 200){ 
                    this.$store.commit('setToken',result.data.token);
                    storage.set('token',result.data.token);
                    this.$router.push({path: '/botnav/home'});
                }else{
                    alert(result.data.message);
                }
            }catch(err){
                console.log(err);
            }

        }
    }
}
</script>
<style lang="stylus">
.img
    width 100px
    height 100px
.gister
    font-size 16px
    float right
    margin-right 20px
</style>