// pages/demo/components/demo-components.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value: '标题'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    message:'主键数据加油！',
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(){
     this.setData({
       isShow: !this.data.isShow
     }) 
      console.log(this.data.isShow);
    },
    emitfater(){
      this.triggerEvent("clicktxt")
    }
  }
})
