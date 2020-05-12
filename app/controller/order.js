'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async cartList() {
    const { ctx } = this;
    const cartList = await ctx.service.order.getCartList();
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: cartList
    };
  }

  async editCart() {
    const { ctx } = this;
    const cartList = await ctx.service.order.getEditCart(ctx.request.body);
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: cartList
    };
  }

  async addCart() {
    const { ctx } = this;
    const cartList = await ctx.service.order.getAddCart(ctx.request.body);
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: cartList
    };
  }
}

module.exports = OrderController;
