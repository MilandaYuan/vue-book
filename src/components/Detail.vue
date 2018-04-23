<template>
  <div class="detail">
    <m-header :back="true">详情页</m-header>
    <ul>
      <li>
        <label for="bookName">书的名字</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookInfo">书的介绍</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <label for="bookCover">书的封面</label>
        <input type="text" v-model="book.bookCover" id="bookCover">
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <button @click="update">确认修改</button>
      </li>


    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import {getOneBook,updateBook} from "../api";

  export default {
    name: "detail",
    created() {
      this.getBook()
    },
    data() {
      return {
        book: {}
      }
    },
    methods: {
      async getBook() {
        this.book = await getOneBook(this.bid)
      },
      async update(){
        await updateBook(this.bid,this.book)
        this.$router.push('/list')
      }
    },
    computed:{
      bid(){
        return this.$route.params.bid;
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index: 100;
    ul{
      margin: 50px 20px 0 20px;
      li{
        label{
          display: block;
          line-height: 25px;
        }
        input{
          width: 100%;
          margin: 10px 0;
          height: 25px;
        }
      }
    }
  }
</style>
