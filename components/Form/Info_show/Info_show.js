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
     
      }
    }
  },
  data: {
    baseUrl: baseUrl
  },
  methods: {

  }
})
