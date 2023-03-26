<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li class="menu-item" >
        <!-- <span class="iconfont icon-yonghu"></span> -->
        <router-link to="/home/users" class="user iconfont" style="#fff" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">用户详情</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/activities" class="checkOn iconfont" style="#fff" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">考勤活动</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/courses" class="manage iconfont" style="#fff" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">课程管理</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside',
  methods: {
    mouseOver(e) {
      e.currentTarget.style.color ='#132258'
      // this.active = 'color: #132258'
    },
    mouseLeave(e) {
      e.currentTarget.style.color = '#fff'
      // this.active = 'color: #fff'
    }
  }
}
</script>

<style lang="less" scoped>
.user::before {
  content: '\e8c8';
  padding-right: 5px;
}
.checkOn::before {
  content: '\e8d0';
  padding-right: 5px;
}
.manage::before {
  content: '\e64d';
  padding-right: 5px;
}
.layout-aside-container {
  width: 250px;
  height: 100%;
  border-right: 1px solid #eaeaea;
  background-color: #132258;
}
.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
    a {
      display: block;
      color: #fff;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #eaeaea;
  color: #132258 !important;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  // &::before {
  //   content: ' ';
  //   display: block;
  //   width: 4px;
  //   height: 100%;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   background-color: #42b983;
  // }
}

</style>
