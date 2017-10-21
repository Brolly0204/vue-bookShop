<template>
  <div id="home" class="home">
    <m-header title="首页"></m-header>
      <scroll-wrapper ref='scrollWrapper'>
        <div class="content">
          <div class="slider-wrapper">
            <swiper :swiperSlides='sliders' v-if='sliders.length'></swiper>
            <loading v-else></loading>
          </div>
          <h3>最新上架</h3>
          <ul class="hot-list" v-if='books.length'>
            <li  v-for="(book, index) in books" :key="index">
              <img v-lazy="book.bookCover" alt="">
              <span>{{book.bookName}}</span>
              <b>{{book.bookPrice | currency}}</b>
            </li>
          </ul>
          <loading v-else></loading>
        </div>
      </scroll-wrapper>
  </div>
</template>
<script>
import MHeader from '../components/Header.vue';
import Swiper from '../components/Swiper';
import { getSlider, getBook } from '../api';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {};
  },
  computed: {
    ...mapState(['sliders', 'books'])
  },
  created() {
    this._getSlider();
    this._getBook();
  },
  destroyed() {
    console.log('destroyed');
  },
  deactivated() {
    // console.log('deactivated');
  },
  activated() {
    this._getBook();
    if (this.$refs.scrollWrapper.scroll) {
      this.$refs.scrollWrapper.scroll.refresh();
    }
  },
  methods: {
    ...mapActions(['saveSlider', 'saveBook']),
    _initScroll() {
      this.$refs.scrollWrapper.initScroll();
    },
    _getSlider() {
      getSlider().then(res => {
        let { sliders } = res.data;
        this.saveSlider(sliders);
      }).catch(err => {
        console.log(err);
      });
    },
    _getBook() {
      getBook().then(res => {
        let { books } = res.data;
        this.saveBook(books.slice(0, 6));
        this.$nextTick(() => {
          this._initScroll();
        });
      }).catch(err => {
        console.log(err);
      });
    }
  },
  components: {
    MHeader,
    Swiper
  }
};
</script>
<style lang="less" scoped>
  .home {
    height: 100%;
    background-color: #fff;
    .slider-wrapper {
      position: relative;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
    }
    h3 {
      margin-top: 10px;
      padding-left: 20px;
      line-height: 35px;
      font-weight: normal;
    }
    .hot-list {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        padding-top: 10px;
        align-items: center;
        flex-direction: column;
        width: 50%;
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
</style>
