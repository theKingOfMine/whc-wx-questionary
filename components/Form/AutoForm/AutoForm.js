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
        console.log(newVal)
      }
    }
  },
  data: {
    formInfo: null,
    formData: {}
  },
  methods: {
    submit(e){
      console.log(e)
      console.log(this.data.formData)
  
      // wx.switchTab({
      //   url: '/pages/stu/stu'
      // })
    },
    handleInput(e){
      const key = e.currentTarget.dataset.key
      this.data.formData[key] = e.detail.value
    },
    handPickerReturn(e){
      const key = e.detail.key
      const value = e.detail.value
      this.data.formData[key] = value
    }
  }
})
