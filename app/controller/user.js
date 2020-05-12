'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async cityList() {
    const { ctx } = this;
    const cityList = await ctx.service.user.getCityList();
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: cityList
    };
  }

  async addCity() {
    const { ctx } = this;
    await ctx.service.user.insertCity(ctx.request.body);
    ctx.body = {
      code: 200,
      message: 'return finished!'
    };
  }

  async editCity() {
    const { ctx } = this;
    const id = ctx.query.id;
    const cityDetail = await ctx.service.user.getCityDetail(id);
    ctx.body = {
      code: 200,
      message: 'return finished!',
      data: cityDetail
    };
  }

  async updateCity() {
    const { ctx } = this;
    await ctx.service.user.updateCityDetail(ctx.request.body);
    ctx.body = {
      code: 200,
      message: 'return finished!'
    };
  }

  async addDefaultCity() {
    const { ctx } = this;
    await ctx.service.user.addDefaultCity(ctx.request.body);
    ctx.body = {
      code: 200,
      message: 'return finished!'
    };
  }

  async getDefaultCity() {
    const { ctx } = this;
    const defaultCity = await ctx.service.user.getDefaultCity();
    ctx.body = {
      code: 200,
      message: 'return finished!',
      defaultCityId:defaultCity[0].defaultCityId
    };
  }

  async deleteUser() {
    const { ctx } = this;
    const userId = ctx.query.id;
    const userInfo = await ctx.service.user.delete(userId);
    ctx.body = userInfo;
  }
}

module.exports = UserController;
