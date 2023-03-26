<template>
  <h2 class="text-center">课程考勤活动 -- {{courseName}}</h2>
  <a-table :columns="columns" :data="getCardActivity">
    <template #detailActivity="{ record }">
      
      <!-- 考勤活动详情 -->
       <a-button type="primary"  @click="detailClick(record.key)">活动详情</a-button>
    </template>
    <template #deleteActivity="{ record }">

        <!-- 删除考勤 -->
        <a-button type="primary" @click="deleteClick(record.key)" style="backgroundColor: red;">删除考勤</a-button>

    </template>
  </a-table>
  
</template>

<script>
  import { computed, ref } from 'vue';
  import { getCurrentInstance } from "vue";
export default {
  props: ['courseName'],
  data() {
    return {
      cName: []
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
    const courseData = [{
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
      courseName: '大学物理',
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
      courseName: '大学物理',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '9',
      courseName: '大学物理',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '10',
      courseName: '大学物理',
      classTime: '上午8点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    },{
      key: '11',
      courseName: '大学物理',
      classTime: '上午7点',
      classPlace: '6F207',
      className: '软卓2班',
      studentNumber: '32',
      state: '进行中'
    }];
    return {
      rowSelection,
      columns,
      courseData,
      show,
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
      this.id = key
      console.log(key);
      this.$router.push('/home/detailactivities/'+key)
    }
  },
  computed: {
    //获取指定课程的考勤活动
    getCardActivity() {
      this.cName = this.courseData;
      this.cName = this.cName.filter(x => x.courseName == this.courseName)
      console.log(this.cName)
      return  this.cName
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