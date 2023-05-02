// pages/form/form.js
import {
  SLD_PRS_T,
  stu_info
} from "../../tools/coredata"

import {color} from "../../tools/coredata"

Component({
  // properties: {
  //   // 这里定义了innerText属性，属性值可以在组件使用时指定
  //   innerText: {
  //     type: String,
  //     value: 'default value',
  //   }
  // },
  data: {
    title: '[DSM-5/SLD/PRS/T]学龄儿童学习能力持续性发展特质 教育实践综合评估量表（教师问卷版）',
    describe: '评估提示：填写此表时请根据儿童过去 6 个月的行为举止认真/客观地填写此表！ 本报告为教育实践评估，最终评价需结合医疗诊断评估报告综合评定。',
    SLD_PRS_T: SLD_PRS_T,
    stu_info: stu_info,
    mode: '',
    dateVisible: false,
  },
  methods: {
    showPicker(e) {
      const {
        mode
      } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const {
        mode
      } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const {
        value
      } = e.detail;
      const {
        mode
      } = this.data;

      console.log('confim', value);

      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });

      this.hidePicker();
    },
    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  }
})