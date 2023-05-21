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
    info: null,
    defaultVal: true,
  },
  methods: {
    handleChange(e) {
      let info = this.data.info
      this.setData({
        defaultVal: e.detail.value,
      });
      this.triggerEvent("return", {key: this.data.info.name, value: e.detail.value ? info.selectList[0] : info.selectList[1]})
    
    },
    // handleChange(e) {
  
    // },
  },
});
