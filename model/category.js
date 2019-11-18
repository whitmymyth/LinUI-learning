/*
* created by czb on 2019-11-15
*/
import {Xcxhttp} from "../utils/xcxhttp";

class Category {
  static async getHomeCategory(){
    return await Xcxhttp.request({
      url: `CC/CC`
    })
  }
}

export {
  Category
}