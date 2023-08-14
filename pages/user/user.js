// index.js
import {color, baseUrl, dataRequire, teacher_info} from "../../tools/tools"

Page({
  data: {
    color: color,
    teacher: {},
    baseUrl: baseUrl,
    isOpenExhibition: false //打开数据展示
  },
  async onShow(){
    this.teacherInfo()
    this.setData({
      isOpenExhibition: true
    })
  },
  onHide(){
    console.log('我被关闭了')
    this.setData({
      isOpenExhibition: false
    })
  },
  async teacherInfo(){
    const teacher_id = wx.getStorageSync('teacher_id')
    const res = await dataRequire('teacher', {id: teacher_id}, 'head_img, name, position, class, grade, school, id, phone, register_time')
    const teacher = res[0]
    this.setData({
      teacher: teacher
    })
  },
  // 教师信息更新
  teacherUpdate(){
    let teacher = this.data.teacher;
    teacher_info.title.isHide = false;
    teacher_info.notes.isHide = false;
    teacher_info.form.head_img.isHide = false;
    teacher_info.form.head_img.disable = false;
    teacher_info.submitTitle = '信息更新';
    teacher_info.askfor = 'update'
    teacher_info.form.security_code.isHide = true
    teacher_info.transferTo = '/pages/user/user'
    for(let i in teacher_info.form){
      if(teacher[i]){
        teacher_info.form[i].value = teacher[i]
      }
    }
    wx.navigateTo({
      url: '/pages/form/form?form=' + JSON.stringify(teacher_info),
    })
  }
})
