
<template>
  <div class="layout">
    <Layout>
      <Header style="position:relative;min-width:1000px">
        <Menu mode="horizontal" theme="light" :active-name="TopActiveName" @on-select="onSelect">
          <div class="loginwechat" v-if="!islogin" @click="islogin=!islogin">
              <img src="@/assets/img/nologin.png" alt="">
              <span>请登录微信</span>
          </div>
          <div class="loginwechat" v-if="islogin" @click="islogin=!islogin" >
            <img src="@/assets/img/login.png" alt />
            <div>
              <p>你的名字</p>
              <span>退出登录</span>
            </div>
          </div>

          <div class="layout-nav">
            <MenuItem :name="item.name" v-for="(item,index) in Router" :key="index">
              <Icon :custom="`iconfont ${item.icon}`" size="24"></Icon>
              <span>{{item.title}}</span>
            </MenuItem>
          </div>
        </Menu>

        <div class="admin">
          <Dropdown @on-click="Dropdownhandle">
            <Button type="primary" class="Dropdownbtn">
              {{userInfo.mobile}}
              <Icon type="md-arrow-dropdown"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="0">切换微信</DropdownItem>
              <DropdownItem name="1">账号设置</DropdownItem>
              <DropdownItem name="2">注销</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}" v-show="Routeritem&&Routeritem.length>1">
          <Menu

          style="height:100%"
            :active-name="SilerActiveName"
            theme="light"
            width="auto"
           
            @on-select="onSilerSelect"
            v-if="Routeritem&&Routeritem.length>1"
          >
            <MenuItem
              :name="item.name"
              v-for="(item,index) in Routeritem"
              :key="index"
            >{{item.title}}</MenuItem>
          </Menu>
        </Sider>

        <Layout >
          <Content
            :style="{ minHeight: '280px', background: '#fff',}"
          >
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { appRouter } from "@/router/routers";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Routeritem: [],
      TopActiveName:'Chat',
      islogin:false,
      SilerActiveName:''

    };
  },
  methods: {
    Dropdownhandle(name) {
      if(name==0){
        this.$Message.success('切换微信')
      }else if(name==1){
        this.$router.push({name:'Account'})

        
        setTimeout(()=>{
                this.SilerActiveName=this.$route.name 
           })
      }else if(name==2){
        this.$router.push({name:'login'})
      }
    },
    onSelect(item) {
      this.Router.forEach(element => {
        if (element.name === item) {
          this.Routeritem = element.children;
        
           this.$router.push({ name: item });
           setTimeout(()=>{
                this.SilerActiveName=this.$route.name 
           })
          
        }
      });
    },
    onSilerSelect(name) {
      this.$router.push({ name });
    }
  },
  mounted() {
    this.Routeritem = this.Router[0].children;

    
  },

beforeRouteEnter(to, from, next) {
      next(vm => {
         vm.Router.forEach(element => {
          element.children.forEach(item=>{
            if(item.name==to.name){
               vm.Routeritem = element.children;
               vm.TopActiveName=element.name
                 setTimeout(()=>{
                vm.SilerActiveName=to.name
               })
            }
          }) 
      });

    });
},

watch:{
  $route(to,from){
      setTimeout(()=>{
            this.SilerActiveName=to.name
      })
  }
},


  computed: {
    Router() {
      return appRouter;
    },
     ...mapGetters([
            "userInfo"
    ])
  }
};
</script>

<style scoped lang="scss">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.ivu-layout {
  height: 100%;
}
.ivu-menu-light {
  background: transparent;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 570px;
  line-height: 82px;
  height: 82px;
  margin-right: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .ivu-menu-item {
    display: flex;
    margin-right: 5px;
    width: 90px;
    top: 12px;
    height: 62px;
    border-radius: 6px;
    padding: 0;
    color: #fff;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    line-height: 1.8em;
    .iconfont {
      margin-right: 0;
    }
  }
}
.ivu-layout-header {
  height: 82px;
  background: linear-gradient(
    90deg,
    rgba(0, 128, 255, 1),
    rgba(64, 191, 255, 1)
  );
}

.ivu-layout-sider{
  width: 178px !important;
  min-width:178px !important;
  flex:0 0 178px !important;
}

.ivu-menu-horizontal {
  height: 82px;
  line-height: 82px;
}

.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  color: #0d86ff;
  background: #fff;
  border: 0;
}


.loginwechat {
  padding-top: 18px;
  line-height: 1.5em;
  color: #fff;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}

.admin {
  position: absolute;
  line-height: 1.5em;
  right: 5%;
  top: 35%;
  transform: translateX(-50%);
  z-index: 901;
}

.Dropdownbtn {
  background: #fff;
  color: #409fff;
  border: 0;
  padding-left: 8px;
  padding-right: 8px;
}
</style>