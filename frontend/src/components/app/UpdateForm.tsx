import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Alert,
    AlertDescription, 
    AlertTitle 
} from "@/components/ui/alert"

import { updateProduct } from "@/api/Api"
import { useState } from "react"
import { AlertCircle } from "lucide-react"

const formSchema = z.object({
  id: z.coerce.number(),
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.coerce.number().optional(),
})

type UpdateFormProps = {
  onUpdate: () => void
}

export function UpdateForm({ onUpdate }: UpdateFormProps) {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    const { id, ...rest } = values
    updateProduct(id, rest).then((product) => {
        console.log(product)
        setSuccess(true)
        onUpdate()
        setTimeout(() => {
        setSuccess(false)
        }, 3000);
    }).catch((error) => {
        console.error(error)
        setError(true)
        setTimeout(() => {
        setError(false)
        }, 3000);
    })
    // ✅ This will be type-safe and validated.
  }

  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input 
                    placeholder="ID do produto" 
                    {...field} 
                    type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Descrição do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Preço em reais do produto" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default">Atualizar</Button>
        {success && 
            <Alert variant="default">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Sucesso</AlertTitle>
                <AlertDescription>
                    Produto atualizado com sucesso.
                </AlertDescription>
          </Alert>}
        {error && 
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Falha</AlertTitle>
                <AlertDescription>
                    Falha ao atualizar o produto.
                </AlertDescription>
            </Alert>}
      </form>
    </Form>
  )
}