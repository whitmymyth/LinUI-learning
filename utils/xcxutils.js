/*
* created by czb on 2019-11-15
*/
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

class Xcxutils {
  static async getLocation(){
    return await promisic(wx.getLocation)({
      type: 'wgs84'
    }).catch(err=>{
      return 1111;
    })
  }

  static async login(){
    return await promisic(wx.login)({})
  }

  static async openSetting(){
    return await promisic(wx.openSetting)({})
  }
}

export {
  Xcxutils
}
