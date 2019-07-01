// components/articleList/cmp.js

import {IndexModel} from "../../models/index"
const indexModel = new IndexModel ()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // articleList: Array
    articleList:{
      type: Array,
      value: [],
      observer (v1,v2,v3) {
        // console.log('observer',v1,v2,v3)
      }
    },
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },

    // magazineId: Number
    magazineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      if( this._isLock() || this.data.noMoreData) return;
      this._loadLock() 
      
      const magazineId = this.data.magazineId
      const start = this.data.articleList.length
      indexModel.getArticleList(magazineId, start).then( res => {

        this._setMoreData(res)
        this._unloadLock()

      }, err => {

        console.log( "articleList-err");
        this._unloadLock()

      })
    },

    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },

    _isLock () {
      return this.data.loading
    },

    _loadLock () {
      this.setData({
        loading: true
      })
    },

    _unloadLock () {
      this.setData({
        loading: false
      })
    },

    _setMoreData (list) {
      const combineList = this.data.articleList.concat(list)

      if( combineList.length === this.data.articleList.length ) {
        this.setData({
          noMoreData: true
        })
        console.log('end')
        return
      }

      this.setData({
        articleList: combineList,
      })
    }
  }
})
