<template>
  <div class="hello">
    <ul class="bg-bubbles">
      <div class="form">
          <h2>111111</h2>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <i-input type="text" v-model="formInline.user" placeholder="请输入账号">
                    <Icon type="person" slot="prepend"></Icon>
                </i-input>
            </FormItem>
            <FormItem prop="password">
                <i-input type="password" v-model="formInline.password" placeholder="请输入密码">
                    <Icon type="locked" slot="prepend"></Icon>
                </i-input>
            </FormItem>
            <FormItem>
                <Button @click="handleSubmit('formInline')">登陆</Button>
            </FormItem>
          </Form>
      </div>
      <li v-for="i in 10" :key="i">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data () {
            return {
              formInline: {
                  user: '',
                  password: ''
              },
              ruleInline: {
                  user: [
                      { required: true, message: '请填写用户名称', trigger: 'blur' }
                  ],
                  password: [
                      { required: true, message: '请填写密码.', trigger: 'blur' },
                      { type: 'string', min: 6, message: '请输入长度不少于6位的密码', trigger: 'blur' }
                  ]
              }
            }
        },
        methods: {
            handleSubmit(name) {
              let newData = JSON.stringify(this.formInline);
              localStorage.setItem('formInline',newData);
              let value = JSON.parse(localStorage.getItem('formInline'));
              this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('验证成功!');
                } else {
                    this.$Message.error('验证失败!');
                }
              })
            }
        },
        computed:{

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.form{
  width:390px;
  height:260px;
  text-align: center;
  border-radius:10px;
  border:1px solid rgba(255, 255, 255, 0.15);
  background-color:rgba(255, 255, 255, 0.1);
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  h2{
    color:white;
    line-height:80px;
    word-spacing: 25px;
  }
}
.bg-bubbles {
    position: fixed;
    // 使气泡背景充满整个屏幕；
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
    overflow: hidden;
    background: linear-gradient(to bottom right, #50A3A2, #53E3A6);
    // background: linear-gradient(125deg, #2caaa4, #04e9a9);
    resize: both;
    li {
      position: absolute;
      // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
      bottom: -160px;
      // 默认的气泡大小；
      width: 40px;
      height: 40px;
      border-radius:50%;
      background-color: rgba(255, 255, 255, 0.15);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
    // 自定义 square 动画；
    @keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg)
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
    }
  }

  .ivu-form-inline .ivu-form-item{
    width:300px;
    display: block;
    margin:20px auto;
  }
</style>
