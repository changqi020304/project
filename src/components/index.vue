<template>
  <div class="warp">
    <h1>{{name}}字体</h1>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name:"常勇博小朋友",
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  color: red;
  font-size: 50px;
}
</style>
