<template>
  <div class="scroll-content" ref='scroll'>
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  name: 'scroll',
  props: {
    isClick: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initScroll() {
      /* eslint-disable no-new */
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: this.isClick
        });
      } else {
        this.scroll.refresh();
      }
    }
  }
};
</script>
<style scoped>
  .scroll-content {
    position: fixed;
    left: 0;
    top: 40px;
    bottom: 61px;
    width: 100%;
    z-index: 50;
    overflow: hidden;
  }

</style>
