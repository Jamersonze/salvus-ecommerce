import { Product, columns } from "@/components/app/Columns"
import { DataTable } from "@/components/app/DataTable"
import { getProducts } from "./api/Api"
import { useEffect, useState } from "react"
import { ProductForm } from "./components/app/ProductForm";
import { UpdateForm } from "./components/app/UpdateForm";


function App() {
  const [data, setData] = useState<Product[]>([]);

  function handleGetProducts() {
    getProducts().then((products: Product[]) => {
      if (products) {
        setData(products);
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(handleGetProducts, []);

  return (
    <section className='container mx-auto py-10'>
      <ProductForm onCreate={handleGetProducts} />
      <DataTable columns={columns} data={data} />
      <UpdateForm onUpdate={handleGetProducts} />
    </section>
  );
}

export default App
