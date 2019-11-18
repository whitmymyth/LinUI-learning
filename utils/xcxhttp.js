import {config} from "../config/config";
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

class Xcxhttp {
    static async request({url, data, method='GET'}){
        const res = await promisic(wx.request)({
            url:`${config.baseUrl}${url}`,
            data:data,
            method:method,
            header:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
      return res.data;
    }
}

export {
    Xcxhttp
}