import {dataRequire, baseUrl, conners, sld_prs, snap_iv, deleteReport} from "../../../../../tools/tools"

Component({
  data: {
    reportList: [],
    baseUrl: baseUrl,
  },
  lifetimes: {
    attached(){
      this.getReportList();
    }
  },
  methods: {
    async getReportList(){
      const info = getApp().globalData.info
      const res = await dataRequire('reportLogsByteacher', '', {teacher_id: info.teacher_id})
      this.setData({
        reportList: res.code == 200 ? res.data : []
      })
    },
    async editReport(e){
      const report = e.currentTarget.dataset.report
      const res = await dataRequire(report.source_table, '', {[report.source_table + '_id']: report.id})
      const student = await dataRequire('stuWithReportAffirm', '', {stu_id: report.stu_id})
      const form = res.code == 200 ? res.data[0]: null;
      const stu = student.code == 200 ? student.data[0]: null
      console.log(student)
      if(!form){
        thiswx.showToast({
          title: '网络故障..',
          icon: 'error'
        })
        return
      }
      let info = null;
      if(report.source_table == 'conners_t'){
        info = new conners('update').info
      }else if(report.source_table == 'sld_prs_t'){
        info = new sld_prs('update').info
      }else if(report.source_table == 'snap_iv'){
        info = new snap_iv('update').info
      }

      for (let i in info.form) {
        info.form[i].value = form[i]
      }

        wx.navigateTo({
          url: '/pages/form/form?form=' + JSON.stringify(info) + '&stu=' + JSON.stringify(stu)
        })
    
    },
    async deleteReport(e){
      const info = e.currentTarget.dataset.report;
      console.log(info)
      const res = await deleteReport(info)
      if(res.code == 200){
        this.getReportList()
      }
    }
  }

})
