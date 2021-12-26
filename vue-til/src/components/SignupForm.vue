<template>
  <!-- 버튼에 걸린 submit은 이벤트 버블링으로 인해서 폼까지 이벤트가 전파 된다. 
    v-on:submit으로 이벤트를 받을 수 있고, 
    v-on: 은 @와 같다 
    ++ .prevent 폼의 기본 동작인 제출하고 새로고침 하는 것을 막을 수 있다. 
 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <!-- v-model : input 값을 감지 -->
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      // form vallues
      username: '',
      password: '',
      nickname: '',

      //log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('폼 제출');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      //   const response = await registerUser(userData);
      //   console.log(response.data);

      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username} 님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
