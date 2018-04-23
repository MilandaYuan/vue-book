<template>
  <div>
    <MHeader>购物车</MHeader>
    <div class="content">
      <ul>
        <li v-for="(book,index) in cartList">
          <div class="checkbox-container">
            <input type="checkbox">
          </div>
          <div class="img-container">
            <img v-lazy="book.bookCover" alt="">
          </div>
          <div class="info-container">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>

            </div>
            <div class="info-number-container">
              <b>￥{{book.bookPrice}}</b>
              <div>
                <button @click.stop="reduceCount(book)">-</button>
                {{book.bookCount}}
                <button @click.stop='increaseCount(book)'>+</button>
              </div>
            </div>

          </div>
        </li>
      </ul>


    </div>
    <div class="total-container">
      <div class="checkAll">
        <input type="checkbox">全选
      </div>
      <div>
        合计：{{total | toFixed(2)}}
        <button>结算</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'
  import * as Types from '../store/mutations-type'
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: "collect",
    filters:{
      toFixed(number,param){
        return '￥'+number.toFixed(param)
      }
    },
    data() {
      return {
        // cartList: this.$store.state.cartList,
      }
    },
    computed: {
      ...mapGetters(['total']),
      ...mapState(['cartList'])
    },
    methods: {
      reduceCount(book) {
        this.$store.commit(Types.REDUCE_COUNT, book)
      },
      increaseCount(book) {
        this.$store.commit(Types.INCREASE_COUNT, book)
      },
    },
    components: {
      MHeader
    },
    mounted(){
      console.log('lalala')
    },
    watch: {
      cartList:function(newList, oldList){
        console.log('hahah')
        console.log(newList)
      },
    }
  }
</script>

<style scoped lang="less">
  .content {
    ul {
      padding: 10px;
      li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
        .checkbox-container {
          width: 10%;
          -webkit-appearance: checkbox;
        }
        .img-container {
          width: 30%;
          img {
            max-width: 100%;
          }
        }
        .info-container {
          width: 60%;
          line-height: 25px;
          b {
            color: orange;
          }
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info-number-container {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }

  }

  .total-container {
    .checkAll {
      -webkit-appearance: checkbox;
      height: 100%;
    }
    background: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    width: 100%;
    position: fixed;
    bottom: 50px;
    border-top: 1px solid #ccc;

  }
</style>




