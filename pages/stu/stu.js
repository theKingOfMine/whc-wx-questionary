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
    conners_t_form: null,
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
  // 打开actionSheet
  handleAction() {
    console.log('到这了')
    // 指令调用不同于组件引用不需要传入visible
    const basicListOption = {
      theme: ActionSheetTheme.List,
      selector: '#EvaluationSelectList',
      items: [{
          label: '默认选项',
        },
        {
          label: '失效选项',
          disabled: true,
        },
        {
          label: '警告选项',
          color: '#e34d59',
        },
      ],
    };

    const handler = ActionSheet.show(basicListOption);
    // ActionSheet.show({
    //   theme: ActionSheetTheme.List,
    //   selector: '#EvaluationSelectList',
    //   context: this,
    //   align: 'left',
    //   description: '请选择要填写评估表',
    //   items: [{
    //       label: 'SLD-PRS-T评估量表',
    //       icon: 'circle'
    //     },
    //     {
    //       label: 'CONNERS-T评估量表',
    //       icon: 'check-circle-filled'
    //     },
    //     {
    //       label: 'SNAP-IV评估量表',
    //       icon: 'circle'
    //     }
    //   ],
    // });
  },
  // actionSheet选择时..
  handleSelected(e) {
    console.log(e.detail.index)
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(this.conners_t_form)
    })
  },
  addNewStu() {
    stu_info.askfor = 'insert'
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(stu_info),
    })
  }
})