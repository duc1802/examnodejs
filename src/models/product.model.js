const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    //_id
    productCode: String,
    ProductName: String,
    ProductDate: Date,
    ProductOriginPrice: Number,
    Quantity: Number,
    ProductStoreCode: String,
});
module.exports = mongoose.model("product",product_schema); //products