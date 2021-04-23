const productCtrl = {
  getProducts: (req, res) => {
    res.json({ msg: "get all products" });
  },
  createProduct: (req, res) => {
    res.json({ msg: "create in product" });
  },
  deleteProduct: (req, res) => {
    res.json({ msg: "delete in product" });
  },
  updateProduct: (req, res) => {
    res.json({ msg: "update in product" });
  },
  getProduct: (req, res) => {
    res.json({ msg: "get a product" });
  },
};

module.exports = productCtrl;
