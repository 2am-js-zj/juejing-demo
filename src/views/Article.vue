<template>
    <!-- 主视图内容 -->
    <div class="container">
        <!-- 左侧小按钮栏 -->
        <div class="small-btn">
        <ul class="one">
            <li><i class="iconfont icon-dianzan1"></i></li>
            <li><i class="iconfont icon-pinglun"></i></li>
            <li><i class="iconfont icon-shoucang"></i></li>
            <li class="share">
                <i class="iconfont icon-zhuanfa"></i>
                <div class="share-box">
                    <ul>
                        <li>
                            <i class="iconfont icon-weixin">
                            </i>
                            <span>微信</span>
                        </li>
                        <li>
                            <i class="iconfont icon-xinlang"></i>
                            <span>新浪微博</span>
                        </li>
                        <li>
                            <i class="iconfont icon-QQ"></i>
                            <span>QQ</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="two">
            <li><i class="iconfont icon-jinggao"></i></li>
            <li><i class="iconfont icon-yuedujilu"></i></li>
        </ul>
        </div>
        <div class="view-box">
            <!-- 文章部分 -->
            <div class="article">
                <div class="content">
                <!-- 标题 -->
                <h1 class="title">Android动态更换应用图标</h1>
                <!-- 作者信息栏 -->
                <div class="author-info">
                    <!-- 头像 -->
                    <img src="https://p26-passport.byteacctimg.com/img/user-avatar/ae3b5ed78812b766bd8f5f82a5ee8128~300x300.image"  @click="$router.push('./user')">
                    <!-- 基本信息 -->
                    <span class="user-info">
                        <!-- 昵称 -->
                        <div class="name" @click="$router.push('./user')">xiangzhihong
                        </div>
                        <!-- 发布时间+阅读量 -->
                        <div>
                            <span>2022年07月01日 22:38</span> <span>· 阅读 7324</span>
                        </div>
                    </span>
                    <!-- 关注按钮 -->
                    <button class="follow-btn">+ 关注</button>
                </div>
                <!-- 文章详情栏 -->
                <div class="markdown-body html article-content">
                    这里主动用css样式填充高度，之后用内容填充
                </div>
                </div>
                <!-- 发表评论 -->
                <div class="comment">
                    <div class="header">
                     <div class="title">评论</div>
                     <div class="content">
                        <img src="https://p26-passport.byteacctimg.com/img/user-avatar/ae3b5ed78812b766bd8f5f82a5ee8128~300x300.image">
                        <textarea  class="text" placeholder="输入评论（Enter换行，Ctrl + Enter发送）"></textarea>
                     </div>
                     <div class="hide">
                            <i class="iconfont icon-biaoqing"> 表情</i>
                            <i class="iconfont icon-tupian"> 图片</i>
                            <div class="submit">
                                <span>Ctrl + Enter</span>
                                <button class="submit-btn">发表评论</button>
                            </div>
                     </div>
                    </div>
                    <!-- 评论列表 -->
                    <div class="comment-list">
                        <div class="title">
                            所有评论
                            <span>11</span>
                        </div>
                        <div class="com-list">
                            <img src="https://p26-passport.byteacctimg.com/img/user-avatar/fd2e197538e10388982140ac8096344e~300x300.image" @click="$router.push('./user')">
                            <div class="comment-main">
                                <div class="name" @click="$router.push('./user')">
                                    <span>MiyueFE</span>
                                </div>
                                <div class="com-content">仿佛看到了当年刚毕业的自己，写的很好；也发现自己不会的还很多，一起努力！</div>
                                <div class="btn">
                                    <span>
                                        <i class="iconfont icon-dianzan"></i>
                                        点赞
                                    </span>
                                    <span>
                                        <i class="iconfont icon-pinglun1"></i>
                                        回复
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="com-list">
                            <img src="https://p26-passport.byteacctimg.com/img/user-avatar/fd2e197538e10388982140ac8096344e~300x300.image" @click="$router.push('./user')">
                            <div class="comment-main">
                                <div class="name" @click="$router.push('./user')">
                                    <span>MiyueFE</span>
                                </div>
                                <div class="com-content">仿佛看到了当年刚毕业的自己，写的很好；也发现自己不会的还很多，一起努力！</div>
                                <div class="btn">
                                    <span>
                                        <i class="iconfont icon-dianzan"></i>
                                        点赞
                                    </span>
                                    <span>
                                        <i class="iconfont icon-pinglun1"></i>
                                        回复
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="com-list">
                            <img src="https://p26-passport.byteacctimg.com/img/user-avatar/fd2e197538e10388982140ac8096344e~300x300.image" @click="$router.push('./user')">
                            <div class="comment-main">
                                <div class="name" @click="$router.push('./user')">
                                    <span>MiyueFE</span>
                                </div>
                                <div class="com-content">仿佛看到了当年刚毕业的自己，写的很好；也发现自己不会的还很多，一起努力！</div>
                                <div class="btn">
                                    <span>
                                        <i class="iconfont icon-dianzan"></i>
                                        点赞
                                    </span>
                                    <span>
                                        <i class="iconfont icon-pinglun1"></i>
                                        回复
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 相关推荐 -->
                <div class="recommend">
                    <div class="title">
                        <span>相关推荐</span>
                    </div>
                    <div class="list-box">
                        <div class="meta">
                            <span class="name">寒草</span>
                            <span class="date">19天前</span>
                            <div class="tag-list">
                                <span class="tag">前端</span>
                                <span class="tag">JavaScript</span>
                                <span class="tag">程序员</span>
                            </div>
                        </div>
                        <div class="content-main">
                            <h2>VSCode 居然是个娱乐软件？让你 high 到爆的几款插件！</h2>
                            <div class="icon-box">
                                <span>
                                    <i class="iconfont icon-yanjing"></i>
                                    2.3w
                                </span>
                                <span>
                                    <i class="iconfont icon-dianzan"></i>
                                    6201
                                </span>
                                <span>
                                    <i class="iconfont icon-pinglun1"></i>
                                    652
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="list-box">
                        <div class="meta">
                            <span class="name">寒草</span>
                            <span class="date">19天前</span>
                            <div class="tag-list">
                                <span class="tag">前端</span>
                                <span class="tag">JavaScript</span>
                                <span class="tag">程序员</span>
                            </div>
                        </div>
                        <div class="content-main">
                            <h2>VSCode 居然是个娱乐软件？让你 high 到爆的几款插件！</h2>
                            <div class="icon-box">
                                <span>
                                    <i class="iconfont icon-yanjing"></i>
                                    2.3w
                                </span>
                                <span>
                                    <i class="iconfont icon-dianzan"></i>
                                    6201
                                </span>
                                <span>
                                    <i class="iconfont icon-pinglun1"></i>
                                    652
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右侧边栏 -->
            <div class="sidebar">
                <!-- 作者卡片 -->
                <div class="aut_card">
                    <div class="info" @click="$router.push('./user')">
                        <img src="https://p26-passport.byteacctimg.com/img/user-avatar/ae3b5ed78812b766bd8f5f82a5ee8128~300x300.image" alt="">
                        <div class="info-box">
                            <span class="name">xiangzhihong</span>
                            <span class="position">资深工程师，负责人|哔哩哔哩</span>
                        </div>
                    </div>

                    <div class="item">
                        <span class="icon"><i class="iconfont icon-dianzan1"></i></span>
                        <span class="content">获得点赞 5,803</span>
                    </div>
                    <div class="item">
                        <span class="icon"><i class="iconfont icon-yanjing1"></i></span>
                        <span class="content">文章被阅读 768,425</span>
                    </div>
                </div>
                <!-- 掘金app下载 -->
                <div class="app">
                    <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.9d13ff7.png">
                    <div class="content-box">
                        <div class="headline">下载稀土掘金APP</div> <div class="desc">一个帮助开发者成长的社区</div>
                    </div>
                </div>
                <!-- 加入学习群 -->
                <div class="adv">
                    <button class="close-btn">×</button>
                    <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
@import url(../style/article-sr/font-icon/iconfont.css);
  @import url(../style/article-sr/font_icon3/iconfont.css);
  * {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
.container {
  margin-top: 300px;
  max-width: 1140px;
  margin: 0 auto;
}
.container .small-btn {
  position: fixed;
  margin-left: -85px;
  top: 140px;
  z-index: 5;
}
.container .small-btn .one {
  margin-bottom: 25px;
}
.container .small-btn .two {
  padding-top: 25px;
  border-top: #e4e6eb solid 1px;
}
.container .small-btn ul {
  width: 48px;
}
.container .small-btn ul li {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  border-radius: 100%;
  background-color: #fff;
}
.container .small-btn ul li i {
  font-size: 1.67rem;
  color: #8a919f;
}
.container .small-btn ul li:hover i {
  color: #333;
  transition: all 0.5s;
}
.container .small-btn ul .share {
  position: relative;
}
.container .small-btn ul .share .share-box {
  display: none;
  position: absolute;
  top: 0px;
  left: 63px;
  width: 125px;
  height: 150px;
  background-color: #fff;
  border-radius: 4px;
}
.container .small-btn ul .share .share-box ul {
  display: flex;
  flex-direction: column;
  padding: 9px 0;
  width: 100%;
  height: 210px;
}
.container .small-btn ul .share .share-box ul li {
  width: 100%;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 15px 0;
  padding-left: 15px;
  margin-bottom: 0;
}
.container .small-btn ul .share .share-box ul li span {
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  color: #515767;
}
.container .small-btn ul .share .share-box ul li:hover {
  background-color: #f4f5f5;
}
.container .small-btn ul .share .share-box::after {
  position: absolute;
  width: 0;
  height: 0;
  content: " ";
  right: 100%;
  top: 20px;
  border: 6px solid transparent;
  border-right-color: #fff;
}
.container .small-btn ul .share::after {
  display: block;
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
}
.container .small-btn ul .share:hover .share-box {
  display: block;
}
.container .view-box {
  display: flex;
  justify-content: space-between;
  width: 1140px;
  margin-top: 1.167rem;
}
.container .view-box .article {
  background-color: #f4f5f5;
  width: 800px;
}
.container .view-box .article .content {
  width: 800px;
  background-color: #fff;
  border-radius: 4px;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
  padding-top: 2.667rem;
  padding-bottom: 3.33rem;
}
.container .view-box .article .content .title {
  font-weight: 600;
  margin-bottom: 20px;
}
.container .view-box .article .content .author-info {
  position: relative;
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
}
.container .view-box .article .content .author-info img {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-top: 4px;
}
.container .view-box .article .content .author-info .user-info {
  position: absolute;
  left: 50px;
  top: 0;
  height: 48px;
  width: 400px;
  display: flex;
  flex-direction: column;
}
.container .view-box .article .content .author-info .user-info .name {
  cursor: pointer;
  height: 24px;
}
.container .view-box .article .content .author-info .user-info span {
  color: #8a919f;
  font-size: 14px;
}
.container .view-box .article .content .author-info .follow-btn {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 4px;
  width: 70px;
  height: 34px;
  font-size: 14px;
  color: #1e80ff;
  text-align: center;
  border: 1px solid rgba(30, 128, 255, 0.3);
  background: rgba(30, 128, 255, 0.05);
  border-radius: 4px;
}
.container .view-box .article .content .author-info .follow-btn:hover {
  background-color: #E8F2FF;
}
.container .view-box .article .content .article-content {
  width: 100%;
  height: 1000px;
  background-color: #958585;
}
.container .view-box .article .comment {
  margin-top: 20px;
  padding: 0 32px;
  padding-bottom: 20px;
  background-color: #fff;
}
.container .view-box .article .comment .header {
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
}
.container .view-box .article .comment .header .title {
  margin-bottom: 2rem;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  color: #252933;
}
.container .view-box .article .comment .header .content {
  display: flex;
  width: 100%;
  padding: 0;
}
.container .view-box .article .comment .header .content img {
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 100%;
}
.container .view-box .article .comment .header .content .text {
  padding: 8px 12px;
  width: 700px;
  height: 64px;
  border: none;
  background-color: #f2f3f5;
  border-radius: 4px;
  font-family: sans-serif;
  resize: none;
}
.container .view-box .article .comment .header .content .text::placeholder {
  color: #8a919f;
}
.container .view-box .article .comment .header .content .text:focus {
  background: none;
  outline-color: #1e80ff;
  outline-width: 0.5px;
}
.container .view-box .article .comment .header .hide {
  width: 100%;
  padding-left: 55px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.container .view-box .article .comment .header .hide i {
  width: 74px;
  cursor: pointer;
}
.container .view-box .article .comment .header .hide i:hover {
  color: #1e80ff;
}
.container .view-box .article .comment .header .hide .submit {
  flex: 1;
  padding-left: 342px;
}
.container .view-box .article .comment .header .hide .submit span {
  margin-right: 6px;
  color: #86909c;
  font-size: 14px;
}
.container .view-box .article .comment .header .hide .submit .submit-btn {
  cursor: pointer;
  width: 92px;
  height: 36px;
  background: #abcdff;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 36px;
  border: none;
  border-radius: 4px;
}
.container .view-box .article .comment .comment-list {
  padding-top: 32px;
  font-size: 18px;
}
.container .view-box .article .comment .comment-list .title {
  font-size: 18px;
  font-weight: 600;
}
.container .view-box .article .comment .comment-list .com-list {
  display: flex;
  justify-content: space-between;
  height: 120px;
  padding: 16px 0;
}
.container .view-box .article .comment .comment-list .com-list img {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  cursor: pointer;
}
.container .view-box .article .comment .comment-list .com-list .comment-main {
  width: 678px;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .name {
  cursor: pointer;
  height: 26px;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .name span {
  font-weight: 500;
  font-size: 15px;
  color: #252933;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .com-content {
  height: 26px;
  font-weight: 400;
  font-size: 14px;
  color: #515767;
  margin-top: 8px;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .btn {
  margin-top: 8px;
  height: 22px;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .btn span {
  font-size: 14px;
  cursor: pointer;
  color: #8a919f;
  margin-left: 7px;
  text-align: center;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .btn span i {
  font-size: 16px;
  line-height: 22px;
}
.container .view-box .article .comment .comment-list .com-list .comment-main .btn span:hover {
  color: #1e80ff;
}
.container .view-box .article .recommend {
  margin-top: 20px;
  background-color: #fff;
}
.container .view-box .article .recommend .title {
  height: 67px;
  width: 736px;
  margin: 0 32px;
  border-bottom: 1px #e5e6eb solid;
}
.container .view-box .article .recommend .title span {
  height: 67px;
  line-height: 67px;
  font-weight: 600;
  color: #252933;
  font-size: 18px;
}
.container .view-box .article .recommend .list-box {
  width: 800px;
  height: 115px;
  cursor: pointer;
  position: relative;
  background: #fff;
  padding: 16px 32px 0 32px;
  display: flex;
  flex-direction: column;
}
.container .view-box .article .recommend .list-box::after {
  content: "";
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  height: 1px;
  background: #e5e6eb;
}
.container .view-box .article .recommend .list-box:hover {
  background-color: #FAFAFA;
}
.container .view-box .article .recommend .list-box .meta {
  height: 22px;
  display: flex;
}
.container .view-box .article .recommend .list-box .meta .name,
.container .view-box .article .recommend .list-box .meta .date {
  color: #8a919f;
  font-size: 14px;
  padding: 0 10px;
}
.container .view-box .article .recommend .list-box .meta .name {
  color: #515767;
  padding-left: 0;
}
.container .view-box .article .recommend .list-box .meta .date::before {
  position: absolute;
  top: 23%;
  left: 71px;
  transform: translateY(-50%);
  display: block;
  width: 1px;
  height: 14px;
  background: #e5e6eb;
  content: " ";
}
.container .view-box .article .recommend .list-box .meta .date::after {
  position: absolute;
  top: 23%;
  left: 133px;
  transform: translateY(-50%);
  display: block;
  width: 1px;
  height: 14px;
  background: #e5e6eb;
  content: " ";
}
.container .view-box .article .recommend .list-box .meta .tag-list {
  display: flex;
  align-items: center;
}
.container .view-box .article .recommend .list-box .meta .tag-list .tag {
  color: #8a919f;
  font-size: 14px;
  padding: 0 8px;
}
.container .view-box .article .recommend .list-box .content-main {
  height: 56px;
}
.container .view-box .article .recommend .list-box .content-main h2 {
  height: 28px;
  color: #252933;
  font-size: 16px;
  padding-top: 13px;
}
.container .view-box .article .recommend .list-box .content-main .icon-box {
  margin-top: 16px;
  padding-bottom: 20px;
  z-index: 2;
}
.container .view-box .article .recommend .list-box .content-main .icon-box span {
  font-size: 14px;
  width: 60px;
  display: inline-block;
  margin-right: 12px;
  line-height: 25px;
  position: relative;
  padding-left: 25px;
}
.container .view-box .article .recommend .list-box .content-main .icon-box span i {
  position: absolute;
  top: 3px;
  left: 1px;
  color: #8A919F;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
}
.container .view-box .article .recommend .list-box .content-main .icon-box span:nth-child(2):hover {
  color: #1e80ff;
}
.container .view-box .article .recommend .list-box .content-main .icon-box span:nth-child(2):hover i {
  color: #1e80ff;
}
.container .view-box .article .recommend .list-box .content-main .icon-box span:nth-child(3):hover {
  color: #1e80ff;
}
.container .view-box .article .recommend .list-box .content-main .icon-box span:nth-child(3):hover i {
  color: #1e80ff;
}
.container .view-box .sidebar {
  display: inline-block;
  margin-right: 10px;
  width: 300px;
  height: 600px;
}
.container .view-box .sidebar .aut_card {
  background-color: #fff;
  width: 300px;
  height: 184px;
  margin-bottom: 20px;
  border-radius: 2px;
  padding: 1.667rem;
}
.container .view-box .sidebar .aut_card .info {
  cursor: pointer;
  width: 100%;
  height: 75px;
  display: flex;
  border-bottom: 1px solid #e4e6eb;
}
.container .view-box .sidebar .aut_card .info img {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin-top: 10px;
}
.container .view-box .sidebar .aut_card .info .info-box {
  margin-top: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  height: 48px;
}
.container .view-box .sidebar .aut_card .info .info-box .name {
  font-size: 16px;
  margin-bottom: 8px;
}
.container .view-box .sidebar .aut_card .info .info-box .position {
  font-size: 14px;
  color: #515767;
}
.container .view-box .sidebar .aut_card .item {
  margin-top: 0.555rem;
  display: flex;
  align-items: center;
}
.container .view-box .sidebar .aut_card .item .icon {
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background-color: #e1efff;
  position: relative;
}
.container .view-box .sidebar .aut_card .item .icon i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  font-size: 17px;
  color: #7bb9ff;
}
.container .view-box .sidebar .aut_card .item .content {
  font-size: 14px;
  color: #252933;
  margin-left: 10px;
}
.container .view-box .sidebar .app {
  display: flex;
  width: 300px;
  height: 90px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
}
.container .view-box .sidebar .app img {
  width: 50px;
  height: 50px;
  margin-right: 16px;
}
.container .view-box .sidebar .app .content-box .headline {
  font-weight: 500;
  font-size: 15px;
  color: #252933;
}
.container .view-box .sidebar .app .content-box .desc {
  margin-top: 10px;
  font-size: 14px;
  color: #8a919f;
}
.container .view-box .sidebar .adv {
  cursor: pointer;
  width: 300px;
  height: 245px;
  margin-bottom: 20px;
  position: relative;
}
.container .view-box .sidebar .adv .close-btn {
  display: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  color: #616367;
}
.container .view-box .sidebar .adv .close-btn:hover {
  color: #333;
}
.container .view-box .sidebar .adv img {
  width: 100%;
  height: 100%;
}
.container .view-box .sidebar .adv:hover .close-btn {
  display: block;
}

</style>
