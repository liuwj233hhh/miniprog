// miniprogram/pages/aboutme/aboutme.js

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    icon1: '../../image/favo.png',
    icon2: '../../image/baokao3.png',
    icon3: '../../image/setting.png',
    icon4: '../../image/contract.png',
    hasUserInfo: false
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (optisons) {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
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