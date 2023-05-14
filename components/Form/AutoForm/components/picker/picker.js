Component({
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
    info: null,
    value: null
  },
  methods: {
    onPickerChange(e) {
      const { key } = e.currentTarget.dataset;
      const { value } = e.detail;
      const info = this.data.info
      info.value = e.detail.value[0]
      this.setData({
        visible: false,
        info: info
      });
      this.triggerEvent("return", {key: key, value: e.detail.value[0]})
    },

    onPickerCancel(e) {
      this.setData({
        visible: false,
      });
    },
    onPicker() {
      this.setData({ visible: true });
    },
  },
});