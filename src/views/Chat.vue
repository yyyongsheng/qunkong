<template>
  <div class="chatbox">
    <!-- 消息列表 -->
    <div class="chatLeft">
      <div class="listtitle">消息列表</div>
      <ul class="chatlist">
        <li
          class="item"
          @click="checklistitem(index)"
          v-for="(item,index) in chatlist"
          :key="item.id"
          :class="index==checkitem?'active':''"
        >
          <img class="avatar" src="@/assets/img/nologin.png" alt />
          <div class="infodata">
            <p class="info">
              <span class="name">{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </p>
            <span class="msg">{{item.msg}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 聊天框 -->
    <div class="chatMid">
      <Split v-model="aa" mode="vertical">
        <div slot="top" class="demo-split-top">
          <div class="title">正能量交流群(168人)</div>

          <ul class="chatlist">
            <li class="letfitem">
              <img class="avatar" src="@/assets/img/nologin.png" alt />
              <div class="msgbox">
                <div class="name">你的名字</div>
                <div
                  class="msg"
                >你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！</div>
              </div>
            </li>
            <li class="rightitem">
              <div class="msgbox">
                <div class="name">你的名字</div>
                <div class="msg">你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！你好鸭！！你好鸭！</div>
              </div>
              <img class="avatar" src="@/assets/img/nologin.png" alt />
            </li>
          </ul>
        </div>
        <div slot="bottom" class="demo-split-bottom">
          <div class="ChatBox">
            <div class="tool">
              <span>表情</span>
              <span>图片</span>
            </div>
            <div class="content"></div>
          </div>
        </div>
      </Split>
    </div>
    <!-- 详情信息 -->
    <div class="chatRigth">
      <Tabs value="name2">
        <TabPane label="详情" name="name1">
          <div class="chatdetail">
            <div class="userinfo">
              <img class="avatar" src="@/assets/img/nologin.png" alt />
              <div class="name">
                你的名字 &nbsp;
                <img src="@/assets/img/woman.png" alt />
              </div>
            </div>
            <div class="wechatinfo">
              <div class="item">
                <p>备注</p>
                <span>公司同事</span>
              </div>
              <div class="item">
                <p>微信号</p>
                <span>sjwes111</span>
              </div>
              <div class="item">
                <p>地区</p>
                <span>广东广州</span>
              </div>
              <div class="item label">
                <p>标签</p>
                <span>
                  <ul>
                    <li>标签一</li>
                    <li>+ 添加</li>
                  </ul>
                </span>
              </div>
              <div class="item">
                <p>来源</p>
                <span>通过通讯录添加</span>
              </div>
              <div class="item">
                <p>描述</p>
                <span>暂无描述</span>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="素材" name="name2">
          <div class="material">
            <Input
              @on-search="search"
              search
              suffix="ios-search"
              placeholder="搜索素材"
              style="width: 100%"
            />

            <ul class="materiallist">
              <li class="item">
                <div class="top">
                  <div class="title">发言警告</div>
                  <div class="type">文本</div>
                </div>
                <span class="content">1文本+小程序</span>
                <div class="footer">
                  <p class="btn">预览</p>
                  <p class="btn">发送</p>
                </div>
              </li>
            </ul>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      aa: true,
      checkitem: 0,
      chatlist: [
        {
          name: "你的名字我的心事",
          time: "10:20",
          msg: " 你好鸭！"
        },
        {
          name: "薅羊毛交流群",
          time: "10:30",
          msg: " 大家好！"
        },
        {
          name: "正能量交流群",
          time: "10:40",
          msg: "请大家不要发广告，谢谢合作，违规的一律T"
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {
    //    this.$store.commit('SET_USER_INFO',{mobile:1232427645,password:666})
  },
  mounted() {
    setTimeout(() => {
      console.log(this.userInfo);
    });
  },
  methods: {
    checklistitem(index) {
      this.checkitem = index;
    },
    search() {
      console.log(666);
    }
  }
};
</script>

<style lang="scss" >
.chatbox {
  display: flex;
  height: 100%;
  min-width: 1000px;
  position: relative;
  padding-left: 238px;
  padding-right: 312px;

  //chatLeft
  .chatLeft {
    position: absolute;
    left: 0;
    top: 0;
    border-right: 1px solid #e6e6e6;
    height: 100%;
    width: 238px;
    .listtitle {
      height: 35px;
      line-height: 35px;
      text-align: left;
      font-size: 14px;
      color: #333;
      padding-left: 20px;
      border-bottom: 1px solid #e6e6e6;
    }
    .chatlist {
      .item {
        cursor: pointer;
        padding: 10px 15px;
        display: flex;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 6px;
        }
        .infodata {
          width: 76%;
          margin-left: 10px;
          display: flex;
          align-items: left;
          flex-direction: column;
          .info {
            display: flex;
            justify-content: space-between;
            .name {
              color: #333;
              font-size: 14px;
            }
            .time {
              font-size: 12px;
              color: #666;
            }
          }
          .msg {
            font-size: 12px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .active {
        background: #edf6ff;
      }
    }
  }
  //chatMid
  .chatMid {
    width: 100%;
    padding: 20px 0px;
    background: #f7f7f7;
    height: 100%;
    .demo-split-top {
      padding: 0 20px;
      // height: 400px;
    }
    .title {
      font-size: 18px;
      color: #333;
    }
    .chatlist {
      .letfitem {
        display: flex;
        justify-content: left;
        margin-top: 20px;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          margin-right: 6px;
        }
        .msgbox {
          display: flex;
          flex-direction: column;
          justify-content: left;
          .name {
            color: #333333;
          }
          .msg {
            padding: 3px 10px;
            background: #fff;
            border-radius: 3px;
            font-size: 14px;
            color: #333333;
            border: 1px solid #e6e6e6;
          }
        }
      }

      .rightitem {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          margin-left: 6px;
        }
        .msgbox {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-content: end;
          align-items: flex-end;
          .name {
            color: #333333;
          }
          .msg {
            padding: 3px 10px;
            background: #fff;
            border-radius: 3px;
            font-size: 14px;
            color: #333333;
            border: 1px solid #e6e6e6;
          }
        }
      }
    }

    .demo-split-bottom {
        background: #f7f7f7;
              z-index: 99;
              // height: 100%;
               min-height: 170px;
      }

      .ChatBox{
        // min-height: 170px;
        // position: relative;
        // bottom: 0;
      }


  }

  //chatRigth
  .chatRigth {
    width: 312px;
    position: absolute;
    right: 0;
    top: 0;
    border-left: 1px solid #e6e6e6;
    height: 100%;
    .ivu-tabs-nav-scroll {
      display: flex;
      justify-content: center;
    }

    .chatdetail {
      padding: 5px 20px;
      .userinfo {
        text-align: center;
        .avatar {
          width: 45px;
          height: 45px;
          border-radius: 6px;
        }
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 15px;
          }
        }
      }

      .wechatinfo {
        margin-top: 15px;
        .item {
          margin-bottom: 10px;
          display: flex;
          p {
            color: #999;
            font-size: 14px;
            margin-right: 10px;
          }
        }
        .label {
          ul {
            display: flex;
            li {
              cursor: pointer;
              padding: 2px 10px;
              background: #f5f6f7;
              margin-right: 10px;
              border-radius: 3px;
            }
          }
        }
      }
    }

    .material {
      padding: 5px 20px;
      text-align: center;

      .materiallist {
        margin-top: 20px;
        .item {
          padding: 15px;
          margin-bottom: 15px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
          .top {
            display: flex;
            justify-content: space-between;
            .title {
              font-size: 14px;
              color: #333;
            }
            .type {
              padding: 5px 20px;
              color: #999;
              background: #f7f7f7;
              border-radius: 3px;
            }
          }
        }
        .content {
          font-size: 12px;
          color: #999999;
        }

        .footer {
          .btn {
          }
        }
      }
    }
  }
}

</style>