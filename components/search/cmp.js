// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String
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
    onSearch (e) {
      // console.log(this.data.value)
      // const value = this.data.value 
      const value = e.detail.value || this.data.value
      if( value !== '读书') {
        wx.showToast({
          title: "只能搜索读书哟",
          icon: "none"
        })
        return 
      }
      wx.navigateTo({
        url:`/pages/search/search?searchWord=${value}`
      })
    },

    onBlur (e) {
      
      const value = e.detail.value
      // console.log(value)
      // value = value.trim()
      this.setData({
        value
      })
    }
  }
})
