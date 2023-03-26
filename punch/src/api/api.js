// import Vue from 'vue'
import { createApp } from 'vue'
import App from '../App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'


// createApp(App).use(VueAxios, axios)
// Vue.prototype.$http = axios
// axios.defaults.baseURL = '/api'
// axios.defaults.xsrfHeaderName = 'x-xsrf-token'
// axios.defaults.xsrfCookieName = 'XSRF-TOKEN'

//axiosInstance.js
//导入axios
import axios from 'axios'
const app =createApp(App)


//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
// const API = axios.create({
// 	baseUrl:'/api', //请求后端数据的基本地址，自定义
//   xsrfHeaderName: 'x-xsrf-token',
//   xsrfCookieName: 'XSRF-TOKEN'
// })

app.config.globalProperties.$http = axios ;
axios.defaults.baseURL = '/api'
axios.defaults.xsrfHeaderName = 'x-xsrf-token'
axios.defaults.xsrfCookieName = 'XSRF-TOKEN'

//导出我们建立的axios实例模块，ES6 export用法
// export default API


export default {
  // API,
  config () {
    return ajax('/config', 'get')
  },
  updateConfig (data) {
    return ajax('/admin/config', 'post', {
      data
    })
  },
  syncRebuildCourse () {
    return ajax('/admin/sync/rebuildCourse', 'post')
  },
  syncCourseFromAr () {
    return ajax('/admin/sync/courseFromAr', 'post')
  },
  syncMajorClass () {
    return ajax('/admin/sync/majorClass', 'post')
  },
  syncStudent () {
    return ajax('/admin/sync/student', 'post')
  },
  syncCourseStudent (planId) {
    return ajax(`/teacher/plan/${planId}/syncStudent`, 'get')
  },
  syncCourseRecord () {
    return ajax('/admin/sync/courseRecord', 'post')
  },
  updateSetting (data) {
    return ajax('/admin/setting', 'post', {
      data
    })
  },
  syncRebuildStudent () {
    return ajax('/admin/sync/rebuildStudent', 'post')
  },
  studentInfo (studentCode) {
    return ajax('/admin/student', 'get', {
      params: {
        studentCode: studentCode
      }
    })
  },
  logout () {
    return ajax('/logout', 'post')
  },
  logintest () {
    return ajax('/login?username=201841412204', 'get')
  },
  login (data) {
    return ajax('/login', 'post', {
      data
    })
  },
  teacherAllList () {
    return ajax('/admin/teacherList', 'get')
  },
  postCourse (data) {
    return ajax('/admin/course', 'post', {
      data
    })
  },
  homeworkScoreByCoursePlan (coursePlanId) {
    return ajax(`/teacher/${coursePlanId}/homeworkScoreList`, 'get')
  },
  studentScoreByCoursePlan (coursePlanId) {
    return ajax(`/teacher/${coursePlanId}/studentScoreList`, 'get')
  },
  majorList (params) {
    return ajax('/admin/major', 'get', {
      params
    })
  },
  studentClassList (params) {
    return ajax('/admin/studentClass', 'get', {
      params
    })
  },
  updateClassYang (params) {
    return ajax(`/admin/student-class/yang/${params.id}`, 'post', {
      params
    })
  },
  studentList (params) {
    if (params.coursePlanId) {
      return ajax(`/admin/plan/${params.coursePlanId}/students`, 'get', {
        params
      })
    }
    return ajax('/admin/student', 'get', {
      params
    })
  },
  courseRecordPage (params) {
    return ajax('/admin/courseRecord', 'get', {
      params
    })
  },
  adminDeleteCourseRecord (params) {
    return ajax('/admin/courseRecord', 'delete', {
      params
    })
  },
  adminDeleteCoursePlan (params) {
    return ajax('/admin/coursePlan', 'delete', {
      params
    })
  },
  studentsList (coursePlanId) {
    if (coursePlanId) {
      return ajax(`/admin/plan/${coursePlanId}/studentList`, 'get')
    }
    return ajax('/admin/student', 'get')
  },
  teacherList (params) {
    return ajax('/admin/teacher', 'get', {
      params
    })
  },
  coursePlanList (params) {
    return ajax('/admin/coursePlan', 'get', {
      params
    })
  },
  studentListByCoursePlanId (coursePlanId, params) {
    return ajax(`/teacher/course/${coursePlanId}/student`, 'get', {
      params
    })
  },
  studentListCourseRecord (coursePlanId) {
    return ajax(`/teacher/course/${coursePlanId}/students`, 'get')
  },
  deleteStudentCourseRecord (coursePlanId, studentCode) {
    return ajax(`/teacher/course/${coursePlanId}/student/${studentCode}`, 'delete', {
      param: {
        studentCode: studentCode
      }
    })
  },
  postStudentCourseRecord (planId, data) {
    return ajax(`/teacher/course/${planId}/courseRecord`, 'post', {
      data
    })
  },
  restoreHomework (homeworkId) {
    return ajax(`/teacher/homework/${homeworkId}/restore`, 'patch')
  },
  majorSelectList () {
    return ajax('/admin/select/major', 'get')
  },
  studentClassSelectList () {
    return ajax('/admin/select/studentClass', 'get')
  },
  postStudentClass (data) {
    return ajax('/admin/studentClass', 'post', {
      data
    })
  },
  postStudent (data) {
    return ajax('/admin/student', 'post', {
      data
    })
  },
  postStudents (data) {
    return ajax('/admin/students', 'post', {
      data
    })
  },
  patchCoursePlanStudentClass (data) {
    return ajax('/admin/coursePlan', 'patch', {
      data
    })
  },
  getAdminTermInfo () {
    return ajax('/admin/term', 'get')
  },
  postMajor (data) {
    return ajax('/admin/major', 'post', {
      data
    })
  },
  postTeacher (data) {
    return ajax('/admin/teacher', 'post', {
      data
    })
  },
  dashboard () {
    return ajax('/admin/general', 'get')
  },
  postFile (data) {
    return ajax('/student/uploadHomework', 'post', {
      data
    })
  },
  deleteFile (fileName) {
    return ajax(`/file/${fileName}`, 'delete')
  },
  downloadHomeworkPlanAttachment (homeworkPlanId) {
    return axios.get(`/file/homeworkPlan/${homeworkPlanId}/attachment`, {
      responseType: 'blob'
    })
  },
  downloadOriginHomeworkPdf (homeworkId) {
    return axios.get(`/file/homework/${homeworkId}/pdf`, {
      responseType: 'blob'
    })
  },
  markedHomework (homeworkId, data) {
    return ajax(`/teacher/homework/${homeworkId}/mark`, 'post', {
      data
    })
  },
  downloadMarkedHomeworkPdf (homeworkId) {
    return axios.get(`/file/homework/${homeworkId}/markedHomework`, {
      responseType: 'blob'
    })
  },
  downloadHomeworkAttachment (homeworkId) {
    return axios.get(`/file/homework/${homeworkId}/attachment`, {
      responseType: 'blob'
    })
  },
  getUserInfo () {
    return ajax('/user/profile', 'get')
  },
  postUserInfo (data) {
    return ajax('/user/profile', 'post', {
      data
    })
  },
  getHomeworkPlanList (params) {
    return ajax('/student/plan', 'get', {
      params
    })
  },
  getHomeworkPlan (planId) {
    return ajax(`/teacher/plan/${planId}`, 'get')
  },
  postHomeworkScore (homeworkId, data) {
    return ajax(`/teacher/homework/${homeworkId}/mark`, 'post', {
      data
    })
  },
  updateHomeworkScore (homeworkId, data) {
    return ajax(`/teacher/homework/${homeworkId}/score`, 'patch', {
      data
    })
  },
  getTeacherCourseList (params) {
    return ajax('/teacher/course', 'get', {
      params
    })
  },
  getHomeworkPlanMemberInfo (homeworkPlanId, params) {
    return ajax(`/teacher/homeworkPlan/${homeworkPlanId}/memberInfo`, 'get', {
      params
    })
  },
  getAdminHomeworkPlanList (params) {
    return ajax('/admin/homeworkPlan', 'get', {
      params
    })
  },
  getAdminHomeworkList (params) {
    return ajax('/admin/homework', 'get', {
      params
    })
  },
  getTeacherHomeworkPlanList (params) {
    return ajax('/teacher/plan', 'get', {
      params
    })
  },
  getSubmittedStudentList (homeworkPlanId, params) {
    return ajax(`/teacher/plan/${homeworkPlanId}/student`, 'get', {
      params
    })
  },
  getHomeworkStatistics (homeworkPlanId) {
    return ajax(`/teacher/homeworkPlan/${homeworkPlanId}/statistics`, 'get')
  },
  deleteTeacherHomeworkPlan (planId) {
    return ajax(`/teacher/plan/${planId}/`, 'delete')
  },
  postTeacherHomeworkPlan (data) {
    return ajax('/teacher/plan', 'post', {
      data
    })
  },
  getTeacherHomeworkListUnMarked (homeworkPlanId, params) {
    return ajax(`/teacher/plan/${homeworkPlanId}/homeworkList`, 'get', {
      params
    })
  },
  getTeacherHomeworkPlan (homeworkPlanId) {
    return ajax(`/teacher/plan/${homeworkPlanId}`, 'get')
  },
  updateTeacherHomeworkPlan (data) {
    return ajax('/teacher/plan', 'put', {
      data
    })
  },
  getTeacherTermInfo () {
    return ajax('/teacher/term', 'get')
  },
  getStudentTermInfo () {
    return ajax('/student/term', 'get')
  },
  getTeacherHomeworkList (homeworkPlanId, params) {
    return ajax(`/teacher/plan/${homeworkPlanId}/homework`, 'get', {
      params
    })
  },
  getStudentClassList () {
    return ajax('/teacher/studentClass', 'get')
  },
  updateStudentHomeworkScore (homeworkId, data) {
    return ajax(`/student/homework/${homeworkId}`, 'patch', {
      data
    })
  },
  getStudentHomeworkPlanList (params) {
    return ajax('/student/plan', 'get', {
      params
    })
  },
  getStudentCourseList (params) {
    return ajax('/student/course', 'get', {
      params
    })
  },
  postStudentHomework (data) {
    return ajax('/student/homework', 'post', {
      data
    })
  },
  deleteStudentHomework (homeworkId) {
    return ajax(`/student/homework/${homeworkId}`, 'delete')
  },
  getStudentHomework (homeworkId) {
    return ajax(`/student/homework/${homeworkId}`, 'get')
  },
  getStudentHomeworkList (params) {
    return ajax('/student/homework', 'get', {
      params
    })
  },
  unFollowCourse (coursePlanId) {
    return ajax(`/student/course/${coursePlanId}`, 'delete')
  },
  followCourse (coursePlanId) {
    return ajax(`/student/course/${coursePlanId}`, 'post')
  },
  downloadGroupFile () {
    return axios.get('/teacher/course/groupFile', {
      responseType: 'blob'
    })
  },
  teacherSendMsg (data) {
    return ajax('/teacher/send/msg', 'post', {
      data
    })
  },
  resubmitHomework (data) {
    return ajax('/teacher/resubmitHomework', 'post', {
      data
    })
  },
  resubmitStudent (homeworkPlanId) {
    return ajax(`/teacher/resubmit/${homeworkPlanId}/student`, 'get')
  },
  homeworkDetail (homeworkId) {
    return ajax(`/teacher/homework/${homeworkId}`, 'get')
  },
  wechatCheck () {
    return ajax('/student/wechat/check', 'get')
  },
  getSampleGrade (param) {
    return ajax('/teacher/plan/sample-grade', 'get', {
      params: param
    })
  },
  duplicateHW (data) {
    return ajax('/teacher/duplicate', 'post', {
      data
    })
  },
  initSampleGrade () {
    return ajax('/admin/init/sampleGrade', 'get')
  },
  test () {
    return ajax('student/course', 'post')
  }
}

/**
 * @param url
 * @param method get|post|put|delete...
 * @param params like queryString. if a url is index?a=1&b=2, params = {a: '1', b: '2'}
 * @param data post data, use for method put|post
 * @returns {Promise}
 */
function ajax (url, method, options) {
  if (options !== undefined) {
    var { params = {}, data = {} } = options
  } else {
    params = data = {}
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then((res) => {
      // 若后端返回为-11，则为session失效，应退出当前登录用户
      if (res.data.code === -11) {
        window.location.href = '/login'
        return
      }
      // API正常返回(status=20x), 是否错误通过有无error判断
      if (res.data.code !== 0) {
        app.config.globalProperties.$error(res.data.msg)
        reject(res)
      } else {
        resolve(res)
        if (method !== 'get') {
          app.config.globalProperties.prototype.$success('Succeeded')
        }
      }
    }, res => {
      if (res.response) {
        if (res.response.status === 401) {
          window.location.href = '/login'
          return
        } else if (res.response.status === 404) {
          app.config.globalProperties.prototype.$error('请求资源不存在')
          reject(res)
          return
        } else if (res.response.status === 504) {
          app.config.globalProperties.prototype.$error('服务器响应超时，请稍后重试')
          return
        }
      }
      // API请求异常，一般为Server error 或 network error
      reject(res)
      app.config.globalProperties.prototype.$error(res.data.data)
    })
  })
}
