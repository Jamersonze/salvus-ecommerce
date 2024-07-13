import { Router, Request, Response } from "express";
import { createProduct, Product, readProducts } from "./db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

const router = Router();

// Example of reading Products
router.get('/products', (req: Request, res: Response) => {
  const filterObj = req.body

  readProducts(filterObj).then((products: Product[]) => {
    res.status(200).send(products);
  }).catch((error : Error) => {
    res.status(500).send('Internal Server Error');
    console.log(error);
  });
});

router.post('/products', (req: Request, res: Response) => {

  const { name, description, price } = req.body;
  const productObj = {
    name,
    description,
    price
  } as Product;

  createProduct(productObj).then(() => {
    res.status(201).send('Product created successfully');
  }).catch((error : PrismaClientValidationError) => {
    res.status(400).send(JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.log(error);
  });
})

export default router;