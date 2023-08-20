// components/Form/AutoForm/components/input/input.js
Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'item': function (newVal, oldVal) {
      if (newVal) {
        this.setData({
          info: newVal
        })
      }
    }
  },
  data: {
    info: null,
    isAccess: false,
    status: 'error'
  },
  methods: {
    // 实时更新input组件数据
    handleInput(e) {
      let info = this.data.info
      info.value = e.detail.value
      this.setData({
        info: info
      })
      this.triggerEvent('return', {
        key: e.currentTarget.dataset.key,
        value: e.detail.value
      })
    },
    handleClick(){
      let info = this.data.info
      if(info.isReadonly){
        wx.showToast({
          title: info.label + '不可更改',
          icon: 'none'
        })
      }
    }
  }
})