const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lunboList:[],
        caipuList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.stopPullDownRefresh()
        let that = this
        db.collection('lunbo').get({
            success: function(res) {
              that.setData({lunboList:res.data[0].img})
            }
        })
        db.collection('caipu').get({
            success: function(res) {
                console.log(res.data);
                that.setData({caipuList:res.data})
            }
        })
    },
    getFoodInfo(e){
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
          url: '/pages/foodInfo/foodInfo?id=' + id
        })
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
        this.onLoad();
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

    }
})