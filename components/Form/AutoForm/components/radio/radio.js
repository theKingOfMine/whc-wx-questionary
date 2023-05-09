Component({
  properties: {
    radio: {
      type: Object,
      value: {}
    }
  },
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    value: 0,
    value1: 0,
  },
  methods: {
    onChange(e) {
      this.setData({ value: e.detail.value });
      console.log(e)
    },
    onChange1(e) {
      this.setData({ value1: e.detail.value });
      console.log(e)
    },
  },
});
