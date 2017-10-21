<template>
  <div id="app" class="page">
    <div class="content">
      <transition name="slide">
        <keep-alive>
          <router-view style="position: fixed;width: 100%;top: 0;left: 0"></router-view>
        </keep-alive>
      </transition>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    NavBar
  }
};
</script>
<style lang="less" scoped>
  .page {
    width: 100%;
    height: 100%;
    .content {
      position: fixed;
      left: 0;
      top: 40px;
      bottom: 61px;
      width: 100%;
    }
    .slide-enter-active {
      transition: all .2s linear;
    }

    .slide-leave-active {
      transition: all .2s linear .3s;
    }
    .slide-enter, .slide-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
