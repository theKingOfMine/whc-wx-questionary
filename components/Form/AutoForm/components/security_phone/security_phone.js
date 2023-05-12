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
      console.log(newVal)
      if (newVal) {
        this.setData({
          info: newVal
        })
      }
    }
  },
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 实时更新input组件数据
    handleInput(e) {
      this.triggerEvent('return', {
        key: e.currentTarget.dataset.key,
        value: e.detail.value
      })
    },
  }
})