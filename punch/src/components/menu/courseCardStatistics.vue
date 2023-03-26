<template>
    <h2 class="text-center">课堂考勤统计 -- {{courseName}}</h2>
    <br>
    <a-button type="primary" class="daochu">导出考勤统计</a-button>
    <a-table :columns="columns" :data="data">
    <template #optional="{ record }">
      <!-- <a-button @click="$modal.info({ title:'Name', content:record.name })">导出考勤记录</a-button> -->
      
    </template>
  </a-table>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['courseName'],
    setup() {
      
    const show = ref(true)

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
    }, {
      title: '班级',
      dataIndex: 'className',
    }, {
      title: '出勤次数',
      dataIndex: 'cardNum',
    }, {
      title: '缺勤次数',
      dataIndex: 'notcardNum',
    },  {
      title: '出勤率',
      dataIndex: 'cardRate',
    },
    // {
    //   title: '导出考勤记录',
    //   slotName: 'optional'
    // }
    ];
    const data = [{
      key: '1',
      name: '小云',
      className: '20软卓2班',
      cardNum: 5,
      notcardNum: 2,
      cardRate: 5/7,
    }, {
      key: '2',
      name: '小王',
      className: '20软卓2班',
      cardNum: 5,
      notcardNum: 2,
      cardRate: 5/7,
    },{
      key: '3',
      name: '小军',
      className: '20软卓2班',
      cardNum: 5,
      notcardNum: 2,
      cardRate: 5/7,
    },{
      key: '4',
      name: '小强',
      className: '20软卓2班',
      cardNum: 5,
      notcardNum: 2,
      cardRate: 5/7,
    },{
      key: '5',
      name: '小白',
      className: '20软卓2班',
      cardNum: 5,
      notcardNum: 2,
      cardRate: 5/7,
    },];

    return {
      columns,
      data,
      show
    }
  },
  
}
</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
}
.bottom-side {
  margin-left: 400px;
}
.qrcode {
  text-align: center;
}
.daochu {
  position: absolute;
  top: 100px;
  left: 1400px;
}
</style>