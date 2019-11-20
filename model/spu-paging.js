/*
* created by czb on 2019-11-20
*/
import {Paging} from "../utils/paging";

class SpuPaging {
  static getPagingData(){
    return new Paging({
      url: `XX/XX`
    }, 10)
  }
}

export {
  SpuPaging
}