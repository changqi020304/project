<template>
  <div class="warp">
    <div class="content">
      <div class="item" v-for="(v, i) in datalist" :key="i">
        <span>
          {{v.tb}}
        </span>
        <span>
          {{v.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerft",
  data() {
    return {};
  },
  props: ["datalist"]
};
</script>

<style scoped lang="less">
.warp {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  color: white;
  background-color: #25252f;
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 135px;
  }
}
</style>