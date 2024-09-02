var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //幻灯片素材
    swiperImg: [
      {src: 'http://news.ouc.edu.cn/_upload/article/images/dd/19/ede76a4a4ebdb1d3ab278a12fdd8/9bb154f8-e33b-421a-b453-82c758a32405.jpg'},
      {src: 'https://news.ouc.edu.cn/_upload/article/images/3a/4d/73b22a9b404f93e907238f2a2325/55606b28-53b8-412f-9420-74c7a30657b6.jpg'},
      {src: 'https://news.ouc.edu.cn/_upload/article/images/94/9e/509119874e5287e8c56ef708865b/11604054-e936-468b-a50e-a4233e475a53.jpg'}
    ],
    newsList:[{
      id:'264698',
      title:'中国海大志愿者完成第五届跨国公司领导人青岛峰会志愿服务',
      poster:'http://news.ouc.edu.cn/_upload/article/images/dd/19/ede76a4a4ebdb1d3ab278a12fdd8/9bb154f8-e33b-421a-b453-82c758a32405.jpg',
      add_data:'2022-03-05'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list=common.getNewsList()
    this.setData({newsList:list})
  },
  
  goToDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../detail/detail?id=' + id
    })
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