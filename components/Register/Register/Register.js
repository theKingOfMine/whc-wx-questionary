import {teacher_info} from "../../../tools/form/teacher_info"
Component({
  data: {
    formInfo: null,
  },
  lifetimes: {
    attached(){
      this.setData({
        formInfo: teacher_info
      })
    }
  }
})
