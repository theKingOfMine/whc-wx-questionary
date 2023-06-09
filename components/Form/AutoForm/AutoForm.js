import Message from 'tdesign-miniprogram/message/index';

Component({
  properties: {
    data: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'data': function(newVal, oldVal) {
      if(newVal){
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
    submit(){
      const form = this.data.formInfo.form
      for(let i in form){
        if((form[i].value == null || undefined || '' )&& !form[i].disable){
          Message.error({
            context: this,
            offset: ['20rpx', '32rpx'],
            duration: 2500,
            content: form[i].label + ' 未填写',
          });
          return
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
    updateInfo(e){
      this.data.formInfo.form[e.detail.key].value = e.detail.value
      console.log(this.data.formInfo.form[e.detail.key])
    }
  }
})
