import {
  phoneLogin
} from "../../../tools/tools"
import Toast, {
  hideToast
} from 'tdesign-miniprogram/toast/index';
Component({
  data: {

  },
  methods: {
    async phoneLogin(phone) {
      this.handleToast('登陆中...', 'loading', '20000');
      const res = await phoneLogin(phone);
      if(res.code == 200){
        wx.setStorageSync('token', res.token)
        wx.setStorageSync('teacher_id', res.teacher_id)
        wx.setStorageSync('phone', res.phone)
        this.hideToast()
      }else{
        wx.clearStorage()
        this.hideToast()
        this.handleToast(res.msg, 'error', '2000');
      }
     
      console.log(res)
    },
    handleToast(message, theme, direction) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: message,
        theme: theme,
        direction: 'column',
        duration: direction,
        preventScrollThrough: true
      });
    },
    handleHideToast(){
      hideToast({
        context: this,
        selector: '#t-toast',
      });
    }

  }
})