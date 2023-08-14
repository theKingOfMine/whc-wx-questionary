import {baseUrl, dataRequire} from "../../../../../tools/tools"
Component({
  properties: {

  },
  data: {
    teacherList: [],
    baseUrl: baseUrl
  },
  lifetimes: {
    async attached(){
      const res = await dataRequire('teacherListWithStuAndReport')
      console.log(res)
      this.setData({
        teacherList: res
      })
    }
  },
  methods: {
    switchToStuList(e){
      wx.removeStorageSync('otherTeacher_id')
      wx.setStorageSync('otherTeacher_id', e.currentTarget.dataset.teacher.teacher_id)
      wx.switchTab({
        url: '/pages/stu/stu'
      })
    }
  }
})
