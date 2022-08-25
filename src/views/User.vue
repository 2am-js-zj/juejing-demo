<template>
  <div class="container">
    <div class="juejin-w">
        <div class="why_main">
            <div class="main_body">
                <div class="wrapper">
                    <div class="userview">
                        <div class="userviw_header">
                            <img :src="item.aut_photo||'https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image'" alt="图片无法加载">
                            <div class="usermsg">
                                <div>
                                    <h2>{{item.aut_name||'用户51218773828148'}}</h2>
                                </div>
                                <div>
                                    <a href="#">
                                        <span>+</span>
                                        0.0
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <span>+</span>
                                        020
                                    </a>
                                </div>
                            </div>
                            <div class="changemsg">
                                <div class="link">
                                    <a href="#">
                                        <span class="iconfont icon-weibo"></span>
                                    </a>
                                    <a href="#">
                                        <span class="iconfont icon-github-fill"></span>
                                    </a>
                                    <a href="#">
                                        <span class="iconfont icon-diqiu"></span>
                                    </a>
                                </div>
                                <div>
                                    <button @click="$router.push('/edit')">编辑个人资料</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="userview_foot">
                        <div class="foot_wrapper">
                            <div class="left">
                                <img src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/badge-count-icon.0586ac4.png" alt="图片无法加载">
                                <!-- <span class="iconfont icon-sharpicons_ribbon-"></span> -->
                                <span>获得徽章 36</span>
                            </div>
                            <div class="right">
                                <img src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/b307148589ab904ec14c386e41b91fda.svg" alt="...">
                            </div>
                        </div>
                    </a>
                    <div class="content">
                        <div class="content_nav">
                            <ul class="nav_text">
                                <li>
                                    <a href="#">动态</a>
                                </li>
                                <li>
                                    <a href="#">文章</a>
                                </li>
                                <li>
                                    <a href="#">专栏</a>
                                </li>
                                <li>
                                    <a href="#">沸点</a>
                                </li>
                                <li>
                                    <a href="#">收藏集</a>
                                </li>
                                <li>
                                    <a href="#">关注</a>
                                </li>
                                <li>
                                    <a href="#">赞</a>
                                </li>
                                <li class="last">
                                    <a href="#">
                                        <span class="iconfont icon-sousuo"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="main_content">
                            <!-- 这是动态组件 -->
                            <div class="dynamic">
                                <div class="head">
                                    <div class="author">
                                        <img src="	https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image" alt="图片无法加载">
                                        <div class="nametime">
                                            <div>
                                                <a href="#">用户</a>
                                            </div>
                                            <div>
                                                <span>1天前</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="postcontent">
                                    <a href="#">
                                        <div class="contenthead">
                                            <h3>掘金手册</h3>
                                        </div>
                                        <div class="simplecontent">
                                            <div>
                                                北冥有鱼,其名为鲲,南海有花,其名为椿,椿去湫来,海棠花开,椿偿鲲命,谁还湫情,本该椿花湫月,奈何北冥有鱼。
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="actionfoot">
                                    <div class="like">
                                        <div class="first">
                                            <span class="iconfont icon-dianzan"></span>
                                            <span class="action_title">点赞</span>
                                        </div>
                                    </div>
                                    <div class="comment">
                                        <div class="second">
                                            <span class="iconfont icon-pinglun1"></span>
                                            <span class="action_title">评论</span>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <div class="third">
                                            <span class="iconfont icon-fenxiang1"></span>
                                            <span class="action_title">分享</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 这是文章组件 -->
                            <div class="article">
                                <div class="sub_head">
                                    <h2>文章</h2>
                                    <div class="hot_new">
                                        <a href="#" class="hot">热门</a>
                                        <a href="#">最新</a>
                                    </div>
                                </div>
                                <div class="sub_content">
                                    <div class="contenthead">
                                        <a href="#">用户</a>
                                        <div class="time">
                                            <p>18小时前</p>
                                        </div>
                                        <div class="label">
                                            <a href="#">笔记</a>
                                        </div>
                                    </div>
                                    <div class="contentbody">
                                        <div class="head">
                                            <h3>大鱼海棠</h3>
                                        </div>
                                        <div class="simplecontent">
                                            <p>北冥有鱼,其名为鲲,南海有花,其名为椿,椿去湫来,海棠花开,椿偿鲲命,谁还湫情,本该椿花湫月,奈何北...</p>
                                        </div>
                                        <ul class="contentfoot">
                                            <li>
                                                <span class="iconfont icon-yanjing1"></span>
                                                <span class="active">10</span>
                                            </li>
                                            <li>
                                                <span class="iconfont icon-dianzan"></span>
                                                <span class="active">点赞</span>
                                            </li>
                                            <li>
                                                <span class="iconfont icon-pinglun1"></span>
                                                <span class="active">评论</span>
                                            </li>
                                            <li class="last">
                                                <p>···</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- 这是专栏组件 -->
                            <div class="special_column">
                                <a href="#">
                                    <div class="main">
                                        <img src="	https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/…49ce9143753e2a30facd~tplv-k3u1fbpfcp-zoom-1.image" alt="图片无法加载">
                                        <div class="sidecontent">
                                            <div class="head">
                                                <h2>深度学习饿</h2>
                                                <span>
                                                    <button>+ 关注</button>
                                                </span>
                                            </div>
                                            <span class="body">深度学习</span>
                                            <div class="foot">
                                                <span class="time">2022-01-01 00:00</span>
                                                <span> · </span>
                                                <span>文章数 9</span>
                                                <span> · </span>
                                                <span>关注人数 2</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <!-- 这是沸点组件 -->
                            <div class="boiling_point">
                                <div class="head">
                                    <div class="author">
                                        <img src="	https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image" alt="图片无法加载">
                                        <div class="nametime">
                                            <div>
                                                <a href="#">用户</a>
                                            </div>
                                            <div>
                                                <span>1天前</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="postcontent">
                                    <a href="#">
                                        <div class="simplecontent">
                                            <div>
                                                北冥有鱼,其名为鲲,南海有花,其名为椿,椿去湫来,海棠花开,椿偿鲲命,谁还湫情,本该椿花湫月,奈何北冥有鱼。
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="actionfoot">
                                    <div class="like">
                                        <div class="first">
                                            <span class="iconfont icon-fenxiang"></span>
                                            <span class="action_title">分享</span>
                                        </div>
                                    </div>
                                    <div class="comment">
                                        <div class="second">
                                            <span class="iconfont icon-pinglun"></span>
                                            <span class="action_title"></span>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <div class="third">
                                            <span class="iconfont icon icon-dianzan"></span>
                                            <span class="action_title">点赞</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 这是收藏集组件 -->
                            <div class="collection">
                                <div class="list_body">
                                    <ul class="list">
                                        <li class="item">
                                            <a href="#" class="main_conten">
                                                <div class="main">
                                                    <div class="left">
                                                        <div class="head">
                                                            <span>面试</span>
                                                        </div>
                                                        <div class="body">
                                                            <span>2022-01-01 更新 · 1篇文章 · 0订阅</span>
                                                        </div>
                                                    </div>
                                                    <div class="right">
                                                        <button class="btn">订阅</button>
                                                    </div>
                                                </div>

                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 这是关注组件 -->
                            <div class="follow">
                                <div class="follow_head">
                                    <div class="title">
                                        关注
                                    </div>
                                    <div class="right">
                                        <a href="#" class="item">关注的用户</a>
                                        <a href="" class="item">关注的团队</a>
                                        <a href="" class="item">关注者</a>
                                        <a href="" class="item">关注的专栏</a>
                                        <a href="" class="item">关注标签</a>
                                    </div>
                                </div>
                                <div class="follow_main">
                                    <ul class="list">
                                        <li class="item">
                                            <a href="#" class="link">
                                                <img src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image" alt="tupia">
                                                <div class="mid">Xcode</div>
                                                <button class="btn">关注</button>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 这是赞组件 -->
                            <div class="fabulous"></div>
                        </div>
                    </div>
                </div>
                <div class="side-right">
                    <div class="sideview">
                        <div class="side-head">
                            <div class="text">个人成就</div>
                            <div class="detailtext">
                                <div class="first">
                                    <span class="iconfont icon-yanjing"></span>
                                    <span>文章被阅读</span>
                                </div>
                                <a href="#" class="second">
                                    <span class="iconfont icon-tubiaoshangshengqushi"></span>
                                    <span>掘力值</span>
                                </a>
                            </div>
                        </div>
                        <div class="side-mid">
                            <a href="#" class="left">
                                <div>关注了</div>
                                <div class="second">1</div>
                            </a>
                            <a href="#" class="right">
                                <div>关注者</div>
                                <div class="second">0</div>
                            </a>
                        </div>
                        <div class="side-foot">
                            <a href="#">
                                <div class="first">收藏集</div>
                                <div >1</div>
                            </a>
                            <a href="#">
                                <div class="first">关注标签</div>
                                <div>2</div>
                            </a>
                            <div class="join-time">
                                <div class="first">加入于</div>
                                <div>2022-01-01</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import store from '@/store';
export default {
  setup() {
    const item = store.state.profile

    return {item}
  }
}
</script>
<style scoped lang="less">
 @import url('@/style/user-why/font_3nva912sb1m/iconfont.css');
 @import url('@/style/user-why/font_mvn3b5faxi/iconfont.css');
 @import url('@/style/user-why/font_qg4yk42n66a/iconfont.css');
 @import url('@/style/user-why/iconfont/iconfont.css');
 @import url('@/style/user-why/index.css');

</style>
