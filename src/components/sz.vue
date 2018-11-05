<template>
  <div id="app">
    <div class="box">
      <div class="header">
        <p>&lt;</p>
        <p>意见反馈</p>
        <p @click="aa">发送</p>
      </div>
      <div class="center">
        <textarea style="overflow-y:scroll" name="" id="" cols="100%" rows="20" placeholder="请输入反馈,我们将为您不断改进">
        </textarea>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "box",
  methods:{
    aa(){
      alert('反馈成功！我们会更加努力');
    }
  }
};
</script>

<style>
.box {
  display: flex;
  height: 100%;
  height: 1920px;
  border: 2px solid orange;
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
  text-align: center;
  line-height: 190px;
}
.header p:first-child {
  text-align: left;
  padding-left: 30px;
  font-size: 80px;
}
.header p:last-child {
  font-size: 40px;
  font-weight: normal;
  cursor: pointer;
}
.center {
  width: 600px;
  height: 500px;
  display: flex;
  margin: 100px auto;
  background: #ccc;
}
textarea {
  background: #f4f4f4;
  font-size: 30px;
}
</style>
