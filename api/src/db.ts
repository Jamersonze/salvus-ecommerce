import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

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
                error.message = 'Argument \'name\' is required';
                throw error;
            }
        }
    }
}

// Example of reading Products
export function readProducts(filterObj: any) {
    return prisma.produto.findMany(
        filterObj
    );
}

// Example of updating a Product
export async function updateProduct(id: Product["id"], updateData: Product) {
    const updatedProduct = await prisma.produto.update({
        where: { id },
        data: updateData,
    });
    console.log('Updated Product:', updatedProduct);
}

// Example of deleting a Product
export async function deleteProduct(id: Product["id"]) {
    const deletedProduct = await prisma.produto.delete({
        where: { id },
    });
    console.log('Deleted Product:', deletedProduct);
}