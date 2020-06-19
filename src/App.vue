<template>
  <div id="app">
    <commonTopbar ref="header" v-if="$route.meta.keepAlive"></commonTopbar>
    <router-view />
    <commonFooter v-if="$route.meta.keepAlive"></commonFooter>
  </div>
</template>

<script>
import commonTopbar from './components/Common/header.vue'
import commonFooter from './components/Common/footer.vue'
export default {
  name: 'App',
  components: {
    commonTopbar,
    commonFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body {
  background: #f6f6f8;
  font-size: 14px;
}
.min-width {
  width: 1200px;
  margin: 0 auto;
}
</style>
