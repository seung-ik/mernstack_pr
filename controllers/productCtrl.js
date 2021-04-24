const Products = require("../models/ProductModel");

const productCtrl = {
  getProducts: async (req, res) => {
    const products = await Products.find();
    res.json(products);
  },
  createProduct: async (req, res) => {
    const { product_id, title, images, description, content, colors, sizes, price } = req.body;

    const product = await Products.findOne({ product_id: product_id });
    if (product) {
      return res.status(400).json({ msg: "data already exists" });
    }

    const newProduct = new Products({
      product_id,
      title,
      content,
      description,
      colors,
      sizes,
      price,
      images,
    });

    await newProduct.save();

    res.json({ msg: "create in product" });
  },
  deleteProduct: async (req, res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.json({ msg: "delete in product" });
  },
  updateProduct: async (req, res) => {
    const { title, images, description, content, colors, sizes, price } = req.body;
    await Products.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        content,
        description,
        colors,
        sizes,
        price,
        images,
      }
    );

    res.json({ msg: "update in product" });
  },
  getProduct: async (req, res) => {
    const product = await Products.findById({ _id: req.params.id });
    res.json(product);
  },
};

module.exports = productCtrl;
