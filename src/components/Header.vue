<template>
  <div id="header" class="header">
    {{title}}
    <i v-if="back" class="iconfont icon-fanhui" @click="goBack()"></i>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      this.$router.history.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 45px;
    text-align: center;
    background-color: #28c2ff;
    color: #fff;
    z-index: 111;
    i {
      height: 40px;
      line-height: 40px;
      position: absolute;
      left: 0;
      padding: 0 15px;
      box-sizing: border-box;
    }
  }
</style>
