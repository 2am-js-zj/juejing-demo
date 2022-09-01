<template>
    <div class="main">
        <form class="auth-form">
            <div class="panfish">
                <img data-v-016987d0=""
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ad7fa76844a2df5c03151ead0ce65ea6.svg"
                    class="normal" v-show="!isFocus">
                <img data-v-016987d0=""
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/500c1180a96859e5c54a5359f024a397.svg"
                    class="greeting" v-show="isFocus">
                <img data-v-016987d0=""
                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/4f6f6f316cde4398d201cd67e44ddea3.svg"
                    class="blindfold" v-show="isFocusSecond">
            </div>
            <i data-v-016987d0="" title="关闭" class="close-btn ion-close-round" @click="closeBtn"></i>
            <div class="panel">
                <h1 class="title">账密登录</h1>
            </div>

            <input type="text" placeholder="邮箱/手机号(国际号码加区号)" @focus="focusText" @blur="blurText" v-model="userTel"
                class="input-box">



            <input type="text" placeholder="请输入密码" v-model="userPwd" class="input-box" @focus="focusImg"
                @blur="blurImg">


            <button class="btn" @click="login">
                登录
            </button>
            <div class="bottommain">
                <div class="prompt-box"><span class="clickable" @click="emailLogin">
                        手机登录
                    </span></div>
                <div class="prompt-box"><span class="clickable" @click="emailLogin">
                        忘记密码
                    </span></div>
            </div>
            <div data-v-016987d0="" class="oauth">
                <div data-v-016987d0="" class="oauth-bg"><img data-v-016987d0="" title="微博" alt="微博"
                        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/fa758ebd6691cf5931bbbed63230327b.svg"
                        class="oauth-btn"></div>
                <div data-v-016987d0="" class="oauth-bg"><img data-v-016987d0="" title="微信" alt="微信"
                        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e0ff12435b30910520c9a3aac9b90487.svg"
                        class="oauth-btn"></div>
                <div data-v-016987d0="" class="oauth-bg"><img data-v-016987d0="" title="GitHub" alt="GitHub"
                        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/547dd8a9450cd7be39ff97c40a23e794.svg"
                        class="oauth-btn"></div>
            </div>
            <div  class="agreement-box" style="">
                注册登录即表示同意
                <a  href="/terms" target="_blank">用户协议</a>
                <a  href="/privacy" target="_blank">隐私政策</a>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeNum: 60,
            codeMsg: '获取短信验证码',
            disabled: false,
            userTel: '',
            userPwd: '',
            isFocus: false,
            isFocusSecond: false,
            rules: {
                userTel: {
                    rule: /^1[23456789]\d{9}$/,
                    msg: '手机号不能为空,且手机号必须为11位'
                },
                userPwd: {
                    rule: /^\w{6,12}$/,
                    msg: '密码不能为空，且长度在6-12位之间'
                }
            }
        }
    },
    methods: {
        focusText() {
            this.isFocus = true
        },
        blurText() {
            this.isFocus = false
        },
        focusImg() {
            this.isFocusSecond = true
        },
        blurImg() {
            this.isFocusSecond = false
        },
        login() {
            if (!this.validate('userTel')) return
            if (!this.validate('userPwd')) return
            //发送请求，用axios？
        },
        validate(key) {
            let bool = true
            if (!this.rules[key].rule.test(this[key])) {
                alert(this.rules[key].msg)
                bool = false
                return
            }
            return bool
        },

        emailLogin() {
            this.$router.push('/login')
      },
      closeBtn() {
        console.log('1')
        this.$emit("close")
      }

  },
}
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    /* background-color: pink;
    opacity: 0.3; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-form {
    position: relative;
    padding: 23px;
    width: 318px;
    height: 364px;
    font-size: 1.167rem;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
}

.auth-form .focus {
    border-color: #1e80ff
}

.main .auth-form .panfish .normal {
    position: absolute;
    top: -84px;
    left: 100px;

    width: 130px;
    z-index: 1;
}

.main .auth-form .panfish .greeting {
    position: absolute;
    top: -80px;
    left: 100px;

    width: 130px;
    z-index: 1;
}

.blindfold {
    position: absolute;
    top: -80px;
    left: 100px;

    width: 130px;
    z-index: 1;
}

.panel .title {
    font-size: 18px;
    margin: 0 0 20px;
}

.close-btn {
    float: right;
    cursor: pointer;
    opacity: .4;
}

.ion-close-round:before {
    content: "x";
    font-style: normal;
}

.dropdown-box {

    box-sizing: border-box;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #d9d9d9;
    display: flex;
    border-radius: 2px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}



.inputleft {
    display: flex;
    width: 22%;
    justify-content: space-between;
}

input {
    padding: 10px;
    width: 100%;
    border: 1px solid #e9e9e9;
    border-radius: 2px;
    outline: none;
    height: 40px;
    margin-bottom: 10px;
    box-sizing: border-box;

}

input:focus {
    border-color: #1e80ff
}


.btn {
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #007fff;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 5px;
    border: none;
    font-size: 14px;
}

.prompt-box {
    margin: 10px 0 0;
    color: #767676;
}

.clickable {
    color: #007fff;
    cursor: pointer;
    font-size: 14px;
}

.bottommain {
    display: flex;
    justify-content: space-between;
}

.oauth {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
}

.oauth-bg {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #f4f8fb;
    display: flex;
    align-items: center;
    justify-content: center;
}

.oauth-btn {
    height: 25px;
    vertical-align: bottom;
    cursor: pointer;
}
.agreement-box {
    font-size: 14px;
    margin-top: 20px;
    color: #767676;
}
.agreement-box a {
    color: #007fff;
}
</style>
