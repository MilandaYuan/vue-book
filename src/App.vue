<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab';
  import * as Types from './store/mutations-type'

  export default {
    name: 'App',
    components: {
      Tab
    },
    mounted(){
      this.$store.commit(Types.ADD_TO_CART,{
        "bookCover":"https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg",
        "bookName":"Vue.js权威指南",
        "bookInfo":"与React|Angular三分天下 ",
        "bookPrice":78.2222222,
        "bookId":1
      });
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
  }

  .content {
    position: fixed;
    top: 40px;
    bottom: 50px;
    overflow: auto;
    width: 100%;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.3s linear;
    opacity: 0;
  }
</style>
