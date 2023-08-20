import {dataRequire} from "../../../../tools/tools"

Component({
  properties: {
    teacher: {
      type: Object,
      value: null
    }
  },
  data: {
    teacherReport: {},
    tabsValue: 0,
    calculateReport: {},
    setting: null
  },
  lifetimes: {
    async attached(){
      this.setData({
        setting: getApp().globalData.setting
      })
        
        this.calculateTeacherMetrics()
    }
  },
  methods: {
    // 填写的表的数量
    async calculateTeacherMetrics(){
      wx.showLoading({
        title: '报告加载中..',
      })
        const res = await dataRequire('calculateTeacherMetrics', '', {teacher_id: this.properties.teacher.teacher_id});
        console.log(res)
        if(res.code == 200){
          this.setData({
            calculateReport: res.data[0]
          })
        }
        wx.hideLoading()
    },
    onTabsChange(e){
      if(e.detail.value == 0){
        wx.showLoading({
          title: '报告加载中..',
        })
        this.calculateTeacherMetrics()
        this.setData({
          tabsValue: 0
        })
      }else if(e.detail.value == 1){
        this.setData({
          tabsValue: 1
        })
      }
    },
    makePhoneCall(){
      wx.makePhoneCall({
        phoneNumber: '17301133340',
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
    }
  }
})
