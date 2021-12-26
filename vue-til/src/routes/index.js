import Vue from 'vue';
import VueRouter from 'vue-router';

//플러그인 실행, 초기화
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // url # 제거
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*', // 위의 url 을 제외한 모든 것에 반응
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
