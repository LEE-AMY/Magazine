// components/imgText/cmp.js
// 相同的属性名字
// const beh = require('../behaviors/my-behavior.js');
import {myBeh} from "../behaviors/my-behavior.js";

Component({
  behaviors: [myBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    // mainTitle: String,
    // subHead: String,
    // imgSrc: String
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
