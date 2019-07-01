// pages/index/index.js
import {IndexModel} from "../../models/index"
import {random} from "../../utils/randomStr"
const indexModel = new IndexModel ()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    markList: [],
    recommend: {},

    getMore: '',
    magazineId: 0,
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // request.getData({url:'/getRecommendInfo/0'}).then( res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })

    // request.getData({
    //   url:'/getIndexArticleList/0/0'
    // }).then(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })

    // const articleList = indexModel.getArticleList()
    // const markList = indexModel.getMarkList()
    // const recommendInfo = indexModel.getRecommendInfo()

    // indexModel.getArticleList().then(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })

    // indexModel.getMarkList().then( res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })

    // indexModel.getRecommendInfo().then( res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })

    // Promise.all( [articleList, markList, recommendInfo] ).then( res => {
    //   console.log(res)
    // }, err => {

    // })

    this.getData();
    // wx.showLoading();

    // wx.showTabBarRedDot({
    //   index:1
    // })
  },

  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const recommendInfo = indexModel.getRecommendInfo(magazineId)

    Promise.all( [articleList, markList, recommendInfo] ).then( res => {
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommend: res[2]
      })

      // wx.hideLoading()
      this.hideLoading()
    }, err => {
      console.log(err)
    })
  },

  hideLoading () {
    this.setData({
      loading: false
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
    this.setData({
      getMore: random(20)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onCatalog() {
    // wx.navigateTo({
    wx.switchTab({
      url: "/pages/catalog/catalog"
    })
  },

  onNav (e) {
    const magazineId = e.detail.index

    this.resetData();

    this.scrollPageTop();

    this.setMagazineId(magazineId)

    this.getData(magazineId)
  },

  resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommend: {}
    })
  },

  scrollPageTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  }
})