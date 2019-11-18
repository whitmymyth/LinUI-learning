/*
* created by czb on 2019-11-15
*/
import {Xcxutils} from "../utils/xcxutils";
import {Xcxhttp} from "../utils/xcxhttp";

class Login {
  static async getOpenid(){
    const res = await Xcxutils.login();
    return await Xcxhttp.request({
      url: `login/112233445566`,
      data:{
        code: res.code
      }
    })
  }
}

export {
  Login
}