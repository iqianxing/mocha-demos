var assert = require('chai').assert;

describe("订单审核",function(){
  var context ={}

  it("查询订单",function(){
    var order = {};
    // 查询订单
    // order =queryOrder(orderId);
    context.order = order;
  });

  it("更新订单审核状态",function(){
    context.order.isApproved =true;
    // 更新订单状态
    // db.updateOrder(context.order);
    return
  });
})

describe("订单付款",function(){
  var context ={}
  
  it("查询订单",function(){
    var order = {};
    // 查询订单
    // order =queryOrder(orderId);
    context.order = order;
  });

  it("订单付款",function(){
    // 更新订单状态
    // api.pay(context.order);
  });
})