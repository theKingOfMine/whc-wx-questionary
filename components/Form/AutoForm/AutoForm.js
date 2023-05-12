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
      this.triggerEvent('return', this.data.formInfo)
    },
    // 实时更新表单数据
    updateInfo(e){
      this.data.formInfo.form[e.detail.key].value = e.detail.value
      console.log(this.data.formInfo.form[e.detail.key].value )
    }
  }
})
