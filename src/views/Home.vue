<template>
   <Nav2></Nav2>
  <div class="container">
      <div class="body">
        <div class="juejin">
        <div class="main-box">
            <div class="contentLeft" :class="{aaa:flag}">
                <header>
                    <nav>
                        <ul class="list">
                            <li class="item">推荐</li>
                            <li class="item">最新</li>
                            <li class="item last">热榜</li>
                        </ul>
                        <div class="choose">
                            <select>
                                <option value="3天内">3天内</option>
                                <option value="7天内">7天内</option>
                                <option value="30天内">30天内</option>
                                <option value="全部">全部</option>
                            </select>
                        </div>
                    </nav>
                </header>
                <div class="mainContent">
                  <!-- 此处放文章列表 -->
                  <div v-if="flag">
                   <div class="article" v-for="(item,index) in list" :key="index" @click="$router.push(`/article/${item.id}`);setFn(item)">
                        <div class="sub_content">
                            <div class="contenthead">
                                <a :router-link="`/user/${item.aut_id}`">{{item.aut_name}}</a>
                                <div class="time">
                                    <p>{{dayjs(item.createDate, 'YYYY年MM月DD日 HH:MM'&&'YYYY年MM月DD日', 'zh-cn').fromNow()}}</p>
                                </div>
                                <div class="label">
                                    <a href="#" v-for="(tag,index) in item.tag" :key="index" style="z-index:5">{{tag}}</a>
                                </div>
                            </div>
                            <div class="contentbody">
                              <div>
                                <div class="head">
                                    <h3 :title="item.title">{{item.title}}</h3>
                                </div>
                                <div class="simplecontent">
                                    <p>{{item.description}}</p>
                                </div>
                                <ul class="contentfoot">
                                    <li>
                                        <span class="iconfont icon-yanjing1"></span>
                                        <span class="active">{{item.read}}</span>
                                    </li>
                                    <li>
                                        <span class="iconfont icon-dianzan"></span>
                                        <span class="active">{{item.thumbUp}}</span>
                                    </li>
                                    <li>
                                        <span class="iconfont icon-pinglun1"></span>
                                        <span class="active">{{item.comment}}</span>
                                    </li>
                                </ul>
                                </div>
                                 <img :src="item.cover" v-if="item.cover" class="cover">
                            </div>

                        </div>

                   </div>
                  </div>
                  <div  style="padding:18px;" v-else>
                   <Skeleton width="300px" height="15px" animated></Skeleton>
                   <Skeleton width="600px" height="15px" animated></Skeleton>
                   <Skeleton width="500px" height="15px" animated></Skeleton>
                   <Skeleton width="400px" height="15px" animated></Skeleton>
                  </div>
                </div>
            </div>
            <div class="contentRight">
                <div class="first">
                    <header>
                        <div class="headLeft">
                            <i>+</i>
                            <span>晚上好!</span>
                        </div>
                        <button class="headRight">去签到</button>
                    </header>
                    <div class="footer">
                        点亮你在社区的每一天
                    </div>
                </div>
                <div class="second">
                    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1342bb1e90e54a4aadceefae35fe5164~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                        alt="图片">
                    <span class="delete">x</span>
                    <a href="#" class="change">
                        <span class="icon">投放</span>
                        <span class="icon2">广告</span>
                    </a>
                </div>
                <div class="third">
                    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b6c70fab5e446ce9b8be1678065d4e8~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                        alt="图片">
                    <span class="delete">x</span>
                    <a href="#" class="change">
                        <span class="icon">投放</span>
                        <span class="icon2">广告</span>
                    </a>
                </div>
                <div class="fourth">
                    <a href="#" class="juejinApp">
                        <div class="inner">
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
                                alt="图片">
                            <div class="left">
                                <h2>下载稀土掘金App</h2>
                                <p>一个帮助开发者成长的社区</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="fifth">
                    <header>
                        <i>+</i>
                        <span>作者榜</span>
                    </header>
                    <div class="content">
                        <div class="item">
                            <a href="#">
                                <img src="https://p3-passport.byteacctimg.com/img/user-avatar/ea29f8dff26262b09b39686e5578462f~300x300.image"
                                    alt="图片">
                                <div class="left">
                                    <h2>Urias</h2>
                                    <p>搬砖工 @ 砖厂</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/16/164a1386a8b82dbd~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
                                    alt="图片">
                                <div class="left">
                                    <h2>字节跳动技术团队</h2>
                                    <p>字节跳动</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#">
                                <img src="https://p6-passport.byteacctimg.com/img/user-avatar/d9a1a8067eb6f932b29e6482d62741f7~300x300.image"
                                    alt="图片">
                                <div class="left">
                                    <h2>0o华仔o0</h2>
                                    <p>前端开发</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#" class="footer">
                        <div class="more">
                            <span>完整榜单</span>
                            <span>></span>
                        </div>
                    </a>
                </div>
                <div class="sixth">
                    <ul class="list">
                        <li class="item">
                            <a href="#">
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png"
                                    alt="图片">
                                <span>稀土掘金漫游指南</span>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#">
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
                                    alt="图片">
                                <span>安装掘金浏览器插件</span>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#">
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png"
                                    alt="图片">
                                <span>前往掘金翻译计划</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="seventh">
                    <ul class="more">
                        <li class="item">
                            <a href="#">用户协议</a>
                        </li>
                        <li class="item">
                            <a href="#">营业执照</a>
                        </li>
                        <li class="item">
                            <a href="#">隐私政策</a>
                        </li>
                        <li class="item">
                            <a href="#">关于我们</a>
                        </li>
                    </ul>
                    <ul class="more">
                        <li class="item">
                            <a href="#">站点地图</a>
                        </li>
                        <li class="item">
                            <a href="#">使用指南</a>
                        </li>
                        <li class="item">
                            <a href="#">友情链接</a>
                        </li>
                        <li class="item">
                            <a href="#">更多文章</a>
                        </li>
                    </ul>
                    <ul class="more">
                        <li class="item">
                            <a href="#">京ICP备18012699号-3</a>
                        </li>
                    </ul>
                    <ul class="more change">
                        <li class="item">
                            <a href="#">
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png"
                                    alt="图片">
                                <span>京公网安备11010802026719号</span>
                            </a>
                        </li>
                        <li class="item">
                            <span>版权所有：北京北比信息技术有限公司</span>
                        </li>
                        <li class="item">
                            <span>公司地址：北京市海淀区信息路甲28号13层B座13B-5</span>
                        </li>
                        <li class="item">
                            <span>公司座机：010-83434395-5</span>
                        </li>
                        <li class="item">
                            <span>
                                <span>举报邮箱：</span>
                                <a href="#">feedback@xitu.io</a>
                            </span>
                        </li>
                    </ul>
                    <ul class="more">
                        <li class="item">
                            <a href="#">©2022 稀土掘金</a>
                        </li>
                    </ul>
                    <ul class="more another">
                        <li class="item">
                            <a href="#">
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png"
                                    alt="">
                            </a>
                        </li>
                        <li class="item">
                            <a href="#">
                                <img class="display"
                                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png"
                                    alt="">
                                <div class='move'>
                                    <div>微信扫一扫</div>
                                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-qr.b247fde.jpeg"
                                        alt="图片">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
      </div>
  </div>
</template>
<script>
import Nav2 from '@/components/Nav-2.vue';
import { findList } from '@/api/list';
import {  ref } from 'vue';
import Skeleton from '@/components/skeleton.vue';
import { onMounted } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat'
// import 'dayjs/locale/zh-cn'
export default {
  components: { Nav2, Skeleton },
  setup() {
    const list = ref([])
    const flag = ref(false)
    const res = []
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
        flag.value = true
        list.value = res
      }, 1000)

      })
    dayjs.extend(customParseFormat)
    dayjs.extend(relativeTime)

    const setFn = (item) => {
      localStorage.setItem('article', JSON.stringify({
        'aut_id':item.aut_id,
        'aut_name':item.aut_name,
        'aut_photo':item.aut_photo,
        'createDate':item.createDate,
        'is_followed':item.is_followed,
        'read':item.read,
        'thumbUp':item.thumbUp,
        'comment':item.comment,
      }))
    }
    return  {list,flag,dayjs,setFn}
  }
}
</script>
<style scoped lang="less">
@import url('@/style/list/font_3nva912sb1m/iconfont.css');
@import url('@/style/list/font_qg4yk42n66a/iconfont.css');
 .aaa{
  height: auto !important;
}
.body {
  margin-top: 80px;
  background-color: pink;
  // padding-top: 90px;
  max-width: 1140px;
  margin: 0 auto;
  //out:./css/
*{
    margin: 0px;
    padding: 0px;
}
button{
    outline: none;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: #909090;
}
.juejin{
    width: 100%;
    margin-top: 30px;
    background-color: #f4f5f5;
}
.nav{
    text-align: center;
    width: 100%;
    height: 60px;
    background-color: rgb(185, 138, 80);
    margin-bottom: 25px;
}
.main-box{
    margin: 0px auto;
    width: 960px;
    display: flex;
    .contentLeft{
      height: 162px;
        width: 700px;
        background-color: #fff;
        .mainContent{
           .article{
              cursor: pointer;
              // display: none;
              background-color: #fff;
              .cover{
               margin-right: 8px;
               margin-top: -6px;
                width: 120px;
                height: 80px;

              }
              .sub_content{
                flex:1;
                  padding: 12px 20px 0px 20px;
                  &:hover{
                      background-color: #fafafa;
                  }
                  .contenthead{
                      display: flex;
                      a{
                          margin-right: 10px;
                          font-size: 14px;
                          //line-height: 22px;
                          color: #4e5969;
                      }
                      .time{
                          display: flex;
                          align-items: center;
                          font-size: 13px;
                          padding: 0px 10px;
                          color: #86909c;
                          border-left: 1px solid #e5e6eb;
                          border-right: 1px solid #e5e6eb;
                          p{
                              line-height: 18px;
                          }
                      }
                      .label{
                          display: flex;
                          align-items: center;
                          margin-left: 10px;
                          a{
                              font-size: 13px;
                              color: #86909c;
                          }
                      }
                  }
                  .contentbody{
                      margin-top: 12px;
                      padding-bottom: 12px;
                      display: flex;
                      justify-content: space-between;
                      border-bottom: 1px solid #e5e6eb;
                      div{
                          margin-bottom: 8px;
                      }
                      .head{
                          display: flex;
                          align-items: center;
                          font-weight: 700;
                          font-size: 16px;
                          margin-bottom: 8px;
                      }
                      .simplecontent{
                          margin-bottom: 10px;
                          p{
                              color: #86909c;
                              font-size: 13px;
                          }
                      }
                      .contentfoot{
                          display: flex;
                          align-items: center;
                          li{
                              display: flex;
                              line-height: 24px;
                              margin-right: 20px;
                              color: #4e5969;
                              font-size: 13px;
                              #unique{
                                  color: #fff;
                              }
                              .active{
                                  display: inline-block;
                                  margin-left: 5px;
                                  color: #4e5969;
                                  font-size: 13px;
                              }
                              &:hover:not(:first-child){
                                  span{
                                      color: #1d7dfa;
                                  }
                              }
                          }
                      }
                  }
              }
            }
        }
        header{
            padding: 15.6px 12px;
            border-bottom: 1px solid hsla(0,0%,59.2%,.1);
            nav{
                display: flex;

                .list{
                    position: relative;
                    display: flex;
                    align-items: center;
                    line-height: 1;
                    .item{
                        padding: 0px 14.4px;
                        font-size: 14px;
                        color: #909090;
                        border-right: 1px solid hsla(0,0%,59.2%,.2);
                    }
                    .last{
                        border: 0px;
                    }
                }
                .choose{
                    display: none;
                    width: 84px;
                    height: 21px;
                    select{
                        width: 84px;
                        height: 21px;
                        outline: none;
                        border: 1px solid #ebebeb;
                        font-weight: 400;
                        color: #909097;
                        &:hover{
                            background-color: #fafafb;
                        }
                    }
                }
            }
        }
    }
    .contentRight{
        width: 240px;
        margin-left: 20px;
        .first{
            background-color: #fff;

            margin-bottom: 16px;
            padding: 16px;
            header{
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                .headLeft{
                    display: flex;
                    i{
                        margin-right: 10px;
                    }
                    span{
                        margin-top: 2px;
                        color: #1d2129;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }
                .headRight{
                    border: 1px solid #1e80ff;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                    height: 32px;
                    width: 72px;
                    color: #1e80ff;
                    font-size: 14px;
                    font-weight: 400;
                    &:hover{
                        background-color: #e8f3ff;
                        color: #388eff;
                    }
                }
            }
            .footer{
                margin-bottom: 2px;
                margin-left: 36px;
                color: #4e5969;
                font-size: 14px;
                font-weight: 400;
                display: flex;
                align-items: center;
            }
        }
        .second{
            position: relative;
            width: 240px;
            height: 200px;
            margin-bottom: 15.6px;
            img{
                width: 240px;
                height: 200px;
            }
            .delete{
                position: absolute;
                font-size: 1.4rem;
                color: #909090;
                opacity: .5;
                top: 0px;
                right: 6px;
                display: none;
            }
            .change{
                position: absolute;
                right: 16px;
                bottom: 10px;
                line-height: 20px;
                height: 20px;
                font-size: 12px;
                color: #fff;
                background-color: rgba(0, 0, 0, .2);
                border: 1px solid #fff;
                border-radius: 6px;
                padding:0px 10px;
                .icon{
                    display: none;
                }
                &:hover{
                    .icon{
                        display: inline-block;
                    }
                }
            }
            &:hover{
                .delete{
                    display: block;
                }
            }
        }
        .third{
            position: relative;
            width: 240px;
            height: 200px;
            margin-bottom: 15.6px;
            img{
                width: 240px;
                height: 200px;
            }
            .delete{
                position: absolute;
                font-size: 1.4rem;
                color: #909090;
                opacity: .5;
                top: 0px;
                right: 6px;
                display: none;
            }
            .change{
                position: absolute;
                right: 16px;
                bottom: 10px;
                line-height: 20px;
                height: 20px;
                font-size: 12px;
                color: #fff;
                background-color: rgba(0, 0, 0, .2);
                border: 1px solid #fff;
                border-radius: 6px;
                padding:0px 10px;
                .icon{
                    display: none;
                }
                &:hover{
                    .icon{
                        display: inline-block;
                    }
                }
            }
            &:hover{
                .delete{
                    display: block;
                }
            }
        }
        .fourth{
            background-color: #fff;
            margin-bottom: 15.6px;
            a{
                .inner{
                    display: flex;
                    padding: 12px;
                    img{
                        margin-right: 16px;
                        height: 50px;
                        width: 50px;
                    }
                    .left{
                        h2{
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 22px;
                            color: #1d2129;
                        }
                        p{
                            display: inline-block;
                            font-size: 12px;
                            line-height: 20px;
                            color: #86909c;
                            margin-top: 8px;
                        }
                    }
                }
            }
        }
        .fifth{
            margin-bottom: 15.6px;
            background-color: #fff;
            header{
                padding: 12px 15.6px;
                border-bottom: 1px solid hsla(0,0%,59.2%,.1);
            }
            .content{
                .item{
                    padding: 12px 15.6px;
                    &:hover{
                        background-color: hsla(0,0%,84.7%,.1);
                    }
                    a{
                        display: flex;
                        align-items: center;
                        img{
                            flex: 0 0 auto;
                            height: 46px;
                            width: 46px;
                            border-radius: 100%;
                            margin-right: 6px;
                        }
                        .left{
                            h2{
                                font-size: 14px;
                                font-weight: 400;
                                color: #333;
                                margin-bottom: 3px;
                            }
                            p{
                                color: #909090;
                                font-size: 13px;
                                margin-bottom: 3px;
                            }
                        }
                    }
                }
            }
            .footer{
                .more{
                    color: #007fff;
                    padding: 12px 0;
                    text-align: center;
                    border-top: 1px solid hsla(0,0%,59.2%,.1);
                }
            }
        }
        .sixth{
            background-color: #fff;
            margin-bottom: 15.6px;
            .list{
                .item{
                    padding: 12px;
                    a{
                        display: flex;
                        align-items: center;
                        height: 100%;
                        img{
                            height: 36px;
                            width: 36px;
                            margin-right: 9.6px;
                        }
                        span{
                            font-size: 14px;
                            color: #333;
                            line-height: 1;
                        }
                    }
                    &:hover{
                        background-color: hsla(0,0%,84.7%,.1);
                    }
                }
            }
        }
        .seventh{
            .more{
                display: flex;
                font-size: 12.5px;
                line-height: 1.6;
                color: #9aa3ab;
                .item{
                    margin-right: 8px;
                    a{
                        img{
                            vertical-align: middle;
                            height: 20px;
                            width: 20px;
                        }
                        span{
                            line-height: 10px;
                        }
                        &:hover{
                            color: #007fff;
                        }
                    }
                }
            }
            .change{
                flex-direction: column;
            }
            .another{
                justify-content: flex-start;
                margin: 12px 0;
                .item{
                    float: left;
                    position: relative;
                    a{
                        .move{
                            position: absolute;
                            top: 100%;
                            left: -100%;
                            padding: 9.6px 0 0;
                            display: none;
                            border: 1px solid #ddd;
                            transform: translate(-24px);
                            background-color: #fff;
                            color: #909090;
                            width: 124px;
                            text-align: center;
                            img{

                                width: 100%;
                                height: 120px;
                            }
                        }
                        img{
                            height: 24px;
                            width: 24px;
                        }
                        &:hover{
                            .move{
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
}
}

</style>
