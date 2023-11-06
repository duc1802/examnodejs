const productModel = require('../models/product.model');

exports.getAddProductPage = (req, res) => {
    res.render('addproduct');
  };

exports.addProduct = async (req, res) => {
    const data = req.body;
    try {
      const u = new productModel(data);
      await u.save();
      res.send('Done');
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Error adding product' });
    }
};

exports.deleteProduct = (req, res) => {
    console.log(req.params.id);
    productModel.findByIdAndDelete(req.params.id)
        .then((product) => {
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.json({ message: 'Product deleted successfully' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error deleting product' });
        });
};


exports.getProductList = (req, res) => {
    productModel.find({})
      .then((products) => {
        res.render('products', { products });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error fetching products' });
      });
};
