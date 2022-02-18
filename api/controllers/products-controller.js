module.exports = {


  friendlyName: 'Products controller',


  description: '',


  inputs: {
    name: { type: 'string', required: true },
    price: {type: 'number', required: true},
    description: { type: 'string'}
  },


  exits: {

  },


  fn: async function (req, res, inputs) {
    console.log(inputs, req, res);
    let myProduct = await Product.create(
      {
        name: req.name,
        price: req.price,
        description: req.description
       }).fetch();
    // All done.
    return myProduct;

  }


};
