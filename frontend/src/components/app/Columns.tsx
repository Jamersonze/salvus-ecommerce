import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { deleteProduct } from "@/api/Api"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
    id: number;
    name: string;
    description: string | null;
    price: number | null;
    created_at: Date | null;
};

export const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
    },
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
        id: "actions",
        cell: ({ row }) => {
        const product = row.original
    
        return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="btn-danger">Apagar</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Essa ação não pode ser desfeita.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteProduct(product.id)}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )
        },
    }
]
