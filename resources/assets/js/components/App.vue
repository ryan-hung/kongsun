<template>
    <app-header></app-header>
    <div id="app">
        <router-view></router-view>
    </div>
    <app-footer></app-footer>
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