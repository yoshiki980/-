<template>
  <Layout style="height: 100%" class="main">
    <Sider
      hide-trigger
      collapsible
      :width="256"
      :collapsed-width="64"
      v-model="collapsed"
      class="left-sider"
      :style="{overflow: 'hidden'}"
      @mouseenter.native="handleMouseenter"
      @mouseleave.native="handleMouseleave">
      <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div  class="logo-con">
          <div v-show="!collapsed">
            <Row>
              <Col span="4">
                <img :src="maxLogo" key="max-logo"/>
              </Col>
              <Col span="12">
                <h2 style="color: ghostwhite;margin-left: 10px;">作业管理系统</h2>
              </Col>
              <Col span="4">
                <Icon type="ios-lock-outline" size="20" v-show="menuFixed" @click="handleStateChange" />
                <Icon type="ios-unlock-outline" size="20" v-show="!menuFixed" @click="handleStateChange" />
              </Col>
            </Row>
          </div>
          <img v-show="collapsed" :src="minLogo" style="height: 32px;width: auto;margin-left: -5px;" key="min-logo"/>
        </div>
      </side-menu>
    </Sider>
    <Layout :style="{marginLeft: menuFixed?'256px':'64px'}">
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
          <user :user-avator="userAvator"/>
          <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
          <div class="calendar-container">
            <div class="week">
              <span>
                {{ config.xn }}~{{ Number(config.xn) + 1}}学年&nbsp;/&nbsp;
              </span>
              <span>
                第{{ ['一', '二'][config.xq] }}学期&nbsp;
              </span>
                </div>
                <div class="time">
                  <!-- <Icon type="ios-clock-outline" size="16" class="mr-5" style="vertical-align: sub;"/> -->
                  <span>第{{ config.currWeek }}周&nbsp;/&nbsp;{{ config.currTime }}</span>
                </div>
          </div>
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
          </div>
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view :content-height="contentHeight" />
            </keep-alive>
            <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import TagsNav from './components/tags-nav'
import User from './components/user'
import ABackTop from './components/a-back-top'
import Fullscreen from './components/fullscreen'
import { mapMutations, mapActions } from 'vuex'
import { getNewTagList, routeEqual } from '@/libs/util'
import routers from '@/router/routers'
import minLogo from '@/assets/images/dgut-hw-min.png'
import maxLogo from '@/assets/images/dgut-hw-max.png'
import api from '../../api/api'
import './main.less'
export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderBar,
    TagsNav,
    Fullscreen,
    User,
    ABackTop
  },
  data () {
    return {
      config: {},
      collapsed: false,
      menuFixed: true,
      minLogo,
      maxLogo,
      isFullscreen: false,
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth
    }
  },
  computed: {
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    userAvator () {
      return this.$store.state.user.avatorImgPath
    },
    cacheList () {
      const list = ['ParentView', ...this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []]
      return list
    },
    menuList () {
      return this.$store.getters.menuList
    },
    local () {
      return this.$store.state.app.local
    },
    hasReadErrorPage () {
      return this.$store.state.app.hasReadErrorPage
    },
    contentHeight () {
      return `${this.clientHeight - 126}px`
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
    },
    handleCloseTag (res, type, route) {
      if (type !== 'others') {
        if (type === 'all') {
          this.turnToPage(this.$config.homeName)
        } else {
          if (routeEqual(this.$route, route)) {
            this.closeTag(route)
          }
        }
      }
      this.setTagNavList(res)
    },
    handleClick (item) {
      this.turnToPage(item)
    }
  },
  watch: {
    '$route' (newRoute) {
      if (newRoute.name === 'homework-mark') {
        this.collapsed = true
        this.menuFixed = false
      }
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      this.setBreadCrumb(newRoute)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      this.$refs.sideMenu.updateOpenName(newRoute.name)
    }
  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    api.config().then(res => {
      this.config = res.data.data
      // 计算当前几年几月几日第几周星期几
      let startTime = this.config.startTime
      // 得到开始时间
      // 字符串处理
      let tmp = (startTime || '').split(' ')[0]
      tmp = (tmp || '').split('-')
      // 格式化开始时间
      let date1 = new Date(parseInt(tmp[0]), parseInt(tmp[1] - 1), parseInt(tmp[2]))
      // 得到现在的时间
      let date2 = new Date()
      // 计算现在是第几周
      let week = parseInt((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24 / 7) + 1
      // 生成时间（第几周 + 几年几月几日星期几）
      this.config.currWeek = week
      this.config.currTime = date2.getFullYear() + '年 ' + (parseInt(date2.getMonth()) + 1) + '月' + date2.getDate() + '日 星期' + '日一二三四五六'.charAt(date2.getDay())
    })
    this.setTagNavList()
    this.setHomeRoute(routers)
    const { name, params, query, meta } = this.$route
    this.addTag({
      route: { name, params, query, meta }
    })
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      })
    }

    // 监听浏览器窗口大小变化
    window.onresize = () => {
      this.clientHeight = document.documentElement.clientHeight
      this.clientWidth = document.documentElement.clientWidth
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
