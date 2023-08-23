// index.js
import {baseUrl, wx_login} from "../../tools/tools"
import Message from 'tdesign-miniprogram/message/index';
Page({
  data: {
    image: {
      logo: baseUrl + 'upload/images/logo/whc.png',
    },
    invitationCode: '',
    isOpenInviter: false
  },
  inputChange(e){
    this.setData({
      invitationCode: e.detail.value
    })
  },
  onLoad(){
    wx_login();
    const that = this;
    setTimeout(function(){
      that.setData({
        isOpenInviter: true
      })
    }, 2000)
  },
  clearInput(){
    this.setData({
      invitationCode: ''
    })
  },
  submit(){
    wx.showLoading({
      title: '邀请码验证中..',
      mask: true,
    })
    const that = this;
    wx.request({
      url: 'https://www.rongheeducation.com/mck_school/invitation.php',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      data: {
        invitationCode: that.data.invitationCode
      },
      success(res){
        if(res.statusCode == 200){
          if(res.data.code == 200){
            getApp().globalData.inviter_code = that.data.invitationCode;
            wx.navigateTo({
              url: '/pages/teacher/teacher',
            })
          }else{
            wx.showToast({
              title: '邀请码无效，请重新输入',
              icon: 'none'
            })
          }
        }
      },
      fail(e){
        console.log(e)
        wx.showToast({
          title: '网络故障，请稍后重试或联系管理员',
          icon: 'none'
        })
      }
    })
  }
})
