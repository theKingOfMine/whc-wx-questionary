import {dataRequire, baseUrl, conners_t_info, sld_prs_t_info, snap_iv_info, } from "../../../../../tools/tools"

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    reportList: [],
    baseUrl: baseUrl,
    infoBox: {
      conners_t: conners_t_info,
      sld_prs_t: sld_prs_t_info,
      snap_iv: snap_iv_info
    }
  },
  lifetimes: {
    async attached(){
      const teacher_id = wx.getStorageSync('teacher_id')
      const res = await dataRequire('reportLogsByteacher', {id: teacher_id})
      console.log(res)
      this.setData({
        reportList: res
      })
    }
  },
  methods: {
    async editReport(e){
      const report = e.currentTarget.dataset.report
      const res = await dataRequire(report.report_name, {id: report.id, teacher_id: report.teacher_id, stu_id: report.stu_id})
  
        const report_info = res[0]
        const infoBox = this.data.infoBox
        let info = infoBox[report.report_name]
        
        for (let i in info.form) {
          info.form[i].value = report_info[i]
        }

        info.askfor = 'update'
        info.submitTitle = '修改'
        info.transferTo = '/pages/user/user'
        wx.navigateTo({
          url: '/pages/form/form?form=' + JSON.stringify(info)
        })
    
    }
  }

})
