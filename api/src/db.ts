import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { NullNameCreateProductError, NullProductIdError, NullProductObjectError, ProductNotFoundError } from './errors';

const prisma = new PrismaClient();

export type Product = {
    id: number;
    name: string;
    description: string | null;
    price: number | null;
    created_at: Date | null;
};

export type updateProduct = {
    name: string | null;
    description: string | null;
    price: number | null;
};

// Example of creating a new record
export async function createProduct(productObj: Product) {
    try{
        const newProduct = await prisma.produto.create({
            data: productObj
        });
        console.log('Created Product:', newProduct);
    }catch (error) {
        if (error instanceof PrismaClientValidationError) {
            if (!productObj.name) {
                throw new NullNameCreateProductError();
            }
        }else{
            throw error;
        }
    }
}

// Example of reading Products
export async function readProducts(filterObj: any) {
    
    return await prisma.produto.findMany(filterObj);
}

// Example of updating a Product
export async function updateProduct(id: Product["id"], updateData: Product) {
    try {
        if (!Object.keys(updateData).length) {
            throw new NullProductObjectError();
        }
        const updatedProduct = await prisma.produto.update({
            where: { id },
            data: updateData
        });
        console.log('Updated Product:', updatedProduct);
    } catch (error) {
        if(error instanceof PrismaClientValidationError) {
            if (!id) {
                throw new NullProductIdError();
            }
        }else if (error instanceof NullProductObjectError){
            throw new NullProductObjectError();
        }else{
            throw error;
        }
    }
}

// Example of deleting a Product
export async function deleteProduct(id: Product["id"]) {
    try{
        const deletedProduct = await prisma.produto.delete({
            where: { id },
        });
        console.log('Deleted Product:', deletedProduct);
    }catch(error) {
        if(error instanceof PrismaClientValidationError) {
            if (!id) {
                throw new NullProductIdError();
            }
        }else if(error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                throw new ProductNotFoundError();
            }
        }else{
            throw error;
        }
    }
}