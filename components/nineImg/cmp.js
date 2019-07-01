// components/nineImg/cmp.js

import {myBeh} from "../behaviors/my-behavior";

Component({
  behaviors: [myBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: [
      "http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/01/53/a4538d4b712d11fb7890fd99416973dc.jpg",
      "http://old.bz55.com/uploads/allimg/140729/138-140H9155135.jpg",
      "http://img17.3lian.com/d/file/201701/23/d213de9838732feafca8c8526f4dcc9d.jpg",
      "http://pic1.win4000.com/wallpaper/d/57e33add2d595.jpg",
      "http://img3.3lian.com/2013/s3/51/d/61.jpg",
      "http://pic1.win4000.com/wallpaper/8/583f83394c3a3.jpg",
      "http://old.bz55.com/uploads/allimg/140927/1-14092G05K6.jpg",
      "http://img17.3lian.com/d/file/201703/07/051061fe91fc0a641a1f6d461deee445.jpg",
      "http://img.jianbihua.cc/d/file/20170810/8f7c1000dd83e16ebea6529fc3a67ee6.jpg",
      "http://pic1.win4000.com/wallpaper/7/57ea5168393da.jpg",
      "http://img17.3lian.com/201612/30/bbef848152cf434b3bdaa4ab6579bab3.jpg",
      "http://pic69.nipic.com/file/20150610/11179555_152955375000_2.jpg",
      "http://image.cnpp.cn/upload/images/20180515/11495244310_1200x800.jpg",
      "http://img.jianbihua.cc/d/file/20170810/c19cfe94efba2ffd0c91b8230fbcded7.jpeg",
      "http://www.5442.com/uploads/allimg/171019/1534004043-2.jpg"
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      // console.log(e);
      const index = e.currentTarget.dataset.index;
      // console.log( index )
      const array = this.data.imgArr;
      wx.previewImage({
        urls: array,
        current: array[index]
      })
    }
  }
})
