<template>
  <div class="container">
    <!-- <input type="checkbox" id="login-show" ref="box"> -->
    <div class="login-box" v-show="loginBox">
      <Login @close="updatelogin()" ></Login>
    </div>
    <!-- 导航栏 -->
    <header class="zjl_header">
        <div class="zjl_container_wrapper ">
            <div class="zjl_container ">
                <!-- logo部分 -->
                <div>
                    <a class="zjl_logo" href="#">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                            style="width:107px;height:22px" />
                    </a>
                </div>
                <!-- 导航栏nav -->
                <!-- 上导航 -->
                <nav class="zjl_main_nav">
                    <ul class="zjl_nav">
                        <!-- 左导航mainnavlist -->
                        <li class="zjl_li">
                            <ul class="left_nav">
                                <li class="nav_item nav_item_top zjl_li"><a class="nav_item_a shouye" href=" #">首页</a>
                                </li>
                                <li class="nav_item nav_item_top zjl_li"><a class="nav_item_a" href=" #">沸点</a></li>
                                <li class="nav_item nav_item_top zjl_li"><a class="nav_item_a" href=" #">课程</a></li>
                                <li class="nav_item nav_item_top zjl_li"><a class="nav_item_a" href=" #">直播</a></li>
                                <li class="nav_item nav_item_top zjl_li"><a class="nav_item_a" href=" #">活动</a></li>

                                <nav class="nav_item"><a class="nav_item_a"
                                        href="https://detail.youzan.com/show/goods/newest?kdt_id=104340304"
                                        target="_blank">商城</a></nav>
                                <nav class="nav_item"><a class="nav_item_a"
                                        href="https://juejin.cn/app?utm_source=jj_nav" target="_blank">APP</a></nav>
                                <nav class="nav_item"><a class="nav_item_a"
                                        href="https://juejin.cn/extension?utm_source=jj_nav" target="_blank">插件</a>
                                </nav>
                            </ul>
                        </li>
                        <!-- 右导航 -->
                        <ul class="right_nav">
                            <li class="search_li zjl_li">
                                <!-- 搜索框+创客 -->
                                <ul class="search_ul">
                                    <!-- 搜索框 -->
                                    <li class="zjl_serach zjl_li">
                                        <form class="zjl_search_form">
                                            <input type="search" placeholder="探索稀土掘金" class="search_input" />
                                            <div class="search_icon_container">
                                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                                                    class="search_icon">
                                            </div>
                                        </form>
                                    </li>

                                    <!-- 创客 -->
                                    <li class="creator_li zjl_li">
                                        <div class="creator_btn">
                                            <button class="center_btn">创作者中心</button>
                                            <div class="creator_more">
                                                <svg t="1660039644301" class="icon" viewBox="0 0 1024 1024"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4681"
                                                    width="10" height="10">
                                                    <path
                                                        d="M878.592 250.88q29.696 0 48.128 11.264t24.576 29.696 0 41.472-26.624 45.568q-82.944 92.16-159.744 180.224t-148.48 164.864q-19.456 20.48-45.568 31.744t-53.76 11.776-53.248-8.704-43.008-28.672q-39.936-44.032-82.944-90.112l-88.064-92.16q-43.008-46.08-85.504-90.624t-79.36-86.528q-17.408-19.456-22.528-40.448t1.024-38.4 23.552-28.672 45.056-11.264q35.84 0 98.816-0.512t137.728-0.512l153.6 0 150.528 0 125.952 0 79.872 0z"
                                                        p-id="4682" fill="#ffffff"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <!-- 会员 -->
                            <li class="zjl_li">
                                <div class="zjl_vip">
                                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
                                        class="vip_img" />
                                    <div class="vip_words">会员</div>
                                </div>
                            </li>
                            <!-- 消息 -->
                            <li class="zjl_li news_li">
                                <a>
                                    <svg t="1660037738614" width="24" height="24" class="news_icon"
                                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        p-id="3178" >
                                        <path
                                            d="M512 960c49.6 0 88-38.4 88-88H424c0 49.6 38.4 88 88 88z m288.8-286.4V444.8c0-137.6-97.6-252.8-224.8-283.2v-28.8c0-32-17.6-60.8-48-67.2-44-10.4-80 23.2-80 66.4v30.4C320.8 192 223.2 307.2 223.2 444.8v228.8L136 763.2v44.8h752v-44.8l-87.2-89.6z"
                                            p-id="3179" fill="#8a8a8a"></path>

                                    </svg>

                                </a>
                            </li>
                            <!-- 头像 -->
                            <li class="zjl_li person_li">
                                <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image"
                                    class="person_img" />
                            </li>
                            <!-- 登录按钮 -->
                            <li class="zjl_li login_btn_li">
                                <button class="login_btn" @click="show()">登录</button>
                                <!-- <label class="login_btn" for="login-show">登录</label> -->
                            </li>

                        </ul>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <router-view class="body"></router-view>
    <button class="backTop" v-if="backBtn" @click="toTop()">
   <svg t="1661417880362" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2333" width="12" height="20">
    <path d="M39.3846 0h945.2307692307693v157.53846153846155h-945.2307692307693V0zM984.6154 708.9231h-236.30769230769232v315.0769230769231h-472.61538461538464V708.9230769230769h-236.30769230769232l472.6154-472.6154L984.6154 708.9231z" p-id="2334" fill="#bfbfbf">
    </path></svg>
    </button>
  </div>
</template>
<script>
import { ref,onMounted } from 'vue';
import Login from "../components/Login.vue";
export default {
components:{
  Login
  },
  setup() {
    const loginBox = ref(false)
    const updatelogin = () => {
      loginBox.value = false
    }
    const show = () => {
      loginBox.value = true
    }
    const backBtn = ref(false)
    onMounted(() => {
      const view=document.querySelector('.container')
        view.onscroll = (e) => {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          console.log(scrollTop)
          // //变量windowHeight是可视区的高度
          // var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          // //变量scrollHeight是滚动条的总高度
          // var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          // //滚动条到底部的条件
          if (scrollTop  > 800) {
            backBtn.value=true
          }
          else {
            backBtn.value=false
          }
        }
    })

    const toTop = () => {
      window.scroll(0,0)
    }
    return {loginBox,updatelogin,show,backBtn,toTop}
  }
}
</script>
<style scoped lang="less">
.backTop {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  position: fixed;
  right: 20px;
  bottom: 50px;
  border: none;
}
.login-box {
  display: block;
  z-index: 7;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(174, 160, 160, 0.3);
}
#login-show{
  position: fixed;

  z-index: 99;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.zjl_header {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    background: #fff;
    height: 60px;
    width: 100%;

}

.zjl_container_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f1f1f1;
}


.zjl_container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.zjl_logo {
    margin-left: 24px;
}

.zjl_main_nav {
    /* height: 100%; */
    flex: 1;
}

.zjl_nav {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.zjl_li {
    list-style: none;
}

.left_nav {
    display: flex;
    align-items: center;
    padding: 0;
}

.nav_item {
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    list-style: none;
    font-size: 14px;
    padding: 0 10px;
    margin: 0;
}

.nav_item_top:hover {
    cursor: pointer;
    border-bottom: 2px solid #007fff;

}

.nav_item_top:hover>a {
    color: #4a4c50;

}

.nav_item_a {
    text-decoration: none;
    color: #86909c;
}


.right_nav {
    display: flex;
    align-items: center;
    padding-left: 130px;
}

.search_li {
    display: flex;
}

.search_ul {
    display: flex;
    align-items: center;
}

.zjl_search_form {
    align-items: center;
    overflow: hidden;
    width: 230px;
    border: 1px solid #999;
    border-radius: 5px;
    display: flex;
    width: 360px;
}

.zjl_serach {
    display: flex;

}

.search_input {
    border: none;
    width: calc(100% - 44px);
    padding: 0.6rem 0 0.6rem 1rem;
    /* box-shadow: none; */
    outline: none;
    font-size: 14px;
    color: #8a919f;

}


.search_icon_container {
    position: relative;
    left: -2px;
    width: 44px;
    height: 30px;
    background: #f2f3f5;
    border-radius: 3px;
}

.search_icon {
    cursor: pointer;
    margin: 7px 13px;
}

.zjl_search_form:hover {
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #74777d;
}

.creator_btn {
    display: flex;
    height: 36px;
}

.creator_li {
    padding: 0 20px;
}

.center_btn {
    background-color: #007fff;
    border: none;
    padding: 0 15px;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: #fff;
}

.center_btn:hover {
    background-color: #0276ea;
}

.creator_more {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #007fff;
    width: 20px;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.creator_more:hover {
    background-color: #0276ea;
}

.zjl_vip {
    display: flex;
    align-items: center;
    padding: 0 10px;
}

.vip_words {
    color: #86909c;
    font-size: 14px;
    margin-left: 4px;
}

.news_li {
    padding: 0 10px;
    display: none;
}

.person_li {
    width: 36px;
    height: 36px;
    display: none;
}

.person_img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.login_btn_li {
    height: 36px;
}

.login_btn {
    display: inline-block;
    color: #007fff;
    background: rgba(30, 128, 255, .05);
    border: none;
    padding: 0 15px;
    border-radius: 4px;
    font-size: 14px;
    height: 100%;
    width: 100%;
    line-height: 36px;
    cursor: pointer;
}
</style>
