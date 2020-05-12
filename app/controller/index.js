'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async getBannerlist() {
    const { ctx } = this;
    const bannerlist = await ctx.service.index.findBannerlist();
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: bannerlist
    }
  }

  async getHotList() {
    const { ctx } = this;
    const page = ctx.query.page;
    const hotList = await ctx.service.index.findHotList(page);
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: hotList
    }
  }

  async insertUser() {
    const { ctx } = this;
    const userName = ctx.query.name;
    const userInfo = await ctx.service.user.insert(userName);
    ctx.body = userInfo;
  }

  async updateUser() {
    const { ctx } = this;
    const userId = ctx.query.id;
    const userInfo = await ctx.service.user.update(userId);
    ctx.body = userInfo;
  }

  async deleteUser() {
    const { ctx } = this;
    const userId = ctx.query.id;
    const userInfo = await ctx.service.user.delete(userId);
    ctx.body = userInfo;
  }
}

module.exports = IndexController;
