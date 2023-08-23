import Message from 'tdesign-miniprogram/message/index';
import {
  checkPhoneNumber,
  checkIdCard
} from "../../../tools/tools"

Component({
  properties: {
    data: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'data': function (newVal, oldVal) {
      if (newVal) {
        this.setData({
          formInfo: newVal
        })
      }
    }
  },
  data: {
    formInfo: null
  },
  methods: {
    submit() {
      const form = this.data.formInfo.form

      // 校验数据
      for (let i in form) {
        if (form[i].isRequired) {
          if (form[i].name == 'phone') {
            if (form[i].value && !checkPhoneNumber(form[i].value)) {
              Message.error({
                context: this,
                offset: ['20rpx', '32rpx'],
                duration: 2500,
                content: '手机号码不正确..',
              });
              return
            }
          }

          if (form[i].name == 'identity_card') {
            if (form[i].value && !checkIdCard(form[i].value)) {
              Message.error({
                context: this,
                offset: ['20rpx', '32rpx'],
                duration: 2500,
                content: '身份证号码不正确..',
              });
              return
            }
          }

          if ((form[i].value == null || undefined || '') && !form[i].disable) {
            Message.error({
              context: this,
              offset: ['20rpx', '32rpx'],
              duration: 2500,
              content: form[i].label + ' 未填写',
            });
            return
          }
        }

      }

      wx.showModal({
        title: '请确认',
        content: `是否提交${this.data.formInfo.title.value}的信息`,
        complete: (res) => {
          if (res.cancel) {

          }

          if (res.confirm) {
            this.triggerEvent('return', this.data.formInfo)
          }
        }
      })
    },
    // 实时更新表单数据
    updateInfo(e) {
      this.data.formInfo.form[e.detail.key].value = e.detail.value;
    }
  }
})