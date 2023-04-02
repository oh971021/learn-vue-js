import Vue from 'vue'
import App from './App.vue' // Component File

Vue.config.productionTip = false

// var App = { 위 컴포넌트 파일 임포트한거랑 같은 역할
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   // Vue 내부적으로 사용하는 함수
//   // 템플릿이라는 속성을 정의했을 때, 렌더함수가 실행 됨.
//   render: h => h(App),
    // components: {
    //   'app': App
    // }
// })