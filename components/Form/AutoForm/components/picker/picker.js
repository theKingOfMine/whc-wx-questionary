Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  data: {
    value: null,
  },

  methods: {
    onPickerChange(e) {
      const { key } = e.currentTarget.dataset;
      const { value } = e.detail;
      this.setData({
        visible: false,
        value: value[0]
      });
      console.log( {key: key, value: value[0]})
      this.triggerEvent("return", {key: key, value: value[0]})
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