// components/subscribe/cmp.js

import {SubscribeModel} from "../../models/subscribe"
const subscribeModel = new SubscribeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: 'common',
    myTagList: []
  },

  attached () {
    this._judgeTag()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {

      const mark = {
        type: this.data.tag,
        tagId: this.data.tagId
      }

      if(this.data.class === 'common') {
        const myTagList = this._getMyTagList()

        myTagList.push(mark)

        subscribeModel.setMyTagList( myTagList )
      }else {

        subscribeModel.removeMyTag( mark.tagId )
      }

      this._toggleClass()
      
    },

    _getMyTagList () {
      const myTagList = subscribeModel.getMyTagList();
      this.setData({
        myTagList
      })

      return myTagList
    },

    _judgeTag () {
      const myTagList = this._getMyTagList()

      myTagList.forEach( item => {
        if(item.tagId == this.data.tagId){
          this.setData({
            class: 'subscribe'
          })
        }
      })
    },

    _toggleClass () {
      let className = ''
      if(this.data.class === 'common') {
        className = 'subscribe'
      } else {
        className = 'common'
      }

      this.setData({
        class:className
      })

      this.triggerEvent('tap')
    }
  }
})
