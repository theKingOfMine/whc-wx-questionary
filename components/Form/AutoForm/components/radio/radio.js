Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'item': function(newVal, oldVal) {
      if(newVal){
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
    handleChange(e) {
      let info = this.data.info
      info.value = e.detail.value
      this.setData({
        info: info
      })
      this.triggerEvent("return", {key: this.data.info.name, value: info.value})
    },
  },
});
