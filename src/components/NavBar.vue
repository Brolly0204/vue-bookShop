<template>
    <nav>
      <router-link to='/home'>
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to='/list'>
        <i class="iconfont icon-liebiaoyetuanqi"></i>
        <span>列表</span>
      </router-link>
      <router-link to='/add'>
        <i class="iconfont icon-tianjiayemian"></i>
        <span>添加</span>
      </router-link>
    </nav>
</template>
<script>
export default {
  name: 'nav',
  data: () => ({

  })
};
</script>
<style scoped lang="stylus">
  nav
    position fixed
    bottom 0
    left 0
    width 100%
    height 60px
    display flex
    border-top 1px solid rgba(202, 202, 202, 0.3)
    z-index 111
    background-color #fff
    a
      flex 1
      display flex
      flex-direction column
      align-items center
      justify-content center
    .router-link-active
      color #2aabd2
</style>
