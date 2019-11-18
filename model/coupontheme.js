/*
* created by czb on 2019-11-15
*/
import {Xcxhttp} from "../utils/xcxhttp";

class Coupontheme {
  static async getHomeCouponTheme(){
    return await Xcxhttp.request({
      url: `CC/CC`
    })
  }
}

export {
  Coupontheme
}