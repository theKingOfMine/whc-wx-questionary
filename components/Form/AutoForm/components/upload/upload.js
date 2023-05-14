import {
  uploadImg, baseUrl
} from "../../../../../tools/tools"

Component({
  properties: {
    item: {
    }
  },
  observers: {
    'item': function(newVal, oldVal) {
      if(newVal){
        const info = newVal
        const nameBox = info.value.split('/')
        const name = nameBox[nameBox.length -1]
        console.log(name)
        let headImg = [
          {
            url: baseUrl + info.value,
            name: name,
            type: 'image'
          }
        ]
        this.setData({
          info: newVal,
          headImg: headImg
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
      console.log(e)
      this.setData({
        headImg: e.detail.files
      })
      const url = e.detail.files[0].url
      const img_src = await uploadImg(url)
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