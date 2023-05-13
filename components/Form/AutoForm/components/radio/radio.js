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
      this.triggerEvent("return", {key: this.data.info.name, value: e.detail.value})
    },
  },
});
