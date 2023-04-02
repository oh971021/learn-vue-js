<template>
<!-- HTML 최상위는 하나만 있어야함. -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
  </div>
  <!-- <div></div> : Root는 하나만 있어야 함. -->
</template>

<script>
// 작업한 Components 불러오기
import AppHeader from './components/AppHeader.vue';

// var AppHeader = {
//   template: '<div><h1>Header</h1></div>'
// }

export default {
  // 컴포넌트에서 데이터 중복을 처리하기 위해 함수로 객체를 처리함
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() { // str 변수 변경 메소드
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>