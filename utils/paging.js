/*
* created by czb on 2019-11-19
*/
import {Xcxhttp} from "./xcxhttp";

class Paging {
  url //原始url 防止方法内部req.url导致污染此url
  req //封装请求参数object
  start //获取记录的起始序号
  count //一次获取记录的条数
  locker = false
  moreData
  accumulator = []


  //构造方法 第一个参数是对象类型{url,data,method}
  constructor(req, count=10, start=0){
    this.req = req
    this.count = count
    this.start = start
    this.url = req.url
  }

  //暴露方法
  getMoreData(){
    if(this._getLocker()){
      //请求
      this._realGetData()
    }
    this._relaseLocker()
  }

  //获取数据方法 返回对象类型：
  // {
  //   empty: true, //是否为空
  //   items: [], //本次查询返回列表（数组）
  //   moreData: false, //是否有更多数据
  //   accumulator: [] //累加数据（数组）
  // }
  _realGetData(){
    const req = this._getHttpReq()
    const paging = Xcxhttp.request(req)
    if(!paging){
      return null
    }
    if(paging.total === 0){
      return {
        empty: true,
        items: [],
        moreData: false,
        accumulator: []
      }
    }
    //是否有更多数据
    this.moreData = this._moreData(paging.total_page, paging.page)
    this.accumulator = this.accumulator.concat(paging.items)
    if(this.moreData){
      return {
        empty: true,
        items: paging.items,
        moreData: true,
        accumulator: this.accumulator
      }
    }
    return {
      empty: true,
      items: paging.items,
      moreData: false,
      accumulator: this.accumulator
    }
  }

  //判断是否有更多数据 根据总页码和当前页码判断
  _moreData(totalPage, nowPage){
    return nowPage < totalPage - 1
  }

  //获取请求参数
  _getHttpReq(){
    let url = this.url
    const params = `start=${this.start}&count=${this.count}`
    //两种格式
    //1、用户提供url类似 xx/xx?BB=2 则 + & + start=0&count=10
    //2、用户提供url类似 XX/xx 则 + ? + start=0&count=10
    if(url.indexOf('?') !== -1){
      url += `?` + params
    }else {
      url += `&` + params
    }
    this.req.url = url
    return this.req
  }

  //获取数据锁 防止用户多次刷新请求
  _getLocker(){
    if(!this.locker) {
      return true
    }
    return false
  }

  //释放数据锁
  _relaseLocker(){
    this.locker = false
  }
}

export {
  Paging
}