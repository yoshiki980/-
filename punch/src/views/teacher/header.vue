<template>
  <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
    <!-- 左侧 logo 和 标题区域 -->
    <div class="layout-header-left d-flex align-items-center user-select-none">
      <!-- logo -->
      <img class="layout-header-left-img" src="../../assets/images/dgut-hw-min.png" alt="">
      <!-- 标题 -->
      <span class="layout-header-left-title ml-3">课堂考勤管理系统</span>
    </div>

    <!-- 右侧按钮区域 -->
    
    <div class="layout-header-right">
      <!-- <span class="clock">{{dateFormat(newDate)}}</span> -->
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
      <i class="iconfont full-screen" @click="FullScreen" title="全屏"></i>
      <a-button type="primary" class="btn btn-light" @click="onLogout">退出登录</a-button>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import api from '../../api/api.js'
export default {
  name: 'MyHeader',
  data() {
    return {
      // newDate: new Date(),
       config: {},
    }
  },
  // 挂载时间
  // mounted () {
  //   let that = this
  //   this.timer = setInterval(function () {
  //     that.newDate = new Date().toLocaleString()
  //   })
  // },
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
    // this.setTagNavList()
    // this.setHomeRoute(routers)
    // const { name, params, query, meta } = this.$route
    // this.addTag({
    //   route: { name, params, query, meta }
    // })
    // 如果当前打开页面不在标签栏中，跳到homeName页
    // if (!this.tagNavList.find(item => item.name === this.$route.name)) {
    //   this.$router.push({
    //     name: this.$config.homeName
    //   })
    // }

    // 监听浏览器窗口大小变化
    // window.onresize = () => {
    //   this.clientHeight = document.documentElement.clientHeight
    //   this.clientWidth = document.documentElement.clientWidth
    // }
  },
  methods: {
    onLogout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    FullScreen() {
      if(screenfull.isEnabled && !screenfull.isFullscreen)
      {
        screenfull.request()
      }
    },
    // 时间格式化
    // dateFormat () {
    // 	var date = new Date()
    //     var year = date.getFullYear()

    //     var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    //     var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    //     var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    //     var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    //     var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    //     let week = date.getDay() // 星期
    //     let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
    //     // 拼接 时间格式处理
    //     return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds + ' ' + weekArr[week]
    // }

  }
}
</script>

<style lang="less" scoped>
// .clock {
//   display: inline-block;
//   position: absolute;
//   width: 215px;
//   top: 25px;
//   right: 300px;
//   color: #eaeaea;
// }
// .clock:hover {
//   color: #165dff;
// }
.full-screen::before {
  content: "\e655";
  padding-right: 15px;
  font-size: 32px;
  color: #eaeaea;
  position: absolute;
  top: 10px;
  right: 90px;
}
.full-screen:hover::before {
  color: #165dff;
}
.btn-light {
  margin-top: 19px;
}
.layout-header-container {
  height: 73.5px;
  border-bottom: 1px solid #eaeaea;
}
.layout-header-left-title {
  padding-left: 25px;
  font-size: 20px;
  line-height: 70px;
  color: #eaeaea;
  
}
.layout-header-left-img {
  // height: 50px;
  margin-left: 34px;
  // margin-top: 4.5px;
  padding-bottom: 4.5px;
  vertical-align:middle;
}
.layout-header-right {
  display: inline-block;
  height: 67px;
  position: absolute;
  top: 0px;
  right: 50px;
}

.layout-header-container {
  background-color: #13227a;
}
 .calendar-container {
    font-weight: 600;
    padding-top: 15px;
    margin-right: 10px;
    padding-bottom: 5px;
  }

  .calendar-container {
    display: flex;
    position: absolute;
    top:2px;
    right: 150px;
    width: 226px;
    flex-direction: column;
    justify-content: center;
    height: 54px;
  }

  .week {
    color: #eaeaea;
    margin-left: 22px;
    line-height: 18px;
    letter-spacing: 0.8px;
  }
 .calendar-container:hover .week{
   color: #165dff;
 }
 .calendar-container:hover .time{
   color: #165dff;
 }
  .time {
    color: #eaeaea;
    line-height: 18px;
    letter-spacing: 0.84px;
  }

</style>