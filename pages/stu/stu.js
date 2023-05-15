import ActionSheet, {
  ActionSheetTheme
} from 'tdesign-miniprogram/action-sheet/index';

import {
  color,
  stu_info
} from "../../tools/tools"

Page({
  data: {
    color: color,
    isOpenStuList: true
  },
  onShow(options) {
   this.setData({
     isOpenStuList: true
   })
  },
  onHide(){
    this.setData({
      isOpenStuList: false
    })
  },
  addNewStu() {
    stu_info.askfor = 'insert'
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(stu_info),
    })
  }
})