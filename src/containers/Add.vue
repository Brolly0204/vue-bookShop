<template>
  <div id="add">
    <m-header title="添加"></m-header>
    <scroll-wrapper>
      <el-form style="margin: 20px">
        <el-form-item label="图书名称">
          <el-input v-model="book.bookName"></el-input>
        </el-form-item>
        <el-form-item label="图书封面">
          <el-input v-model="book.bookCover"></el-input>
        </el-form-item>
        <el-form-item label="图书信息">
          <el-input v-model="book.bookInfo"></el-input>
        </el-form-item>
        <el-form-item label="图书价格">
          <el-input v-model="book.bookPrice"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="info" @click="addBooks">添加</el-button>
        </el-form-item>
      </el-form>
    </scroll-wrapper>
  </div>
</template>
<script>
import MHeader from '../components/Header.vue';
import { addBook } from '../api';
export default {
  name: 'add',
  data: () => ({
    isShow: false,
    book: {
      bookCover: '',
      bookName: '',
      bookPrice: '',
      bookInfo: ''
    }
  }),
  methods: {
    _addReq() {
      addBook(this.book).then(res => {
        if (res.data.errno === 0) {
          this.$message({
            message: '添加成功',
            type: 'success',
            onClose: () => {
              this.$router.push('/list');
            }
          });
          this.book = {
            bookCover: '',
            bookName: '',
            bookPrice: '',
            bookInfo: ''
          };
        } else {
          this.$message({
            message: '添加失败',
            type: 'error'
          });
        }
      }).catch(err => {
        throw new Error(err);
      });
    },
    addBooks() {
      let { bookCover, bookName, bookPrice, bookInfo } = this.book;
      if (!bookCover || !bookName || !bookPrice || !bookInfo) {
        return this.$message({
          type: 'warning',
          message: '请将信息填写完整'
        });
      }
      this._addReq();
    }
  },
  components: {
    MHeader
  }
};
</script>
<style lang="less" scoped>
  #add {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>

