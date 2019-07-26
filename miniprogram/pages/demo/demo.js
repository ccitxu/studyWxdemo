const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listdata:[1,2,3,4],
    text:'数据加油！'
  },
  clickbtn:function (){
    wx.navigateTo({
      url: '/pages/demoDetails/demoDetails?id=1',
      success: function (res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { data:                 '我是数据传递过来的数据！' })
      }
    })
  },
  clickbtn2:function(){
     this.democom.close();
  },
  clicktxt:function(){
    console.log('父类方法！')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.democom = this.selectComponent("#democom");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})