import { Product } from "@/components/app/Columns"

const API_URL = import.meta.env.API_HOST || "http://localhost:3000"

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`, {
        method: "GET",
    })
    const data = await response.json()
    return data
}

export const deleteProduct = async (id: number) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
    })
    const data = await response.json()
    return data
}

export const createProduct = async (product: Product) => {
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
    const data = await response.json()
    return data
}

export const updateProduct = async (id: number, product: Product) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
    const data = await response.json()
    return data
}