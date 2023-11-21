import Datastore from "nedb";

const products = new Datastore({ filename: "./data/shopping.json" });
products.loadDatabase((err) => console.log(err));

export function allProducts(callback) {
  products.find({}, (err, productName, productPrice) => {
    callback(productName, productPrice);
  });
}

export function createProduct(productName, productPrice) {
  const doc = {
    productName,
    productPrice,
  };
  if (!productName.trim() && !productPrice.trim()) {
    return;
  }else{
    products.insert(doc, (err, newDoc) => {
        console.log(err);
    })
  }
}

export function deleteProduct(id) {
    products.remove({ _id: id })
}

export function deleteAllProducts(){
    products.removeFromIndexes()
}