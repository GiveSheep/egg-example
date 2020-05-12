'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/v1/user/cityList', controller.user.cityList);
  router.post('/v1/user/addCity', controller.user.addCity);
  router.get('/v1/user/editCity', controller.user.editCity);
  router.put('/v1/user/updateCity', controller.user.updateCity);
  router.post('/v1/user/addDefaultCity', controller.user.addDefaultCity);
  router.get('/v1/user/getDefaultCity', controller.user.getDefaultCity);
  router.get('/deleteUser', controller.user.deleteUser);
  router.get('/v1/home/bannerList', controller.index.getBannerlist);
  router.get('/v1/home/hotList', controller.index.getHotList);
  router.get('/v1/order/cartList', controller.order.cartList);
  router.post('/v1/order/editCart', controller.order.editCart);
  router.post('/v1/order/addCart', controller.order.addCart);
};
