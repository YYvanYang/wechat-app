// pages/drawRect/drawRect.js

let { roundedRect1, roundedRect2 } = require('../../utils/canvasHelper.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.draw(1)
    this.draw(2)
  },

  // https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/clip.html
  draw(index) {
    const ctx = wx.createCanvasContext('myCanvas' + index)
    
    ctx.save()

    // 圆角矩形
    let x = 25, y = 25, width = 150, height = 150, radius = 5
    
    index === 1 ? roundedRect1(ctx, x, y, width, height, radius) : roundedRect2(ctx, x, y, width, height, radius)
    
    ctx.clip()

    // 在圆角矩形中画图
    ctx.drawImage("../../img/taylor-swift.jpg", x, y, width, height)

    ctx.restore()

    ctx.draw()


  },

  
})