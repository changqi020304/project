<template>
  <div class="warp">
    <div class="content">
      <div class="items" v-for="(v,i) in datalist" :key="i">
        <span>{{v.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  props: ["datalist"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.warp {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  color: white;
  background-color: #25252f;
  height: 135px;
  z-index: 9999;
  .content {
    display: flex;
    justify-content: space-around;
    line-height: 135px;
    align-items: center;
    .items {
      span {
        font-size: 50px;
      }
    }
  }
}
</style>