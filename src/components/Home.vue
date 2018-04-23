<template>
  <div>
    <Loading v-if="loading"></Loading>
    <template v-else>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>最新图书</h3>
        <ul>
          <li v-for="book in hotBooks">
            <img :src="book.bookCover" alt="">
            <b>{{book.bookName}}</b>
          </li>
        </ul>

      </div>
    </div>
    </template>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import Swiper from '../base/Swiper'
  import Loading from  '../base/Loading'
  import {getAll} from '../api'

  export default {
    name: "home",
    created() {
      this.getData()
    },
    data() {
      return {
        sliders: [],
        hotBooks: [],
        loading:true
      }
    },
    methods: {
      async getData() {
        let [sliders,hotBooks]=await getAll();
        this.sliders = sliders;
        this.hotBooks = hotBooks
        this.loading = false
      }
    },
    components: {
      MHeader,
      Swiper,
      Loading
    },
  }
</script>

<style scoped lang="less">
  .container {
    text-align: center;
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
