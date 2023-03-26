<template>
  <h2 class="text-center">用户详情</h2>
  <a-table :columns="columns" :data="data" stripe table-layout-fixed/>
  <h2 class="text-center">当天课程</h2>
  <a-table :columns="columns2" :data="data2">
    <template #optional="{ record }">
      <a-button type="outline" @click="handleClick">创建考勤</a-button>
      <!-- 考勤时间对话框 -->
      <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
         创建考勤
        </template>
        <!-- <div>开始时间</div>
        <a-time-picker
          style="width: 194px"
          v-model="startTime" 
        /> -->
        <!-- <br> -->
        <div>结束时间</div>
        <a-time-picker
          style="width: 194px"
          v-model="endTime"
        />       
       </a-modal>
        <!-- 二维码显示框 -->
        <a-modal v-model:visible="qrCode" @ok="handleOk2" @cancel="handleCancel2">
          <template #title>
            签到二维码
            </template>
            <div class="qrcode">
              <img src="../../assets/images/mp_wechat.png" alt="">
            </div>
        
        </a-modal>
    </template>
  </a-table>
</template>



<script>
import { reactive } from 'vue';
import { ref } from 'vue';
import { getCurrentInstance } from "vue";
export default {
  setup() {
    const show = ref(true)
    const rowSelection = {
      type: 'checkbox'
    };
    const columns = [
      {
        title: '学院',
        dataIndex: 'academy',
      },
      {
        title: '工号',
        dataIndex: 'number',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '教学周',
        dataIndex: 'TeachingWeek',
      },
      {
        title: '星期',
        dataIndex: 'week',
      },
      
    ];
    const columns2 = [
      {
        title: '课程名称',
        dataIndex: 'courseName',
      },
      {
        title: '上课时间',
        dataIndex: 'schoolTime',
      },
      {
        title: '上课地点',
        dataIndex: 'address',
      },
      {
        title: '教学班级名称',
        dataIndex: 'className',
      },
      {
        title: '上课学生数',
        dataIndex: 'studentNum',
      },
      {
      title: '考勤',
      slotName: 'optional'
      }
    ]
    const data = reactive([{
      key: '1',
      academy: '网络空间安全学院',
      number: 23000,
      name: '刘文果',
      TeachingWeek: '16周',
      week: '星期三'

    }]);
    const data2 = reactive([{
      key: '1',
      courseName: '操作系统',
      schoolTime: '上午7点',
      address: '7A201',
      className: '20软卓2班',
      studentNum: '50'
    }, {
      key: '2',
      courseName: '操作系统',
      schoolTime: '上午7点',
      address: '7A201',
      className: '20软卓2班',
      studentNum: '50'
    }, {
      key: '3',
      courseName: '操作系统',
      schoolTime: '上午7点',
      address: '7A201',
      className: '20软卓2班',
      studentNum: '50'
    }, {
      key: '4',
      courseName: '操作系统',
      schoolTime: '上午7点',
      address: '7A201',
      className: '20软卓2班',
      studentNum: '50'
    }, {
      key: '5',
      courseName: '操作系统',
      schoolTime: '上午7点',
      address: '7A201',
      className: '20软卓2班',
      studentNum: '50'
    }]);
    //获取data数据中的开始时间和結束时间
    const T = getCurrentInstance();
    async function getdata() {
      // let startT = T.data.startTime;
      let endT = T.data.endTime;
      // console.log(startT)
      console.log(endT)
    }
    //创建考勤对话框显示
    const visible = ref(false);
    // 二维码对话框显示
    const qrCode = ref(false);
    //让考勤对话框显示
    const handleClick = () => {
      visible.value = true;
    };
    //让二维码对话框显示
    const handleClick2 = () => {
      qrCode.value = true;
    };
    // 创建考勤OK按钮
    const handleOk = () => {
      visible.value = false;
      //获取data中的开始时间和结束时间
      getdata();
      //让二维码对话框显示出来
      handleClick2();
    };
    // 创建二维码OK按钮
    const handleOk2 = () => {
      qrCode.value = false;
    };
    // 创建考勤取消按钮
    const handleCancel = () => {
      visible.value = false;
    }
    // 创建二维码取消按钮
    const handleCancel2 = () => {
      qrCode.value = false;
    }
    return {
      rowSelection,
      columns,
      data,
      columns2,
      data2,
      show,
      visible,
      qrCode,
      handleClick,
      handleOk,
      handleCancel,
      handleClick2,
      handleOk2,
      handleCancel2
    
    }
  },
  data() {
    return {
      // startTime: null,
      endTime: null
    }
  },
  methods: {
    routerChange() {
      this.$router.push('/home/activities')
    },
    print(...arg) {
        console.log(...arg);
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
.qrcode {
  text-align: center;
}
</style>