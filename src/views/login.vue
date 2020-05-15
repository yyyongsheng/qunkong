<template>
  <div class="loginbox">
    <div class="loginFrom">
      <img style="width:140px" src="@/assets/img/login.png" alt />
      <p class="title">欢迎登陆群控客户端</p>

      <Form ref="formInline" class="formInline" :model="loginFrom" :rules="ruleInline" >
        <FormItem prop="mobile" class="mobile">
           <img class="icon" src="@/assets/img/mobileform.png" alt="">
          <Input type="text" class="input" v-model="loginFrom.mobile" placeholder="请输入您的账号/手机号">
          </Input>
        </FormItem>
        <FormItem prop="password">
          <img class="icon" src="@/assets/img/passwordform.png" alt="">
          <Input type="password" v-model="loginFrom.password" placeholder="请输入您的密码">
          </Input>
        </FormItem>
        <FormItem class="Checkbox" >
             <Checkbox v-model="remember" @click="remember=!remember">记住密码</Checkbox>
             <Checkbox v-model="autoLogin"  @click="autoLogin=!autoLogin">自动登录</Checkbox>
        </FormItem>
        
        <Button type="primary" class="loginbtn"  @click="login"   >马上登录</Button>
      
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoLogin:false,
      remember:false,
      loginFrom: {
        mobile: "",
        password: ""
      },
      ruleInline: {
        mobile: [
          { required: true, message: "请输入您的账号/手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" }
        ]
      }
    };
  },
  created(){
    var  userInfo=localStorage.getItem('userInfo')&&JSON.parse(localStorage.getItem('userInfo'))||{}
    var  remember=localStorage.getItem('remember')&&JSON.parse(localStorage.getItem('remember'))||false
    var  autoLogin=localStorage.getItem('autoLogin')&&JSON.parse(localStorage.getItem('autoLogin'))||false
     
    this.remember=remember
    this.autoLogin=autoLogin
    console.log(this.remember,this.autoLogin,'22')
    this.loginFrom.mobile=userInfo&&userInfo.mobile||''
    this.loginFrom.password=userInfo&&userInfo.password||''

   
  },
  mounted(){
    
  },

  beforeRouteEnter(to, from, next) {
      next(vm => {
        console.log(from,'666')
        console.log(to,'77')
         if(from.path=="/"&&vm.autoLogin){
              vm.$Message.loading({
                    content: '自动登录中...',
                    duration: 0
                });
                setTimeout(()=>{
                     vm.login()
                },2000)

             
         }

    });
},


  methods:{
    login(){
         this.$refs.formInline.validate((valid) => {
                    if (valid) {
                          this.$Message.destroy()
                        this.$Message.success('登录成功');
                          this.$store.commit('SET_USER_INFO',this.loginFrom)
                          localStorage.setItem('userInfo', JSON.stringify( this.loginFrom))
                          localStorage.setItem('remember',  this.remember)
                          localStorage.setItem('autoLogin',  this.autoLogin)
                          this.$router.push({name:"Chat"})
                    } else {
                        this.$Message.error('请输入正确的账号和密码');
                    }
                })
    }
  },

};
</script>

<style lang="scss" scoped>
.loginbox {
  width: 100%;
  height: 100%;
  background: #409fff;
  min-height: 100vh;
  padding-top: 80px;
  .loginFrom {
    width: 410px;
    height: 540px;
    padding: 50px 30px;
    margin: 0 auto;
    border-radius: 20px;
    background: #fff;
    text-align: center;
    .title {
      font-weight: bold;
      font-size: 26px;
      color: #1a1a1a;
      line-height: 41px;
    }

  .mobile{
    margin-top: 30px;
  }
  .Checkbox{
    text-align: left;
    label{
      margin:0 45px;
    }
  }
    .loginbtn{
      display: block;
      margin: 40px  auto 0;
      width:350px;
      height:44px;
      background:rgba(64,159,255,1);
      border-radius:22px;
      font-size:18px;
    }
  }
}



   
</style>

