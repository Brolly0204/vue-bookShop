<template>
  <div id="list" class="list">
    <m-header title="列表"></m-header>
    <scroll-wrapper ref="scrollWrapper" :isClick="isClick">
      <ul class="bookList" v-if="bookLists.length">
        <li v-for="book in bookLists">
          <img v-lazy="book.bookCover" alt="">
          <div class="context">
            <h3>{{book.bookName}}</h3>
            <p class="info">{{book.bookInfo}}</p>
            <strong class="price">{{book.bookPrice | currency}}</strong>

            <div class="btn-group">
              <el-button type="danger" @click.stop="remove($event, book.id)">删除</el-button>
             <router-link
               tag="button"
               class="el-button el-button--info" :to="{name: 'Update', params: {id: book.id}}">
               修改
             </router-link>
            </div>
          </div>
        </li>
      </ul>
      <Loading v-else></Loading>
    </scroll-wrapper>>
  </div>
</template>
<script>
import MHeader from '../components/Header';
import {mapState, mapActions} from 'vuex';
import { getBook, removeBook } from '../api';
export default {
  name: 'list',
  data: () => ({
    isClick: true
  }),
  created() {
    setTimeout(() => {
      this._getBooks();
    }, 1000);
  },
  activated() {
    this._getBooks();
    this._refresh();
  },
  computed: {
    ...mapState(['bookLists'])
  },
  methods: {
    ...mapActions(['saveBookList', 'deleteBook']),
    _getBooks() {
      getBook().then(res => {
        this.saveBookList(res.data.books);
        this.$nextTick(() => {
          this._initScroll();
        });
      }).catch(err => {
        console.log(err);
      });
    },
    _initScroll() {
      this.$refs.scrollWrapper.initScroll();
    },
    _refresh() {
      this.$nextTick(() => {
        console.log('refresh');
        if (this.$refs.scrollWrapper.scroll) {
          this.$refs.scrollWrapper.scroll.refresh();
        }
      });
    },
    remove(e, id) {
      if (!e._constructed) {
        return;
      }
      removeBook(id).then(res => {
        if (res.data.errno === 0) {
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.deleteBook(id); // 删除store中这一项
          this._refresh();
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          });
        }
      }).catch(err => {
        throw new Error(err);
      });
    }
  },
  components: {
    MHeader
  }
};
</script>
<style lang="less" scoped>
  .list {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .bookList {
      padding: 15px;
      li:last-child {
        border-bottom: none;
      }
      li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid rgba(145, 145, 145, 0.3);
        img {
          width: 150px;
          height: 130px;
        }
        div.context {
          display: flex;
          flex: 2;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 15px;
          font-size: 18px;
          .info {
            color: #666;
            font-size: 16px;
          }
          .price {
            color: red;
          }
          .btn-group {
            width: 100%;
            display: flex;
            button {
              width: 75px;
            }
          }
        }
      }
    }
  }
</style>
