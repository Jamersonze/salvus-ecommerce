import { createProduct, deleteProduct, Product, readProducts, updateProduct, updateProductObj } from './db'; // Import the function to test

describe('createProduct', () => {
    it('should create a product with the provided name, description, and price successfully', async () => {
        const productObj = {
            id: 1,
            name: 'Test Product',
            description: 'Test Description',
            price: 10.99
        } as Product;
        
        await expect(createProduct(productObj)).resolves.not.toThrow();
    });

    it('should not create a product without a name field', async () => {
        const productObj = {
            description: 'Test Product',
            price: 10.99,
        } as Product;

        await expect(createProduct(productObj)).rejects.toThrow();
    });

    
});

describe('readProducts', () => {

    it('should return an empty array unknown filter value is provided', async () => {
        const products = await readProducts({ id: 0 });
        expect(products.length).toBe(0);
    });

    it('should return an array when no filter object is provided', async () => {
        const products = await readProducts();
        expect(Array.isArray(products)).toBe(true);
    });

    it('should return an array when valid filter object is provided', async () => {
        const filterObj = { id: 1 };
        const products = await readProducts(filterObj);
        expect(Array.isArray(products)).toBe(true);
    });

    it('should throw an error when a valid field with invalid value is provided', async () => {
        const invalidFilterObj = { id: '1' };
        await expect(readProducts(invalidFilterObj)).rejects.toThrow();
    });

    it('should throw an error when an invalid filter object is provided', async () => {
        const invalidFilterObj = { invalidFilter: 'invalidValue' };
        await expect(readProducts(invalidFilterObj)).rejects.toThrow();
    });
});

describe('updateProduct', () => {

    it('should update a product with the provided name, description, and price successfully', async () => {
        const updateProductObjMock = {
            name: 'Test Product',
            description: 'Test Description',
            price: 10.99
        } as updateProductObj
        await expect(updateProduct(1, updateProductObjMock)).resolves.not.toThrow();
    });

    it('should update a product with the provided name successfully', async () => {
        const updateProductObjMock = {
            name: 'Test Product'
        } as updateProductObj
        await expect(updateProduct(1, updateProductObjMock)).resolves.not.toThrow();
    });

    it('should update a product with the provided description successfully', async () => {
        const updateProductObjMock = {
            description: 'Test Product'
        } as updateProductObj
        await expect(updateProduct(1, updateProductObjMock)).resolves.not.toThrow();
    });

    it('should update a product with the provided price successfully', async () => {
        const updateProductObjMock = {
            price: 3.99
        } as updateProductObj
        await expect(updateProduct(1, updateProductObjMock)).resolves.not.toThrow();
    });

    it('should throw an error if no id is provided', async () => {
        const updateProductObjMock = {
            name: 'Test Product'
        } as updateProductObj

        await expect(updateProduct(0, updateProductObjMock)).rejects.toThrow();
    });

    it('should throw an error if an empty data is provided', async () => {
        const updateProductObjMock = {} as updateProductObj

        await expect(updateProduct(0, updateProductObjMock)).rejects.toThrow();
    });
});

describe('deleteProduct', () => {

    it('should delete a product successfully', async () => {
        await expect(deleteProduct(1)).resolves.not.toThrow();
    });

    it('should throw an error if invalid id is provided', async () => {
        await expect(deleteProduct(0)).rejects.toThrow();
    });

})