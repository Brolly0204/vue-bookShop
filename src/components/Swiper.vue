<template>
    <swiper :options='swiperOption' class="swiper">
      <swiper-slide v-for='(slider, index) in swiperSlides' :key="index">
         <img :src="slider.img"  style="width: 100%; height: 100%">
      </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
export default {
  name: 'carrousel',
  props: {
    swiperSlides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3500,
        loop: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        observeParents: true,
        autoplayDisableOnInteraction: false
      }
    };
  }
};
</script>

<style lang='css'>
  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
