// components/bigImg/cmp.js

import {myBeh} from "../behaviors/my-behavior.js";

Component({
  behaviors: [myBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    // imgSrc: {
    //   type: String,
    //   value: "http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/01/53/a4538d4b712d11fb7890fd99416973dc.jpg",
    //   observer: function (newValue, oldValue, changePath) {
    //     // console.log(newValue)
    //     // console.log(oldValue)
    //     // console.log(changePath)
    //   }
    // },
    // mainTitle: {
    //   type: String,
    //   value: "哈吉开发哈斯夺冠介绍的客户公开时间大概看",
    //   observer: function () {

    //   }
    // }

    // 简写

    // imgSrc: String,
    // mainTitle: String

    // 使用behaviors 提取相同名字，减少代码冗余量
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
