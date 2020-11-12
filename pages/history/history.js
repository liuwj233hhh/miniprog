// pages/page2/page2.js
const app = getApp();
wx. cloud. init()
const db = wx.cloud.database()

const _ = db.command;
var that = null;
var myItem = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
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
    wx.showNavigationBarLoading();
    that.init();
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

  },
  init(){
    //1. 从 forum 集合中查询所有文档 
    //2. 对查询的每一条文档，调用app.nowdate方法，对文档中的date字段进行转换，并setData更新  items字段
  db.collection('history').get()
  .then(result=>{
    console.log(result);
    let items = result.data.map(item=>{
      item["文章内容"] = item["文章内容"].substring(0,50)+"...";
      item.image1 = "cloud://zhang-0gv1nrm6234aa24a.7a68-zhang-0gv1nrm6234aa24a-1304009510/hisImgs/"+item["配图"]+".png";
      return item;
    })
    myItem = items
    that.setData({
      items:items
    })
    wx.hideLoading();
    wx.hideNavigationBarLoading()
  })
  },
  onClick:function(e){
    
    var content = e.currentTarget
    console.log(content.offsetTop)
    var a = content.offsetTop
    var index = Math.round((a)/432)
    console.log(index)
    app.globalData.page2Info = myItem[index]["景点名"]
    app.globalData.area = "chenggong"
    wx.setStorageSync('artNum', myItem[index]["文章编号"])
    wx.setStorageSync('area',"donglu" )
    console.log(app.globalData.page2Info),
    wx.navigateTo({
      url: '../hisDetail/hisDetail',
    })
  },
})