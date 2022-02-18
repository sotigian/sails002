


module.exports = {


  friendlyName: 'Customers controller',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let createdCustomer = await Customer.create({firstName: "G", lastName: "P", email: "g@p", tel: "210"} ).fetch();
    await Order.create( {totalPrice: 100, customer_id: createdCustomer.id});
    let customers = await Customer.find().populate('orders');
    // All done.
    return customers;

  }


};
