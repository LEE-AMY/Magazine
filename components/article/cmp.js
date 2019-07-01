// components/article/cmp.js
// 文章组件
import {LikeModel} from "../../models/like"

const likeModel = new LikeModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: Number,
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },

  attached () {
    let likeStatus = false
    const articleDetail = this.data.articleDetail
    const artId = articleDetail.artId

    likeStatus = likeModel.getLikeStatus(artId)

    this.setData({
      likeStatus
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      const like = e.detail.like
      const articleDetail = this.data.articleDetail
      const artId = articleDetail.artId

      if(like) {
        // 缓存文章
        likeModel.addLikeList(articleDetail)
      }else{
        // 移出文章
        likeModel.removeLikeList(artId)
      }
    }
  }
})
