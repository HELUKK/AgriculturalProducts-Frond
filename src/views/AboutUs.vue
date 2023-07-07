<!-- 关于我们页面 -->
<template>
  <div class="about-container">
    <img src="../assets/img/logo.png" class="logo"/>
    <div class="about-content">
      <div class="item-style">关于融销通：</div>
      <div class="item-style marginL25">融销通是一款基于数字经济的农产品融销一体平台。</div>
    
      <div class="contact-us marginR105" style="margin-top:150px;">联系我们：</div>
      <div class="item-style contact-us">全国服务热线：400-828-123456</div>
      <div class="item-style contact-us marginR50">QQ: 1234567890</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about-container{
  width: 900px;
  background: #fff;
  margin: 0;
  padding: 50px 20px;
  height: 80%;
  display: flex;
  flex-flow: column;
  // justify-content: center;
  align-items: center;
  .logo{
    width: 292px;
    height: 261px;
  }
  .item-style{
    height: 25px;
    line-height: 25px;
  }
  .marginL25{
    margin-left: 25px;
  }
   .marginL25{
    margin-left: 25px;
  }
  .contact-us{
    display: flex;
    justify-content: flex-end;
  }
  .marginR105{
    margin-right: 105px;
  }
  .marginR50{
    margin-right: 30px;
  }
  .about-content{
    margin-top: 50px;
  }
}
</style>
