/*
* created by czb on 2019-11-14
*/
import {Xcxhttp} from "../utils/xcxhttp";

class Banner {
  static BANNER_LOCATIONA = "b-1";
  static async getHomeBanner(){
    return await Xcxhttp.request({
      url: `XX/XX${Banner.BANNER_LOCATIONA}`,
      data:{
        aa: 'aa'
      }
    })
  }
}

export {
  Banner
}