<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <router-view :content-height="contentHeight" />
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import './main.less'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      config: {},
      collapsed: true,
      menuFixed: false,
      isFullscreen: false,
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setLocal',
      'setHomeRoute',
      'closeTag'
    ]),
    ...mapActions([
      'handleLogin'
    ]),
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleCollapsedChange (state) {
      this.collapsed = state
    },
    handleMouseenter () {
      if (!this.menuFixed) {
        this.collapsed = false
      }
    },
    handleMouseleave () {
      if (!this.menuFixed) {
        this.collapsed = true
      }
    },
    handleStateChange () {
      if (this.menuFixed) {
        this.collapsed = true
      } else {
        this.collapsed = false
      }
      this.menuFixed = !this.menuFixed
      console.log('col:' + this.collapsed)
      console.log('menu:' + this.menuFixed)
    }
  },
  computed: {
    contentHeight () {
      return `${this.clientHeight - 126}px`
    },
    menuList () {
      return this.$store.getters.menuList
    }
  }
}
</script>
<style lang="less" scoped>
  .calendar-container {
    font-weight: 600;
    padding-top: 15px;
    margin-right: 10px;
    padding-bottom: 5px;
  }

  .calendar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 54px;
  }

  .week {
    margin-left: 22px;
    line-height: 18px;
    letter-spacing: 0.8px;
  }

  .time {
    line-height: 18px;
    letter-spacing: 0.84px;
  }
</style>
