Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'item': function(newVal, oldVal) {
      console.log(newVal, oldVal)
      if(newVal){
        this.setData({
          info: newVal
        })
      }
    }
  },
  data: {
    info: {},
    mode: '',
    dateVisible: false,
    date: new Date().getTime(), // 支持时间戳传入
    // 指定选择区间起始值
    start: '2000-01-01',
    end: '2030-09-09',
  },
  methods: {
    showPicker(e) {
      const {
        mode
      } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const {
        mode
      } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const {
        value
      } = e.detail;
      const {
        mode
      } = this.data;
      let info = this.data.info
      info.value = value
      this.triggerEvent('return', {key: info.name, value: info.value});
      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
        info: info
      });

      this.hidePicker();
    },
    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  }
})