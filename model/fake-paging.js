/*
* created by czb on 2019-11-20
*/
class FakePaging {
  //共计17条数据
  static allData = [
    {
      "id": 23,
      "title": "双色牛仔裤",
      "subtitle": "秋冬新款，做一个Cool Boy",
      "img": "http://i2.sleeve.7yue.pro/n11.png",
      "for_theme_img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
      "price": "1399",
      "discount_price": null,
      "description": null,
      "tags": "",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 10,
      "title": "碳素墨水",
      "subtitle": "虽然我们早已不再使用钢笔书写，但钢笔在纸上划过的笔触永远是键盘无法替代的。一只钢笔+一瓶墨水在一个安静的午后，写写内心的故事。",
      "img": "http://i2.sleeve.7yue.pro/m24.png",
      "for_theme_img": "",
      "price": "80.00",
      "discount_price": "69.00",
      "description": null,
      "tags": "",
      "sketch_spec_id": null,
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 3,
      "title": "抹茶小橡皮",
      "subtitle": "小作文写错了，用它擦一擦",
      "img": "http://i2.sleeve.7yue.pro/m17.png",
      "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu2.png",
      "price": "29.99",
      "discount_price": "17.00",
      "description": null,
      "tags": "一飞推荐",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 15,
      "title": "多彩别针、回形针",
      "subtitle": "每盒70个，可爱多彩",
      "img": "http://i2.sleeve.7yue.pro/m26.png",
      "for_theme_img": null,
      "price": "24",
      "discount_price": "19.9",
      "description": null,
      "tags": "三色可选",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 14,
      "title": "Ins 复古小夹子（Mini)",
      "subtitle": "静静的，享受时光的流逝",
      "img": "http://i2.sleeve.7yue.pro/m23.png",
      "for_theme_img": null,
      "price": "19.9",
      "discount_price": null,
      "description": null,
      "tags": "三色可选",
      "sketch_spec_id": null,
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 8,
      "title": "Ins复古碎花NoteBook",
      "subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
      "img": "http://i2.sleeve.7yue.pro/m19.png",
      "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b6442702-4810-46cb-bb0b-f4602d38e4ff.png",
      "price": "29.99",
      "discount_price": "27.8",
      "description": null,
      "tags": "林白推荐",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 28,
      "title": "Ins复古金色落地灯",
      "subtitle": "Instagram复古台灯，就在此刻回到过去，找寻逝去的记忆",
      "img": "http://i2.sleeve.7yue.pro/a9.png",
      "for_theme_img": "",
      "price": "999",
      "discount_price": null,
      "description": null,
      "tags": "Ins$复古流行",
      "sketch_spec_id": "8",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 26,
      "title": "SemiConer柔质沙发",
      "subtitle": "窝在沙发上，一杯红酒配电影",
      "img": "http://i2.sleeve.7yue.pro/3.png",
      "for_theme_img": "",
      "price": "4799",
      "discount_price": "4200",
      "description": null,
      "tags": "",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 25,
      "title": "复古双色沙发",
      "subtitle": "双色可选，经典青黄两色",
      "img": "http://i2.sleeve.7yue.pro/h3.png",
      "for_theme_img": "",
      "price": "3999",
      "discount_price": null,
      "description": null,
      "tags": "复刻经典$双色可选",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 24,
      "title": "秋冬新款驼色大衣",
      "subtitle": "2020新款，暖暖过秋冬",
      "img": "http://i2.sleeve.7yue.pro/n3.png",
      "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
      "price": "2999",
      "discount_price": "2699",
      "description": null,
      "tags": "经典单色",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 27,
      "title": "Mier双色靠椅",
      "subtitle": "安静的午后，一杯清茶，追忆似水年华。看清风浮动，看落日余晖",
      "img": "http://i2.sleeve.7yue.pro/h1.png",
      "for_theme_img": "http://i1.sleeve.7yue.pro/assets/f6c9fce8-626f-44c0-a709-3f6ef9f3fbef.png",
      "price": "1299",
      "discount_price": null,
      "description": null,
      "tags": "",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 12,
      "title": "林间有风测试商品",
      "subtitle": "测试商品，可购买体验完整支付和订单流程",
      "img": "http://i2.sleeve.7yue.pro/x1.png",
      "for_theme_img": "",
      "price": "0.2",
      "discount_price": null,
      "description": null,
      "tags": "测试数据$可支付",
      "sketch_spec_id": null,
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 11,
      "title": "飞行员墨镜",
      "subtitle": "戴起来像小李子",
      "img": "http://i2.sleeve.7yue.pro/n2.png",
      "for_theme_img": "",
      "price": "77.00",
      "discount_price": null,
      "description": null,
      "tags": null,
      "sketch_spec_id": null,
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 6,
      "title": "Sleeve风袖说牛仔系列",
      "subtitle": "Sleeve风袖说当季经典款",
      "img": "http://i2.sleeve.7yue.pro/n14.png",
      "for_theme_img": "",
      "price": "1799",
      "discount_price": "",
      "description": null,
      "tags": "包邮$热门",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 2,
      "title": "林间有风自营针织衫",
      "subtitle": "秋日冬款，浪漫满屋",
      "img": "http://i1.sleeve.7yue.pro/assets/ecf8d824-19d4-4db2-a5da-872ab014fecd.png",
      "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu1.png",
      "price": "77.00",
      "discount_price": "62.00",
      "description": null,
      "tags": "秋日冬款$浪漫满屋",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 4,
      "title": "印花桌布",
      "subtitle": "生活需要仪式感，吃饭也一样。桌旗+桌布给你绚烂的生命色彩",
      "img": "http://i2.sleeve.7yue.pro/n10.png",
      "for_theme_img": "",
      "price": "119.00",
      "discount_price": "97.00",
      "description": null,
      "tags": "风袖臻选",
      "sketch_spec_id": "5",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    },
    {
      "id": 1,
      "title": "青锋大碗",
      "subtitle": "大碗主要用来盛宽面，凡凡倾情推荐",
      "img": "http://i2.sleeve.7yue.pro/n9.png",
      "for_theme_img": "",
      "price": "12.99",
      "discount_price": "11.11",
      "description": null,
      "tags": "林白推荐",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    }
  ]

  // {
  //   "total": 17,
  //   "count": 17,
  //   "page": 0,
  //   "total_page": 1,
  //   "items": []
  // }
  //获取数据
  static getData(start, count){
    const items = FakePaging._getItems(start, count)
    return {
      total: items.length,
      count: count,
      page: FakePaging._getCurrentPage(start, count),
      total_page: FakePaging._getSumPage(count),
      items: items
    }
  }

  //获取总页码数
  static _getSumPage(count){
    return Math.ceil(17/count)
  }

  //获取当前页码数
  static _getCurrentPage(start, count){
    return Math.ceil(start/count)
  }

  //获取返回数组
  static _getItems(start, count){
    return FakePaging.allData.slice(start, start+count)
  }
}

export {
  FakePaging
}