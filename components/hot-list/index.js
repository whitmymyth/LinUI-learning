// components/hot-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bannerExt:Object
  },

  //监听器
  observers: {
    "bannerExt": function (bannerExt) {
      if(!bannerExt){
        return
      }
      if(bannerExt.items.length === 0){
        return
      }
      const left = bannerExt.items.find(t=>t.name==='left');
      const righttop = bannerExt.items.find(t=>t.name==='right-top');
      const rightbuttom = bannerExt.items.find(t=>t.name==='right-bottom');
      this.setData({
        left,
        righttop,
        rightbuttom
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
