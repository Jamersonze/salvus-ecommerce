import { Product, columns } from "@/components/app/Columns"
import { DataTable } from "@/components/app/DataTable"
import { getProducts } from "./api/Api"


function App() {
  const data = [] as Product[]
  getProducts().then((products) => {
    data.push(...products)
  })

  return (
    <section className='container mx-auto py-10'>
      <DataTable columns={columns} data={data}/>
    </section>
  )
}

export default App
