// components/Form/AutoForm/components/input/input.js
Component({
  /**
   * 组件的属性列表
   */
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
    info: null
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
  }
})