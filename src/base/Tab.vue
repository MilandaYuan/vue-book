<template>
  <div class="footer">
    <router-link to="/home"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
    <router-link to="/list"><i class="iconfont icon-liebiaoyemian"></i><span>列表</span></router-link>
    <router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>购物车</span></router-link>
    <router-link to="/add"><i class="iconfont icon-add"></i><span>添加</span></router-link>

  </div>
</template>

<script>
  export default {
    name: "tab"
  }
</script>

<style scoped lang="less">
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: grey;

  }
  a.router-link-active{
    color: darkorange;
  }
}
</style>
