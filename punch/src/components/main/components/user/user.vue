<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge>
        <avatar :size="35" :username="username"></avatar>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem @click="help" name="help">系统反馈</DropdownItem>
        <DropdownItem @click="goUserCenter" name="user">个人中心</DropdownItem>
        <DropdownItem @click="logout" name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import Avatar from 'vue-avatar'
import { mapActions } from 'vuex'
import api from '../../../../api/api'
import { DOMAIN } from '../../../../utils/constants'

export default {
  name: 'User',
  components: {
    Avatar
  },
  data () {
    return {
      username: 'Home'
    }
  },
  mounted () {
    if (process.env.NODE_ENV !== 'development') {
      this.getProfile()
    } else {
      if (window.location.pathname !== '/login') {
        this.getProfile()
      }
    }
  },
  computed: {
    userProfile () {
      return this.$store.getters.profile
    }
  },
  watch: {
    userProfile (newVal, oldVal) {
      if (newVal.userProfile !== undefined) {
        this.username = newVal.userProfile.realName
      }
    }
  },
  methods: {
    ...mapActions(['getProfile', 'clearProfile']),
    goUserCenter () {
      console.log('user-center-dash')
      this.$router.push({
        name: 'user-center-dash'
      })
    },
    logout () {
      this.clearProfile()
      api.logout().then(res => {
        window.location.href = DOMAIN.callback
      })
    },
    handleClick (name) {
      console.log(name)
      switch (name) {
        case 'logout':
          this.logout()
          break
        case 'user':
          this.goUserCenter()
          break
        case 'help':
          this.help()
          break
      }
    },
    help () {
      window.open('https://support.qq.com/product/319052')
    }
  }
}
</script>
