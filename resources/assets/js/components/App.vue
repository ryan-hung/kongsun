<template>
    <div>
        <app-header></app-header>
    </div>
    <div id="app">
        <h1 class="text-danger">111111</h1>
        <router-view></router-view>
    </div>
    <div>
        <app-footer></app-footer>
    </div>
    
</template>
<script>
import AppHeader from './layout/AppHeader.vue'
import AppFooter from './layout/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  replace: false
}
</script>