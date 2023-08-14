// index.js
import {baseUrl, wx_login} from "../../tools/tools"

Page({
  data: {
    image: {
      logo: baseUrl + 'upload/images/logo/whc.png',
    }
  },
  onLoad(){
    wx_login();
  }
})
