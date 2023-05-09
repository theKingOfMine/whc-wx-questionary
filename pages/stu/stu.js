import ActionSheet, {
  ActionSheetTheme
} from 'tdesign-miniprogram/action-sheet/index';
import {
  color
} from "../../tools/coredata"

import { conners_t } from "../../tools/tools"

Page({
  data: {
    color: color,
    conners_t_form: null

  },
  async onLoad(options) {  
    this.conners_t_form = await conners_t()
  },
    // 打开actionSheet
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#EvaluationSelectList',
        context: this,
        align: 'left',
        description: '请选择要填写评估表',
        items: [{
            label: 'SLD-PRS-T评估量表',
            icon: 'circle'
          },
          {
            label: 'CONNERS-T评估量表',
            icon: 'check-circle-filled'
          },
          {
            label: 'SNAP-IV评估量表',
            icon: 'circle'
          }
        ],
      });
    },
    // actionSheet选择时..
    handleSelected(e) {
      console.log(e.detail.index)
      wx.navigateTo({
        url: '/pages/form/form?form=' + JSON.stringify(this.conners_t_form)
      })
    },
})