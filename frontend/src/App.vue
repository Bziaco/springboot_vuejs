<template>
  <div id="app">
    <navigation></navigation>
    <app-nav>
      <nav class='gnb'>
        <ul class="menu-bar">
          <li><router-link to="/login">로그인</router-link></li>
          <li><router-link to="/signup">회원가입</router-link></li>
        </ul>
      </nav>
    </app-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import router from './router'
import navigation from './components/navigation'
export default {
  name: 'app',
  component: {
    appNav: navigation
  },
  mounted () {
    router.push(
      {
        name: 'login',
        params: {'id': 'test'}
      }
    )
  }
}
</script>
