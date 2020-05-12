const Service = require('egg').Service;

class OrderService extends Service {
  async getCartList() {
    const result = await this.app.mysql.select("cartList",{});
    return result;
  }

  async getEditCart(body) {
    await this.app.mysql.query('truncate table cartList');
    if(body.list.length>0){   
      var result = await this.app.mysql.insert("cartList",body.list);
    }
    return result;
  }

  async getAddCart(body) {
    var cartList = await this.app.mysql.select("cartList");
    var state = false;
    var index = null;
    for(let i=0; i<cartList.length; i++){
      if(cartList[i].id == body.id){
        index = i;
        state = true;
      }
    }
    if(state){
      var result = await this.app.mysql.update("cartList",{ 
        id:body.id,
        img_url: body.img_url,
        num: cartList[index].num+1,
        price: body.price,
        spec: body.spec,
        title: body.title
      });
    }else{
      var result = await this.app.mysql.insert("cartList",{ 
        id:body.id,
        img_url: body.img_url,
        num: 1,
        price: body.price,
        spec: body.spec,
        title: body.title
      });
    }
    return result;
  }
}

module.exports = OrderService;