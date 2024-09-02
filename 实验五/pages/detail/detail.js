// pages/detail/detail.js
var common=require('../../utils/common.js')
Page({
  addFavorites:function(options){
    let article=this.data.article
    wx.setStorageSync(article.id, article)
    this.setData({isAdd:true}) 
  },
  cancalFavorites:function(){
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({isAdd:false})
  },
  data: {
    article:{
      id:'264698',
      title:'测试标题',
      poster:'https://news.ouc.edu.cn/_upload/article/images/dd/19/ede76a4a4ebdb1d3ab278a12fdd8/9bb154f8-e33b-421a-b453-82c758a32405.jpg',
      content:'测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
      add_date:'2024-09-02',
      num:0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id=options.id
    var article=wx.getStorageSync(id)
    if(article!=''){
      this.setData({
        article:article,
        isAdd:true
      })
    }
    else{
      let result =common.getNewsDetail(id)
      if(result.code=='200'){
        this.setData({
          article:result.news,
          isAdd:false
        })
      }
    }
  },
  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})