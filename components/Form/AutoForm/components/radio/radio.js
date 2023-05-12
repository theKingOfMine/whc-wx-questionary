Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  data: {
    checked: false,
  },
  methods: {
    handleChange(e) {
      this.setData({
        checked: e.detail.checked,
      });
    },
  },
});
