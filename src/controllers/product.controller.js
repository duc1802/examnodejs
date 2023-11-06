const Product = require('../models/product.model');

exports.getAddProductPage = (req, res) => {
    res.render('addproduct');
  };

  exports.addProduct = async (req, res) => {
    try {
      const newProduct = new Product({
        ProductCode: req.body.ProductCode,
        ProductName: req.body.ProductName,
        ProductDate: new Date(req.body.ProductDate),
        ProductOriginPrice: parseFloat(req.body.ProductOriginPrice),
        Quantity: parseInt(req.body.Quantity),
        ProductStoreCode: req.body.ProductStoreCode,
      });
  
      await newProduct.save();
  
      res.json({ message: 'Product added successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Error adding product' });
    }  
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      ProductCode: req.body.ProductCode,
      ProductName: req.body.ProductName,
      ProductDate: new Date(req.body.ProductDate),
      ProductOriginPrice: parseFloat(req.body.ProductOriginPrice),
      Quantity: parseInt(req.body.Quantity),
      ProductStoreCode: req.body.ProductStoreCode,
    });

    await newProduct.save();

    res.json({ message: 'Product added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding product' });
  }
};

exports.deleteProduct = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, product) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting product' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  });
};

exports.getProductList = (req, res) => {
    Product.find({})
      .then((products) => {
        res.render('products', { products });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error fetching products' });
      });
};
