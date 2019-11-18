/*
* created by czb on 2019-11-15
*/
import {Xcxutils} from "../utils/xcxutils";

class Location {
  static async getLocation(){
    return await Xcxutils.getLocation();
  }
}

export {
  Location
}


