<template>
  <h2 class="text-center">课程管理</h2>
  <h3 class="text-center">本学期任教课程</h3>
  <a-table :columns="columns" :data="data"  :row-selection="rowSelection">
    <template #optional="{ record }">
      <a-button type="primary" @click="cardManage(record.courseName)">考勤管理</a-button>
    </template>
    <template #optional2="{ record }">
      <!-- <a-button type="primary" @click="cardManage(record.key)">考勤统计</a-button> -->
      <a-button type="primary" @click="handleClick(record.courseName)">考勤统计</a-button>
        <a-modal v-model:visible="visible" @ok="cardStatistics(cName2)" @cancel="handleCancel">
         <template #title>
           选择时间范围
         </template>
         <div>选择要统计的时间范围</div>
         <a-range-picker
          mode="week"
          @change="onChange"
          @select="onSelect"
          style="width: 254px; marginBottom: 20px;"
           />
        </a-modal>
        </template>
  </a-table>
</template>

<script>
import { ref } from 'vue';
import { getCurrentInstance } from "vue";
import { reactive } from 'vue';
export default {
  data() {
    return {
      cName: null,
      cName2: null
    }
  },
  setup() {
    const rowSelection = reactive({
      type: 'checkbox',
      showCheckedAll: true,
      onlyCurrent: false,
    });

    const show = ref(true)

    const columns = [{
      title: '课程名称',
      dataIndex: 'courseName',
    }, {
      title: '教学班级名称',
      dataIndex: 'className',
    }, {
      title: '上课学生数',
      dataIndex: 'studentNumber',
    }, {
      title: '课程考勤管理',
      slotName: 'optional'
    }, {
      title: '课程考勤统计',
      slotName: 'optional2'
    }];
    const data = [{
      key: '1',
      courseName: '操作系统',
      className: '软卓2班',
      studentNumber: 32,
    },{
      key: '2',
      courseName: '大学物理',
      className: '软卓2班',
      studentNumber: 32,
    },{
      key: '3',
      courseName: '数据库',
      className: '软卓2班',
      studentNumber: 32,
    },{
      key: '4',
      courseName: '概率论',
      className: '软卓2班',
      studentNumber: 32,
    },{
      key: '5',
      courseName: '高等数学',
      className: '软卓2班',
      studentNumber: 32,
    },];
     const visible = ref(false);
     
     const x = getCurrentInstance();

    const handleClick = (cName) => {
      // console.log(cName)
      x.data.cName2 = cName
      visible.value = true;
    };
    const handleCancel = () => {
      visible.value = false;
    }
    return {
      columns,
      data,
      show,
      visible,
      rowSelection,
      handleClick,
      handleCancel,
      onSelect(dateString, date) {
        console.log('onSelect', dateString, date);
      },
      onChange(dateString, date) {
        console.log('onChange: ', dateString, date);
      },
    }
  },
  methods: {
    cardManage(courseName) {
      // console.log(courseName);
      this.$router.push('/home/coursecardmanage/'+courseName)
      
    },
    cardStatistics(courseName) {
      // handleOk()
      this.$router.push('/home/coursecardstatistics/'+courseName)
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
</style>