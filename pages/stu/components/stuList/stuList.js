 import { dataRequire, stu_info } from "../../../../tools/tools"
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    stuList: []
  },
  lifetimes: {
    async ready(){
      this.setData({
        stuList: await dataRequire('stu')
      })
    }
  },
  methods: {
    cellClick(){
      this.triggerEvent('cellTap')
    },
    handleEdit(e){
      let info = e.currentTarget.dataset.stu
      let stu = stu_info
      for(let i in stu.form){
        stu.form[i].value = info[i]
      }
      stu.askfor = 'update'
      stu.submitTitle = '修改'
      wx.navigateTo({
        url: '/pages/form/form?form=' + JSON.stringify(stu)
      })
    }
  }
})
