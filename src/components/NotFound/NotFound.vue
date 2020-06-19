<template>
  <div>
    <img :src="imgUrl">
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: require('../../assets/images/notfound.png')
    }
  },

  components: {},

  methods: {}
}
</script>

<style scoped>
img {
  display: block;
  margin: 80px auto;
  /* border:1px solid red; */
}
</style>
