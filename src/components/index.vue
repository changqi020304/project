<template>
  <div class="warp">
    <headertop :datalist="headerList"></headertop>
    <div class="content">

    </div>
    <footerft :datalist="footerList"></footerft>
  </div>
</template>

<script>
import headertop from "./pages/headertop";
import footerft from "./pages/footerft";
export default {
  name: "index",
  components: {
    footerft,
    headertop
  },
  data() {
    return {
      headerList: [{ title: "<" }, { title: "我的" }, { title: " " }],
      footerList: [
        {
          tb: "",
          title: "商城"
        },
        {
          tb: "",
          title: "分类"
        },
        {
          tb: "",
          title: "购物车"
        },
        {
          tb: "",
          title: "我的"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.warp {
}
</style>
