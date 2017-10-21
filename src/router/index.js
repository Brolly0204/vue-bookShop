import Vue from 'vue';
import Router from 'vue-router';
import Home from '../containers/Home';
import List from '../containers/List';
import Add from '../containers/Add';
import Update from '../containers/Update';

Vue.use(Router);
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
});
