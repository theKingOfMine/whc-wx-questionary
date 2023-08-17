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
    cahrtData: {
      x: ['conners_t', 'sld_prs_t', 'snap_iv'],
      y: [10, 20, 30]
    },
    teacherRankingList: [],
    rate: 0,
    tabsValue: 0,
    calculateReport: {}
  },
  lifetimes: {
    async attached(){
        this.calculateTeacherMetrics()
    }
  },
  methods: {
    // 老师数据
    async getTeacherList(){
      const teacher_id = wx.getStorageSync('teacher_id')
      const res = await dataRequire('teacherList', {id: teacher_id})

      let teacherReport = res[0]
      console.log(teacherReport)
      teacherReport.totalReport = parseInt(teacherReport.conCount) + parseInt(teacherReport.snaCount) +  parseInt(teacherReport.sldCount)
      this.setData({
        teacherReport: res[0],
        cahrtData: {
          x: ['conners_t', 'sld_prs_t', 'snap_iv'],
          y: [parseInt(teacherReport.conCount), parseInt(teacherReport.sldCount), parseInt(teacherReport.snaCount)]
        }
      })
    },
    // 填写的表的数量
    async calculateTeacherMetrics(){
        const res = await dataRequire('calculateTeacherMetrics', '', {teacher_id: this.properties.teacher.teacher_id});
        console.log(res)
        if(res.code == 200){
          this.setData({
            calculateReport: res.data[0]
          })
        }
    },
    onTabsChange(e){
      if(e.detail.value == 0){
        this.setData({
          tabsValue: 0
        })
      }else if(e.detail.value == 1){
        this.setData({
          tabsValue: 1
        })
      }else if(e.detail.value == 2){
        this.setData({
          tabsValue: 2
        })
      }
    }
  }
})
