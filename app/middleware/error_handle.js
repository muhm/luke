/*
 * @Author: MUHM
 * @Date: 2017-10-12 17:03:53
 * @Last Modified by: MUHM
 * @Last Modified time: 2018-03-20 16:07:27
 */
'use strict';

module.exports = () => {
  return async (ctx, next) => {
    try {
      ctx.logger.info('body: %j', ctx.request.body);
      await next();
    } catch (e) {
      ctx.logger.error(e);
      ctx.body = { code: 400, message: e.message };
    }
  };
};