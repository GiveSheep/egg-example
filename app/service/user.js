const Service = require('egg').Service;

class UserService extends Service {
  async getCityList() {
    const result = await this.app.mysql.select("addressList",{});
    return result;
  }

  async insertCity(body) {
    await this.app.mysql.insert('addressList', { 
      id:null, 
      name: body.name,
      mobile: body.mobile,
      detailed: body.detailed,
      city: body.city
    });
    return {
      status:200,
      mag:'插入成功'
    };
  }

  async getCityDetail(id) {
    const result = await this.app.mysql.select("addressList",{
      where: {
        id: id
      }
    });
    return result;
  }

  async updateCityDetail(body) {
    const result = await this.app.mysql.update("addressList",body);
    return result;
  }

  async addDefaultCity(body) {
    let defaultCity = await this.app.mysql.select("defaultCity");
    if(defaultCity.length){
      await this.app.mysql.update('defaultCity', { id:defaultCity[0].id,defaultCityId:body.id});
    }else{
      await this.app.mysql.insert('defaultCity', { id:null,defaultCityId:body.id});
    }
    return {
      status:200,
      mag:'成功'
    };
  }

  async getDefaultCity() {
    const result = await this.app.mysql.select("defaultCity");
    return result;
  }

  async delete(id) {
    await this.app.mysql.delete('cat', { id:id});
    return {
      status:200,
      mag:'删除成功'
    };
  }
}

module.exports = UserService;