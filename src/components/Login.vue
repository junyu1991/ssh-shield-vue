<template>
    <div class="login">
        <h1>SSH-SHIELD</h1>
        <input type="text" placeholder="UserName" v-model="username"/>
        <input type="password" placeholder="Password" v-model="password">
        <div class="loginBtn" @click="login">Login</div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                let user = {
                  username: this.username,
                  password: this.password
                };
                this.$store.commit('setUserInfo', user);
                this.$router.push('/mainPage')
            }
        }
    }
</script>
<style scoped lang="scss">
    .login {
        height: 100%;
        display: flex;
        display: -ms-flexbox;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            /*color: green;*/
        }
        input {
            width: 300px;
            height: 30px;
            margin-top: 20px;
            border-radius: 4px;
            border: none;
        }
        .loginBtn {
            width: 300px;
            height: 30px;
            line-height: 30px;
            margin-top: 20px;
            border-radius: 4px;
            text-align: center;
            color: white;
            border: 1px solid green;
            background-color: green;
        }
    }
</style>