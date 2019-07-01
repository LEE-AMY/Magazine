class SubscribeModel {
    
    setMyTagList (value) {
        // let markList
        wx.setStorageSync('markList', value)
    }

    getMyTagList () {
        return wx.getStorageSync('markList') || []
    }

    removeMyTag ( tagId) {
        let myTagList = this.getMyTagList()
        let myIndex = 0

        myTagList.forEach( (item, index) => {
            if(item.tagId == tagId) {
                myIndex = index
            }
        })

        myTagList.splice(myIndex, 1)

        this.setMyTagList( myTagList )
    }


}

export { SubscribeModel }