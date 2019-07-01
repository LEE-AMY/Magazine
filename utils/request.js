
class Request {
    baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'

    getData( {url, method='GET', data={}} ) {
        return  new Promise( (resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                method: method,
                data: data,
                success: res => {
                    if(res.data.code == 0){
                        resolve(res.data.data)
                    }else{
                        this._showError('err-code:' + this.data.code)
                    }
                },
                fail: err=> {
                    this._showError('fail')
                    reject(err)
                }
            })
        })
    }

    _showError ( type ) {
        wx.showToast({
            title: "Request请求错误" + type,
            icon: "none"
        })
    }
}

export {Request}