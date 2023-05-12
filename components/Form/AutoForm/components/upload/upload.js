import {
  uploadImg
} from "../../../../../tools/tools"

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
    headImg: [],
    info: null
  },
  methods: {
    async handleAdd(e) {
      this.setData({
        headImg: e.detail.files
      })
      const url = e.detail.files[0].url
      const img_src = await uploadImg(url)
      console.log(img_src)
      this.triggerEvent('return', {
        value: img_src,
        key: this.data.info.name
      })
    },
    handleRemove(e) {
      this.setData({
        headImg: ''
      })
    },
  },
});