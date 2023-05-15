import {baseUrl} from "../../../tools/tools"
Component({
  properties: {
    info: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'info': function (newVal, oldVal) {
      if (newVal) {
        console.log(newVal)
      }
    }
  },
  data: {
    baseUrl: baseUrl
  },
  methods: {

  }
})
