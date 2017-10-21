import Vue from 'vue';
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import router from './router';
import './common/index.less';
import 'swiper/dist/css/swiper.css';
import ScrollWrapper from './components/ScrollWrapper';
import Loading from './components/Loading.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueLazyload from 'vue-lazyload';
import store from './store';

Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://cdn.uehtml.com/201402/1392662524764_1140x0.gif',
  attempt: 1
});

Vue.component('scroll-wrapper', ScrollWrapper);
Vue.component('Loading', Loading);

Vue.filter('currency', input => {
  return '$' + parseFloat(input).toFixed(2);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
