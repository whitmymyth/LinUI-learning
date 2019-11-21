// components/spu-preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },

  //监听器
  observers:{
    data:function(data){
      if(!data){
        return
      }
      if(!data.tags){
        return
      }
      //处理标签有两种方式 1JS 2WXS
      //处理标签 字符串=>数组
      const tags = data.tags.split('$');
      this.setData({
        tags,
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tags: Array
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
