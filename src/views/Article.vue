<template>
    <!-- 主视图内容 -->
    <div class="container">
        <!-- 左侧小按钮栏 -->
        <div class="small-btn">
        <ul class="one">
            <li :class="{activeBlue:islike}" @click="likeBtn()"><i class="iconfont icon-dianzan1"></i><div v-if="item.thumbUp" class="dianzanBox">{{item.thumbUp-700>1000?500:item.thumbUp-700}}</div></li>
            <li><i class="iconfont icon-pinglun"></i><div v-if="item.thumbUp" class="pinglunBox">{{item.comment}}</div></li>
            <li :class="{activeLove:islove}" @click="loveBtn()"><i class="iconfont icon-shoucang"></i></li>
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
                <h1 class="title">{{item.title}}</h1>
                <!-- 作者信息栏 -->
                <div class="author-info">
                    <!-- 头像 -->
                    <img :src="item.aut_photo||'https://p26-passport.byteacctimg.com/img/user-avatar/ae3b5ed78812b766bd8f5f82a5ee8128~300x300.image'"  @click="$router.push('./user')">
                    <!-- 基本信息 -->
                    <span class="user-info">
                        <!-- 昵称 -->
                        <div class="name" @click="$router.push('./user')">{{item.aut_name}}
                        </div>
                        <!-- 发布时间+阅读量 -->
                        <div>
                            <span>{{item.createDate}}</span> <span>· 阅读 {{item.read}}</span>
                        </div>
                    </span>
                    <!-- 关注按钮 -->
                    <button class="follow-btn">{{ item.is_followed ? '+ 关注' :'已关注'}}</button>
                </div>
                <!-- 文章详情栏 -->
                <div class="markdown-body html article-content">
                    <h1 data-id="heading-0">前言</h1>
<p>本篇文章只是作为本人学习Android操作系统知识和架构的总览记录贴，主要作用是立下目标，给自己一个方向和激励，当每完成一个部分，我都会来这里更新和总结，也希望自己能一直坚持下去。</p>
<h1 data-id="heading-1">正文</h1>
<p>作为一个工作了好几年的Android应用层开发者，我准备在工作之余干一件事情，那就是学习Android系统知识，为什么要做这个决定呢，理由如下：</p>
<ol>
<li><strong>在Android应用层开发进阶</strong>。</li>
</ol>
<p>这个说起来并非易事，可能在很多人的认知里，Android开发就是主要用来实现UI和交互，但是现在小程序和混合开发大行其道，真正留给Android开发的工作量可能会越来越少。</p>
<p>而对于复杂的Android应用来说，最大的问题就是性能，所以对于Android应用层进阶来说，就是不仅在实现业务需求的时候，还需要掌握各种性能优化、插件化等技能。</p>
<p>对于大厂常用的插件化或者热修复来说，理解其原理至少要明白Android组件的启动流程、Hook技术、IPC通信等；</p>
<p>而对于性能优化来说就更多了，拿我们最常用的卡顿优化来说，首先就是卡顿监控的方法，这里有消息队列、插桩、集成Linux的atrace等方法；然后就是监控帧率和组件生命周期耗时等，这些就需要了解Android系统的绘制和组件的运行原理；再然后还需要监控线程、进程的使用，这里要学会看懂各种Linux的性能数据；最后还要使用各种工具分析监控结果，比如保存卡顿线程、获取Java层和native层的堆栈信息等。</p>
<p>就这一个卡顿优化，就可以贯穿各种线程、Linux、native、Framework等知识，所以想在Android应用层开发更进一步，了解Android系统知识必不可少。</p>
<ol start="2">
<li><strong>利于转型Android系统开发</strong>。</li>
</ol>
<p>不知何时起，单纯的Android应用层开发越来越少了，主流技术演变也越来越快，从之前的rxjava到如今的协程，从之前MVC到如今的MVVM，还有Flutter、Compose等技术，可以说是日新月异。当我们在使用这些技术时，通常会犯一个毛病，那就是使用简单，深入困难。随便新技术，可能几天就上手了，但是没有深入理解，时间久了，就容易欠下许多技术债。</p>
<p>这里我提到了转到Android系统开发，也并非是一定的好方向，只是觉得可以多一条路而已，毕竟有很多相通之处。在Android系统中，涉及的知识更多，从充当基石的Linux，到各种C++库的native层，再到我们熟悉的Java Framework层，还包括虚拟机、驱动等，这里关联的知识非常多，更适合个人能力提升和沉淀。</p>
<p>所以在以后的技术路上，还需要多积累、多思考，给自己多一个方向选择。</p>
<h2 data-id="heading-2">基本方向</h2>
<p>说完了理由之后，这里开始立Flag了，首先就是Android系统的架构，官方经典图给上：</p>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43e4e49ac36f468ea35f9a733ee55458~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image.png" width="60%" loading="lazy" class="medium-zoom-image">
<p>从下到上分别是：</p>
<ol>
<li>
<p><strong>Linux内核</strong>：Android平台的基础是Linux内核，Android虚拟机依靠Linux内核来执行底层功能，比如线程和底层内存管理。同时基于Linux内核可以让Android系统更加稳定，并且允许设备制造商为著名的内核开发硬件驱动程序。</p>
</li>
<li>
<p><strong>硬件抽象层(HAL)</strong>：为特定类型的硬件提供标准的接口，比如相机和蓝牙模块，这样各个硬件厂商就可以按需开发驱动程序。</p>
</li>
<li>
<p><strong>Android Runtime</strong>：这个便是Java代码运行需要的虚拟机，现在一般都是ART虚拟机，ART虚拟机可以执行DEX文件来运行Java代码。</p>
</li>
<li>
<p><strong>原生C/C++库(native层)</strong>：许多核心Android系统组件和服务都是用C/C++代码编写，比如OpenGL ES等，而Java和Native由JNI技术打通。</p>
</li>
<li>
<p><strong>Java Framework层</strong>：这里就是我们经常使用的一些Java API，包括各种服务，比如AMS、WMS等，也是Android framework开发最常修改的部分。</p>
</li>
<li>
<p><strong>APP层</strong>：这里就是我们平时开发的APP所在的层级，这里就更侧重前面说的性能优化和各种黑科技了。</p>
</li>
</ol>
<p>上面大致列了Android系统的层级，这里就要对每个层级所需要的相关知识做如下列举，后续会继续补充和完善。</p>
<h4 data-id="heading-3">语言方向</h4>
<ol>
<li>学习C++</li>
</ol>
<h4 data-id="heading-4">系统方向</h4>
<ol>
<li>学习Linux操作系统</li>
</ol>
<h4 data-id="heading-5">系统启动系列</h4>
<ol>
<li>init进程</li>
<li>zygote进程</li>
<li>system_server进程</li>
<li>servicemanager进程</li>
<li>app进程</li>
</ol>
<p><a href="https://juejin.cn/post/7133873028139581470" target="_blank" title="https://juejin.cn/post/7133873028139581470"># framework | Android系统架构</a></p>
<h4 data-id="heading-6">Android进程系列</h4>
<ol>
<li>Android进程创建</li>
<li>四大组件启动和运行过程</li>
<li>Contenxt理解</li>
</ol>
<p><a href="https://juejin.cn/post/7129778558469144613/" target="_blank" title="https://juejin.cn/post/7129778558469144613/"># framework | Activity启动流程(android-31)</a></p>
<h4 data-id="heading-7">图形系统系列</h4>
<ol>
<li>WMS相关</li>
<li>SurfaceFlinger相关</li>
<li>Choreographer相关</li>
</ol>
<h4 data-id="heading-8">系统稳定系列</h4>
<ol>
<li>Android ANR机制</li>
<li>Native进程的Trace原理</li>
<li>崩溃原理</li>
<li>分析工具</li>
</ol>
<h4 data-id="heading-9">通信系列</h4>
<ol>
<li>AIDL原理</li>
<li>Binder原理</li>
<li>Handler在Java和native层原理</li>
<li>JNI技术原理分析</li>
</ol>
<h4 data-id="heading-10">虚拟机系列</h4>
<ol>
<li>常见虚拟机分析</li>
<li>内存布局和GC算法</li>
</ol>
<h4 data-id="heading-11">插件化系列</h4>
<ol>
<li>热修复原理</li>
<li>Hook技术</li>
<li>插件化原理</li>
</ol>
<p>等等。</p>
<h1 data-id="heading-12">总结</h1>
<p>上面只是罗列了很少一部分，后续会继续补充，而且每一个点讲明白都需要非常多的精力，后续关于这部分的文章，每更新一篇，都会来这个下面做记录和更新，加油！</p>
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
                    <div class="list-box" v-for="(lis,index) in list" :key="index">
                        <div class="meta">
                            <span class="name">{{lis.aut_name}}</span>
                            <span class="date">{{dayjs(lis.createDate, 'YYYY年MM月DD日 HH:MM'&&'YYYY年MM月DD日', 'zh-cn').fromNow()}}</span>
                            <div class="tag-list">
                                <span class="tag" v-for="(tag,index) in lis.tag" :key="index">{{tag}}</span>
                            </div>
                        </div>
                        <div class="content-main">
                            <h2>{{lis.title}}</h2>
                            <div class="icon-box">
                                <span>
                                    <i class="iconfont icon-yanjing"></i>
                                    {{lis.read}}
                                </span>
                                <span>
                                    <i class="iconfont icon-dianzan"></i>
                                    {{lis.thumbUp}}
                                </span>
                                <span>
                                    <i class="iconfont icon-pinglun1"></i>
                                    {{lis.comment}}
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
                        <img :src="item.aut_photo||'https://p26-passport.byteacctimg.com/img/user-avatar/ae3b5ed78812b766bd8f5f82a5ee8128~300x300.image'" alt="">
                        <div class="info-box">
                            <span class="name">{{item.aut_name}}</span>
                            <span class="position">资深工程师，负责人|哔哩哔哩</span>
                        </div>
                    </div>

                    <div class="item">
                        <span class="icon"><i class="iconfont icon-dianzan1"></i></span>
                        <span class="content">获得点赞 {{item.thumbUp}}</span>
                    </div>
                    <div class="item">
                        <span class="icon"><i class="iconfont icon-yanjing1"></i></span>
                        <span class="content">文章被阅读 {{item.read}}</span>
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
import store from '@/store'
import { ref, onMounted } from 'vue'
import { findList } from '@/api/list'

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat'
export default {
  setup() {
    const item = store.state.profile
    console.log(item)
    const islike = ref(false)
    const islove = ref(false)
    const likeBtn = () => {
      islike.value=!islike.value
    }
    const loveBtn = () => {
      islove.value = !islove.value
      store.state.profile.thumbUp.value++
    }

    const list = ref([])
    onMounted(() => {
        window.onscroll = (e) => {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          //变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          //滚动条到底部的条件
          if (scrollTop + windowHeight > scrollHeight-1) {
            findList().then(data => {
              list.value.push(...data.data)
              console.log(list.value)
              console.log('触底了')
            })
          }
        }
    })

      findList().then(data => {
      setTimeout(() => {
        res.push(...data.data)
        res.push(...data.data)
        // list.value = data.data
        list.value = res
      }, 2000)

      })
    dayjs.extend(customParseFormat)
    dayjs.extend(relativeTime)

    const setFn = (item) => {
      store.commit("setUser", {
        aut_name:item.aut_name,
        aut_photo:item.aut_photo,
        createDate:item.createDate,
        is_followed:item.is_followed,
        read:item.read,
        thumbUp:item.thumbUp,
        comment:item.comment,
      })
    }
    return {item,islike,likeBtn,islove,loveBtn,list,dayjs,setFn}
  }
}
</script>
<style scoped lang="less">
@import url(../style/article-sr/font-icon/iconfont.css);
  @import url(../style/article-sr/font_icon3/iconfont.css);
  .markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;margin-bottom:5px}.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-size:20px}.markdown-body h2{padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}
  .hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ffa07a}.hljs-built_in,.hljs-builtin-name,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5ab35}.hljs-attribute{color:gold}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#abe338}.hljs-section,.hljs-title{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.markdown-body pre,.markdown-body pre>code.hljs{background:#2b2b2b;color:#f8f8f2}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}
  .activeLove {
     i {
    color:#ffb800!important;
    }
  }
  .activeBlue{
    i {
    color: #1e80ff !important;
    }
    div{
    background-color:#1e80ff !important;
    }
  }
  .dianzanBox,.pinglunBox {
    position: absolute;
    top: -3px;
    right: -10px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 100%;
    color: #Fff;
    background-color: #c2c8d1;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
  }
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
