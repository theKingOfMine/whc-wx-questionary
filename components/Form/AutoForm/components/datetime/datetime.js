// components/Form/AutoForm/components/datetime/datetime.js
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
    dateText: '',

    // 指定选择区间起始值
    start: '2000-01-01',
    end: '2030-09-09',
  },

  /**
   * 组件的方法列表
   */
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

      this.triggerEvent('return', {key: this.data.info.name, value: value});
      console.log({key: this.data.info.name, value: value})
      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },

  }
})