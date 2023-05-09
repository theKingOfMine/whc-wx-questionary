import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';
Component({
  properties: {
    isOpen: {
      type: Boolean,
      value: false
    },
  },
  data: {

  },
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#EvaluationSelectList',
        context: this,
        items: [
          {
            label: '选项一',
          },
          {
            label: '选项二',
          },
          {
            label: '选项三',
          },
          {
            label: '选项四',
          },
        ],
      });
    },
  }
})
