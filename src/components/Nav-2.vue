<template>
     <!-- 下导航栏 -->
      <nav class="view_nav">
        <div class="nav_list">
            <a href="#" class="nav_item zonghe">综合</a>
            <a href="#" class="nav_item">关注</a>
            <a href="#" class="nav_item">后端</a>
            <a href="#" class="nav_item">前端</a>
            <a href="#" class="nav_item">Android</a>
            <a href="#" class="nav_item">iOS</a>
            <a href="#" class="nav_item">人工智能</a>
            <a href="#" class="nav_item">开发工具</a>
            <a href="#" class="nav_item">代码人生</a>
            <a href="#" class="nav_item">阅读</a>
            <a href="#/subscribe/subscribed" class="nav_item item_right">标签管理</a>
        </div>
      </nav>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
  .view_nav {
    position: sticky;
    top: 0;
    width: 100%;
    height: 45px;
    width: 100%;
    transition: all .2s;
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
    z-index: 6;
    /* overflow: hidden; */


}

.view_nav .nav_list {
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
}

.view_nav .nav_list .nav_item {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding: 0 10px;
    margin: 0;
    text-decoration: none;
    color: #86909c;
}

.view_nav .nav_list .nav_item:hover,
.shouye,
.view_nav .nav_list .zonghe {
    color: #007fff;
}

.item_right {
    position: absolute;
    right: 0;
}

.box {
    background-color: #007fff;
    height: 1000px;

}

.clear {
    clear: both;
}
</style>
