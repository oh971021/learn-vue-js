<template>
  <!-- Root Div -->
  <form v-on:submit.prevent="submitForms">
    <!-- User ID -->
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <!-- Password -->
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <!-- Form 에서 입력을 받음 
      => Submit은 Form Action 으로 데이터를 보내주고 화면 새로고침이 됨
    -->
    <button type="submit">Login</button>
  </form>
</template>

<script>
/* npm axios 설치 후 사용하기 위한 Import
  1. HTTP 통신을 위한 라이브러리 (Rest API)
*/
import axios from 'axios';

export default {
  // Component 간에 데이터가 공유되지 않도록 객체로 작성
  data: function() {
    return {
      username: '', // String Type
      password: '',
    }
  },
  methods: {
    submitForms: function() {
      // event.preventDefault(); // 새로고침 막기 (JS 에서 처리하던 방식)
      console.log(this.username, this.password);

      // 오픈 제이슨 데이터 (https://jsonplaceholder.typicode.com/)
      var url = 'https://jsonplaceholder.typicode.com/Users'; // Request URL
      var data = { // Request DATA
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      // 통신 성공시
        .then(function(response) {
          console.log(response);
        })
      // 통신 실패시
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>