<template>
    <div id="update" class="update">
      <m-header title="修改" :back="true"></m-header>
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
             <el-button style="width: 100%" type="info" @click="update">修改</el-button>
           </el-form-item>
         </el-form>
       </scroll-wrapper>
    </div>
</template>

<script>
  import MHeader from '../components/Header';
  import { getBookId, updateBook } from '../api';
  import { mapActions } from 'vuex';
  export default {
    name: 'update',
    data() {
      return {
        book: {
          bookCover: '',
          bookName: '',
          bookPrice: '',
          bookInfo: '',
          id: ''
        }
      };
    },
    components: {
      MHeader
    },
    created() {
      this._getBookId();
    },
    activated() {
      this._getBookId();
    },
    methods: {
      ...mapActions(['updateBooks']),
      _getBookId() {
        console.log(this.$route.params.id);
        getBookId(this.$route.params.id).then(res => {
          this.book = res.data;
        }).catch(err => {
          throw new Error(err);
        });
      },
      update() {
        updateBook(this.book).then(res => {
          this.updateBooks(res.data);
          this.$message({
            type: 'success',
            message: '修改成功',
            onClose: () => {
              this.$router.push('/list');
            }
          });
        }).catch(err => {
          throw new Error(err);
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .update {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
