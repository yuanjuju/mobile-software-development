Page({
  /**获取实时天气 */
  
  getWeather:function(){
    var that = this;
    
    // 先通过地名获取 Location ID
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data: {
        location: that.data.region[1],  // 使用地名
        key: '6c468480cc4e455f9a3930212f5224f5'
      },
      success: function(res) {
        // 获取 Location ID
        var locationId = res.data.location[0].id;
        
        // 使用 Location ID 查询天气
        wx.request({
          url: 'https://devapi.qweather.com/v7/weather/now',
          data: {
            location: locationId,
            key: '6c468480cc4e455f9a3930212f5224f5',
            adm: that.data.region[1] // 使用地名
          },
          success: function(res) {
            console.log(res.data);
            that.setData({now:res.data.now});
          }
        })
      }
    });
  },

  /**
   * 页面的初始数据
   */
  data: {
    region:['安徽省','芜湖市','镜湖区']
  },
  regionChange:function(e){
    this.setData({region: e.detail.value});
    this.getWeather();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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
