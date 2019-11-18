/*
* created by czb on 2019-11-13
*/
import {Xcxhttp} from "../utils/xcxhttp";

class Theme {
    static async getHomeTopLocationA(){
        return await Xcxhttp.request({
            url:'XXX',
            data:{
                'dd':'dd'
            },
            method:'POST'
        })
    }
}

export {
    Theme
}