import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"

import { deleteProduct } from "@/api/Api";

export type Product = {
    id: number;
    name: string;
    description: string | null;
    price: number | null;
    created_at: Date | null;
};

export type ProductOnForm = {
    name?: string;
    description?: string;
    price?: number;
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
            )
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nome
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "description",
        header: "Descrição",
        cell: ({ row }) => {
            return <div>{row.getValue("description")}</div>
        }
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(price)

            return <div className="text-right">{formatted}</div>
        }
    },
    {
        accessorKey: "created_at",
        header: "Data da criação",
        cell: ({ row }) => {

            const date = new Date(row.getValue("created_at"))

            return <div>{date.toLocaleDateString()}</div>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
        const product = row.original
    
        return (
            <Button
                variant="destructive"
                className=""
                onClick={() => confirm("Tem certeza que deseja apagar este registro?") && deleteProduct(product.id)}
            >
                Apagar
            </Button>
        )
        },
    }
]
