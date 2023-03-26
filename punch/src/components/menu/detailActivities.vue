<template>
  <h2 class="text-center">考勤活动详情 --- {{id}}</h2>
  <h3 class="text-center">到勤率: {{calculateCardStatus}}</h3>
  <a-tabs default-active-key="2">
    <a-tab-pane key="1" title="已到勤">
      <a-table :columns="columns" :data="data">
        <template #optional="{ record }">
          <a-button  type="dashed" style="pointer-events: none;" @click="changeCardStatus(record.key)">手动考勤</a-button>
        </template>
       </a-table>
    </a-tab-pane>
    <a-tab-pane key="2" title="未到勤">
     <a-table :columns="columns2" :data="data2">
        <template #optional2="{ record }">
          <a-button type="primary" @click="changeCardStatus(record.key)">手动考勤</a-button>
        </template>
       </a-table>
    </a-tab-pane>
  </a-tabs>
  
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['id'],
  data() {
    return {
      comeRate: '50%'
    }
    
  },
  setup() {
    const show = ref(true)
    // 已到勤
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
    }, {
      title: '考勤方式',
      dataIndex: 'cardWay',
    }, {
      title: '考勤情况',
      dataIndex: 'cardStatus',
    }, {
      title: '考勤时间',
      dataIndex: 'cardTime',
    }, {
      title: '手动考勤',
      slotName: 'optional'
    }];
    // 未到勤
    const columns2 = [{
      title: '姓名',
      dataIndex: 'name',
    }, {
      title: '考勤方式',
      dataIndex: 'cardWay',
    }, {
      title: '考勤情况',
      dataIndex: 'cardStatus',
    }, {
      title: '考勤时间',
      dataIndex: 'cardTime',
    }, {
      title: '手动考勤',
      slotName: 'optional2'
    }];
    // 已到勤数据
    const data = [{
      key: '1',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    }, {
      key: '2',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    },{
      key: '3',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    },{
      key: '4',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    },{
      key: '5',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    },{
      key: '6',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    },
    {
      key: '7',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '已考勤',
      cardTime: '9:0:0',
    },];
    //未到勤数据
    const data2 = [{
      key: '1',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '未考勤',
      cardTime: '9:0:0',
    }, {
      key: '2',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '未考勤',
      cardTime: '9:0:0',
    },{
      key: '3',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '未考勤',
      cardTime: '9:0:0',
    },{
      key: '4',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '未考勤',
      cardTime: '9:0:0',
    },{
      key: '5',
      name: '小王',
      cardWay: '扫码',
      cardStatus: '未考勤',
      cardTime: '9:0:0',
    },];

    return {
      columns,
      data,
      columns2,
      data2,
      show
    }
  },
  methods: {
    //手动改变到勤情况
    changeCardStatus(key) {
      console.log(key);
      console.log(this.columns)
    },
    
  },
  computed: {
    //计算到勤率
    calculateCardStatus() {
      var numRate = Math.round(this.data.length/(this.data2.length+this.data.length)*10000)/100 + '%'
      return numRate
    },
    
  }
}
</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
}
.bottom-side {
  margin-left: 400px;
}
.disableBtn {
  background-color: #fff;
}
</style>