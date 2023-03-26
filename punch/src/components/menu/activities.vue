<template>
  <h2 class="text-center">最近考勤活动</h2>
  <a-table :columns="columns" :data="data">
    <template #detailActivity="{ record }">
      
      <!-- 考勤活动详情 -->
       <a-button type="primary"  @click="detailClick(record.key)">活动详情</a-button>
       <!-- <span class="deActivity">
         <router-link to="/home/detailactivities" style="color: #fff;" @click="detailClick(record.key)"> 活动详情</router-link>
       </span> -->
       
      <!-- <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
          <template #title>
               考勤活动详情
          </template>
          <div>
            <span>到勤率:</span>
            <span>{{id}}</span>
          </div>
          <div>
            <span>未考勤学生名单:</span>
            <span>小王、小五、小云</span>
          </div>
          <a-button type="outline"  @click="">手动考勤</a-button>
      </a-modal> -->
    </template>
    <template #deleteActivity="{ record }">

        <!-- 删除考勤 -->
        <a-button type="primary" @click="deleteClick(record.key)" style="backgroundColor: red;">删除考勤</a-button>

    </template>
  </a-table>
  
</template>

<script>
  import { ref } from 'vue';

export default {
  data() {
    return {
      id: null
    }
  },
  setup() {
    const show = ref(true)
    const rowSelection = {
      type: 'checkbox'
    };
    const columns = [{
      title: '课程名称',
      dataIndex: 'courseName',
    }, {
      title: '上课时间',
      dataIndex: 'classTime',
    }, {
      title: '上课地点',
      dataIndex: 'classPlace',
    }, {
      title: '教学班级名称',
      dataIndex: 'className',
    }, {
      title: '上课学生数',
      dataIndex: 'studentNumber'
    },
    {
      title: '状态',
      dataIndex: 'state'
    },
    {
      title: '考勤活动详情',
      slotName: 'detailActivity'
    },
    {
      title: '删除考勤活动',
      slotName: 'deleteActivity'
    },
    
    ];
    const data = [{
      key: '1',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    }, {
      key: '2',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    }, {
      key: '3',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    }, {
      key: '4',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    }, {
      key: '5',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '6',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '7',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '8',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '9',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '10',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '11',
      courseName: '操作系统',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    }];
    // const visible = ref(false);

    // const handleClick = () => {
    //   visible.value = true;
    // };
    // const handleOk = () => {
    //   visible.value = false;
    // };
    // const handleCancel = () => {
    //   visible.value = false;
    // }

    return {
      rowSelection,
      columns,
      data,
      show,
      // visible,
      // handleClick,
      // handleOk,
      // handleCancel
    }
  },
  methods: {
    deleteClick(key) {
      //删除当前考勤活动
      this.data = this.data.filter(x => x.key!=key);
      console.log(this.data)
      console.log(key)
    },
    detailClick(key) {
      //考勤活动详情
      // this.handleClick();
      this.id = key
      console.log(key);
      this.$router.push('/home/detailactivities/'+key)
    }
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
.deActivity {
  background-color: #165dff;
}
</style>