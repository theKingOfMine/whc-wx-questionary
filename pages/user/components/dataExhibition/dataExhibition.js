import {dataRequire} from "../../../../tools/tools"

Component({
  data: {
    teacherReport: {},
    cahrtData: {
      x: ['conners_t', 'sld_prs_t', 'snap_iv'],
      y: [10, 20, 30]
    },
    teacherRankingList: [],
    rank: 0, //排名
    rate: 0,
    isOpenBarchart: true
  },
  lifetimes: {
    async attached(){
        this.getTeacherList()
        this.getTeacherRanking()
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
    // 计算填表进度排名
    async getTeacherRanking(){
      const res = await dataRequire('sortReportByTeacher')
      console.log(res)
      res.sort(function(a, b){
        if(parseFloat(a.percentage) > parseFloat(b.percentage)){
          return -1
        }else{
          return 1
        }
      })
    
      const teacher_id = wx.getStorageSync('teacher_id')
      for(let i=0; i < res.length; i ++){
        if(res[i].teacher_id == teacher_id){
          this.setData({
            teacherRankingList: res,
            rank: i + 1,
            rate:( 5 * (parseFloat(res[i].percentage) / 100)).toFixed(0)
          })
          break
        }
      }
   
      
      
    },
    onTabsChange(e){
      if(e.detail.value == 1){
        this.setData({
          isOpenBarchart: false
        })
      }else {
        this.setData({
          isOpenBarchart: true
        })
      
      }
    }
  }
})
