<template>
  <div>
    <Form ref="loginForm" :model="form">
      <FormItem prop="userName">
        <!-- <span slot="prepend">
          <Icon type="md-contact" :style="{fontSize: '32px'}"/>
        </span> -->
        <a-input class="header-input" ref="input1" @keyup.enter="handleTab" v-model="form.username" placeholder="  请输入用户名" :style="{width:'328px'}" allow-clear>
        <!-- <icon-user class="icon-use" :style="{fontSize:'24px'}" /> -->
        
        </a-input>
      </FormItem>
      <FormItem prop="password">
        <!-- <span slot="prepend">
            <Icon :size="14" type="md-lock" :style="{fontSize: '32px'}"></Icon>
          </span> -->
        <!-- <icon-user class="icon-use" :style="{fontSize:'24px'}" /> -->
        <a-input class="password-input " ref="input2" type="password" @keyup.enter="handleSubmit" v-model="form.password" placeholder="  请输入密码" :style="{width:'328px'}" >
          
        </a-input>
      </FormItem>
    </Form>
    <Button html-type="button" @click="handleSubmit"  type="primary" long style="borderRadius: 5px;">登录</Button>
  </div>
</template>
<script>
// import { Icon } from '@arco-design/web-vue';
import { IconUser } from '@arco-design/web-vue/es/icon';

// const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js' });
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        username: '',
        password: '',
        // scene: ''
      }
    }
  },
  // components:{
  //   IconFont
  // },
  components: { IconUser },
  mounted () {
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', this.form)
        }
      })
      // if(this.form.username === 'admin' && this.form.password === '123456')
      // {
      //   this.$router.push('/home')
      //   localStorage.setItem('token','Bearer xxx')
      //   this.$message.success('登录成功！！！')
      // }
      // else{
      //   localStorage.removeItem('token')
      //   this.$message.error('登录失败，用户名或者密码出错！')
      // }
    },
    handleTab() {
      this.$refs.input1.blur()
      this.$refs.input2.focus()
    }
  }
}
</script>
<style scoped>
  .nc_iconfont {
    height: 100%;
  }

  .header-input {
    background: url("../../assets/others/head.png")no-repeat 2px 3px;
    padding-left: 30px;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #2d8cf0;
  }
 .password-input {
   background: url("../../assets/others/password.png")no-repeat 2px 3px;
    padding-left: 30px;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #2d8cf0;
 }

</style>
