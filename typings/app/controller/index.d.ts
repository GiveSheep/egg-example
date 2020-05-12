// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex = require('../../../app/controller/index');
import ExportOrder = require('../../../app/controller/order');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    index: ExportIndex;
    order: ExportOrder;
    user: ExportUser;
  }
}
