<style lang="less" scoped>
  @import './login.less'; 
  .login {
      background: linear-gradient(140deg, #58C382, #58c3c3, #58C382);
      
}
  // .ivu-btn .ivu-btn-warning .ivu-btn-long {
  //   -webkit-appearance: button;
  // }

</style>

<template>
  <div class="login">
    <div class="login-con">
      <div class="login-icon" style="color: white;font-size: 35px;font-weight: bold;">
        课堂考勤系统
      </div>
      <a-tabs  @tab-click="tagChange " :active-key="tab" lazy-load ref="tc" animation  size="large" type="rounded">
        <a-tab-pane title="中央认证"  key="1" >
          <a-card :bordered="false" style="background: rgba(0,0,0,.2); borderRadius: 10px;" >
            <div class="form-con">
              <!-- <Button  @click="goCasCenterLogin" type="info" long>中央认证登录</Button>              -->
              <a-button  @click="goCasCenterLogin" type="primary" long style="border-radius: 5px;">中央认证登录</a-button> 
              <a-button style="margin-top: 10px; backgroundColor: #2db7f5; color: #fff; border-radius: 5px;" @click="goCenterLogin" type="primary" long>中央认证登录(旧)</a-button>
              <a-button style="margin-top: 10px; backgroundColor: #13227a; color: #fff; border-radius: 5px;" @click="goAccountLogin"  long type="primary">账号登陆</a-button>

              <div class="footer">
                <div>
                  <a class="company" href="https://css.dgut.edu.cn/" target="_blank">技术支持：网安信息化团队</a>
                </div>
              </div>
            </div>
          </a-card>
        </a-tab-pane>
        <a-tab-pane title="账号登陆"  key="2" >
          <a-card :bordered="false" style="background: rgba(0,0,0,.2); borderRadius: 10px;">
            <div class="form-con">
              <login-form @on-success-valid="handleSubmit"></login-form>
              <p style="color: white;font-size: 10px;margin-top: 5px;">
                tip:只有用户在登录后开启个人中心的密码并设置密码后，才能使用本系统的登录，否则请使用中央认证登录按钮。</p>
              <div class="footer">
                <div>
                  <a class="company" href="https://css.dgut.edu.cn/" target="_blank">技术支持：网安信息化团队</a>
                </div>
              </div>
            </div>
          </a-card>
        </a-tab-pane>
      </a-tabs>
      
    </div>
  </div>
  
</template>

<script>
import LoginForm from '_c/login-form'
import api from '../../api/api2'


export default {
  
  components: {
    LoginForm
  },
  data () {
    return {
      tab: '1'
    }
  },
  methods: {
    handleSubmit (form) {
      api.login(form).then(res => {
        console.log('哈哈哈')
        if (res.data.msg === '成功') {
          window.location.href = '/'
        }
      })
    },
    goCenterLogin () {
      window.location = 'https://cas.dgut.edu.cn/?appid=hwcss'
    },
    goCasCenterLogin () {
      window.location = 'https://auth.dgut.edu.cn/authserver/oauth2.0/authorize?response_type=code&client_id=971734811307233280&redirect_uri=https%3A%2F%2Fhw.dgut.edu.cn%2Fnewlogin'
    },
    goAccountLogin () {
      this.tab = '2'

    },
    tagChange (value) {
      this.tab = value
    },
 
  },
  mounted () {
  }
}
</script>