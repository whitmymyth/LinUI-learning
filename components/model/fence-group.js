/*
* created by czb on 2019-11-23
*/
class FenceGroup {

  spu
  sku_list

  constructor(spu){
    this.spu = spu
    this.sku_list = spu.sku_list
  }

  getFenceValueMatrix(){
    //获取初始二维数组（矩阵）
    const om = this._getOriginFenceValue()
    //二维数组（矩阵）转置获取属性值
    const rm = FenceGroup._rotateFenceValue(om)
    return rm
  }

  //获取初始sku属性二维数组（矩阵）
  _getOriginFenceValue(){
    let specs = []
    this.sku_list.forEach(sku=>{
      specs.push(sku.specs)
    })
    return specs
  }

  //获取二维数组（矩阵）行长度
  static _getMatrixRowNum(m){
    return m.length
  }

  //获取二维数组（矩阵）列长度
  static _getMatrixColNum(m){
    return m[0].length
  }

  //处理二维数组（矩阵）转置
  static _rotateFenceValue(m){
    const rowNum = FenceGroup._getMatrixRowNum(m)
    const colNum = FenceGroup._getMatrixColNum(m)
    let newArr = []
    for(let j=0;j<colNum;j++){
      newArr[j] = []
      for(let i=0;i<rowNum;i++){
        newArr[j].push(m[i][j])
      }
    }
    return newArr
  }

}

export {
  FenceGroup
}