// import { createProduct } from './db'; // Import the function to test
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient(); // Initialize PrismaClient for testing

// describe('createProduct', () => {
//     it('should create a product successfully', async () => {
//         const productObj = {
//             id: 1,
//             name: 'Test Product',
//             description: 'Test Description',
//             price: 10.99,
//             created_at: new Date(),
//         };
        
//         const newProduct = await createProduct(productObj);
        
//         expect(newProduct).toHaveProperty('id');
//         expect(newProduct.name).toBe(productObj.name);
//         expect(newProduct.description).toBe(productObj.description);
//         expect(newProduct.price).toBe(productObj.price);
//         expect(newProduct.created_at).toEqual(productObj.created_at);
//     });

//     it('should handle creating a product with missing fields', async () => {
//         const productObj = {
//             name: 'Test Product',
//             price: 10.99,
//         };

//         await expect(createProduct(productObj)).rejects.toThrow();
//     });

//     it('should handle creating a product with invalid data types', async () => {
//         const productObj = {
//             id: 'invalid',
//             name: 'Test Product',
//             description: 'Test Description',
//             price: 'invalid',
//             created_at: 'invalid',
//         };

//         await expect(createProduct(productObj)).rejects.toThrow();
//     });
// });