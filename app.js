// app.js
import {getSetting} from "./tools/tools"

App({
  globalData: {
    info: {},
    setting: {},
    inviter_code: ''
  },
  async onLaunch(){
    const res = await getSetting();
    if(res.code == 200){
      this.globalData.setting = res.data[0];
      console.log(res.data[0])
    };
  }
})

