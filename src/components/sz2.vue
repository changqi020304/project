<template>
  <div id="app">
    <div class="box">
      <headertop :datalist="headertop"></headertop>
      <!-- <div class="header">
        <p>&lt;</p>
        <p class="pp">关于</p>
        <p></p>
      </div> -->
      <div class="imgs">
        <img class="imga" src="../assets\sz-4.png" alt="">
        <div class="log">
          369
        </div>
      </div>
      <div class="centent">
          <ul>
            <li>369Cloud</li>
            <li>打造移动互联网第一研发生态圈</li>
            <li>V1,0,0</li>
          </ul>
      </div>
     

    </div>

  </div>
</template>

<script>
import headertop from "./pages/headertop";
export default {
  components: { headertop },
  name: "box",
  data() {
    return {
      headertop: [{ title: "<" }, { title: "关于" }, { title: " " }]
    };
  },
  methods: {}
};
</script>

<style>
.box {
  display: flex;
  height: 100%;
  height: 1920px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.header {
  width: 100%;
  height: 190px;
  background: #494961;
  display: flex;
}
.header p {
  flex: 1;
  color: #fff;
  font-size: 50px;
  line-height: 190px;
}
.header p:first-child {
  text-align: left;
  padding-left: 30px;
  font-size: 80px;
}
.pp {
  text-align: center;
}
.imga {
  width: 100%;
  height: 100%;
}
.imgs {
  width: 100%;
  height: 50%;
  position: relative;
}
.log {
  width: 300px;
  height: 300px;
  background: linear-gradient(to top, skyblue, #5098ea);
  border-radius: 50px;
  position: absolute;
  top: 30%;
  left: 35%;
  color: #fff;
  font-size: 100px;
  text-align: center;
  line-height: 300px;
}
.centent {
  width: 770px;
  height: 390px;
  margin: 0 auto;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
}
</style>
