import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, Product, readProducts, updateProduct } from "./db";
import { NullNameCreateProductError, NullProductIdError, ProductNotFoundError } from "./errors";

const router = Router();

// Example of reading Products
router.get('/products', (req: Request, res: Response) => {
  const filterObj = req.body

  readProducts(filterObj).then((products: Product[]) => {
    res.status(200).send(products);
  }).catch((error : ProductNotFoundError) => {
    res.status(404).send(JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.log(error);
  });
});

router.post('/products', (req: Request, res: Response) => {

  const productObj: Product = req.body;

  createProduct(productObj).then(() => {
    res.status(201).send({ success: 'Product created successfully' });
  }).catch((error : NullNameCreateProductError) => {
    res.status(400).send(JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.log(error);
  });
})

// Example of updating a Product
router.put('/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updateData = req.body;
  updateProduct(id, updateData).then(() => {
    res.status(200).send({ success: 'Product updated successfully' });
  }).catch((error) => {
    res.status(400).send(JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.log(error);
  });
})

router.delete('/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  deleteProduct(id).then(() => {
    res.status(200).send({ success: 'Product deleted successfully' });
  }).catch((error) => {
    res.status(400).send(JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.log(error);
  })
})

export default router;