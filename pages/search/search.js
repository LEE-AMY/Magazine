// pages/search/search.js
import { SearchModel } from "../../models/search";
import {random} from "../../utils/randomStr"
const searchModel = new SearchModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord: '',
    tag: '',
    recommend: [],
    ArticleList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const searchWord = options.searchWord

    this.setData({
      searchWord
    })

    this._getData(searchWord)
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

  },

  _getData( word, start ) {
    const recommend = searchModel.getSearchRecommend(word)
    const ArticleList = searchModel.getSearchArticleList(word)

    Promise.all([recommend, ArticleList]).then( res => {
      // console.log(res[0])
      // console.log(res[1])

      this.setData({
        tag: res[0].tag,
        recommend: res[0].recommend,
        articleList: res[1]
      })
    }, err => {

    })
  }
})