<template>
  <div id="app">
   <commonTopbar ref="header"></commonTopbar>
    <router-view/>
    <commonFooter></commonFooter>
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
}
</script>

<style>
    body{
        background:#F6F6F8;
        font-size: 14px;
    }
     .min-width{
      width:1200px;
      margin:0 auto;
  }
</style>
