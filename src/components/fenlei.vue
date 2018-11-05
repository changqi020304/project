<template>
  <div class="warp">
    <mt-header title="">
        <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
        <mt-button icon="more" slot="right">555</mt-button>
    </mt-header>
  </div>
</template>

<script>
import { Header } from "mint-ui";

Vue.component(Header.name, Header);
export default {
  name: "index",
  components: {
    headertop
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.warp {
}
</style>
