import { Router } from "express";
import {
  allProducts,
  createProduct,
  deleteProduct,
  deleteAllProducts,
} from "../services/shopping.service.js";

const router = Router();
const products = [];

router.get("/products", (req, res) => {
  allProducts((product) => {
    res.render("shopping", { product });
  });
});

router.get("/products", (req, res) => {
  res.render("shopping");
});

router.post("/products/add", (req, res) => {
  const { productName, productPrice } = req.body;
  createProduct(productName, productPrice)
  res.redirect("/products")
});

router.get("/products/delete/:id", (req, res) => {
    deleteProduct(req.params.id)
    res.redirect("/products")
})

router.get("/products/deleteAll", (req, res) => {
    deleteAllProducts()
    res.redirect("/products")
})

export default router;