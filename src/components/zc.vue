<template>
  <div class="warp">
    <div class="header">
      <span class="sps">&lt; </span>
      <h1>{{msg}}</h1>
      <h1></h1>
    </div>
    <div class="content">
      <form action="" class="form">
		        <p><span>{{sjh}}：</span><input  type="text" maxlength="11" v-model="one"><i @click="inline">{{yz}}</i></p>
		        <p><span>{{yzm}}：</span><input type="text" maxlength="4" ><span class="pic" id="pic"></span><span></span></p>
		        <p><span>{{password}}：</span><input type="text" maxlength="6" ><span></span></p>
            <p><span>{{zfpw}}</span><input type="text"><span></span></p>
            <p><span>{{nc}}</span><input type="text"><span></span></p>
	    </form>
            <p @click="btn" class="spss"><span>{{zce}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "first",
  data() {
    return {
      one: "",
      msg: "注册",
      sjh: "手机号",
      yzm: "验证码",
      yz: "获取验证码",
      password: "密码",
      zfpw: "重复密码",
      nc: "昵称",
      zce: "注册"
    };
  },
  methods: {
    btn() {
      this.$router.push("./index");
      var phoneVal = this.one;
      console.log(phoneVal);
      var exp = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!exp.test(phoneVal)) {
        alert("手机号填写有误...");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.warp {
  background: #f3f2f2;
}
.header {
  width: 100%;
  height: 184px;
  background: #494961;
  font-size: 62px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sps {
  color: white;
  font-size: 50px;
}
h1 {
  color: white;
  font-size: 50px;
} 
.content {
  width: 80%;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: white;
}
.form {
  padding: 10px;
  color: #8b8b8b;
}
.form p {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 80px;
  border-bottom: 1px solid #c7c7c7;
}
.form p input {
  height: 70px;
  outline: none;
}
.form p span {
  padding-left: 15px;
  letter-spacing: 4px;
}
.spss {
  background: #25252f;
  text-align: center;
  line-height: 100px;
  color: white;
  font-size: 35px;
  font-weight: bold;
}
</style>