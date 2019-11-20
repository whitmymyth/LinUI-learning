/*
* created by czb on 2019-11-19
*/
import {Xcxhttp} from "./xcxhttp";
import {FakePaging} from "../model/fake-paging";

class Paging {
  url //原始url 防止方法内部req.url导致污染此url
  req //封装请求参数object
  start //获取记录的起始序号
  count //一次获取记录的条数
  locker = false
  moreData = true
  sumData = [] //所有组合数据

  //构造方法 第一个参数是对象类型{url,data,method}
  constructor(req, count=10, start=0){
    this.req = req
    this.count = count
    this.start = start
    this.url = req.url
  }

  //暴露方法
  async getMoreData(){
    if(!this.moreData){
      return
    }
    if(!this._getLocker()){
      return
    }
    const data = await this._realGetData()
    this._relaseLocker()
    return data
  }

  //获取数据方法 返回对象类型：
  // {
  //   empty: true, //是否为空
  //   items: [], //本次查询返回列表（数组）
  //   moreData: false, //是否有更多数据
  //   accumulator: [] //累加数据（数组）
  // }
  async _realGetData(){
    //http请求
    // const req = this._getHttpReq()
    // const paging = Xcxhttp.request(req)
    //本地请求 为实现使用本地化分页假数据
    const paging = await FakePaging.getData(this.start, this.count)
    //本地假数据
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
    this.moreData = Paging._moreData(paging.total_page, paging.page)
    if(this.moreData){
      this.start += this.count
    }
    this._accumulatorSumData(paging.items)
    return {
      empty: false,
      items: paging.items,
      moreData: this.moreData,
      accumulator: this.sumData
    }
  }

  //计算所有数据
  _accumulatorSumData(items){
    this.sumData = this.sumData.concat(items)
  }

  //判断是否有更多数据 根据总页码和当前页码判断
  static _moreData(totalPage, nowPage){
    return nowPage < totalPage - 1
  }

  //获取请求参数
  _getHttpReq(){
    let url = this.url
    const params = `start=${this.start}&count=${this.count}`
    //两种格式
    //1、用户提供url类似 xx/xx?BB=2 则 + & + start=0&count=10
    //2、用户提供url类似 XX/xx 则 + ? + start=0&count=10
    //if(url.indexOf('?') !== -1){
    if(!url.includes('?')){
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
    this.locker = true
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