const Service = require('egg').Service;

class IndexService extends Service {
  async findBannerlist() {
    const result = await this.app.mysql.select("bannerlist",{});
    return result;
  }

  async findHotList(currentPage) {
    const result = await this.app.mysql.select("productlist",{
      limit: parseInt( 10 ),
      offset:(currentPage - 1) * 10,
    });
    return result;
  }

  async insert(name) {
    await this.app.mysql.insert('cat', { id:null, name: 'zhangsan' });
    return {
      status:200,
      mag:'插入成功'
    };
  }

  async update(id) {
    await this.app.mysql.update('cat', { id:null, name: 'zhangsan' });
    return {
      status:200,
      mag:'更新成功'
    };
  }

  async delete(id) {
    await this.app.mysql.delete('cat', { id:id});
    return {
      status:200,
      mag:'删除成功'
    };
  }
}

module.exports = IndexService;