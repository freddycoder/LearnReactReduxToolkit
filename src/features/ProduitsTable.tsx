import { useAppDispatch } from "../app/hooks"
import { Product } from "../models/Product"
import { ProductFormModel } from "../models/ProductFormModel"
import { useDeleteProductMutation, useGetProductsQuery } from "../services/ProductsApi"
import { setEditProduct, setFormVisible } from "../services/ProductSlice"

export const ProduitsTable = () => {
    const { data, error, isLoading } = useGetProductsQuery({})
    const [ deleteProduct, deleteResult ] = useDeleteProductMutation({})
    const dispatch = useAppDispatch()

    const onEditClic = (product: Product) => {
        const produitFormData: ProductFormModel = {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price?.toString()
        }

        dispatch(setEditProduct(produitFormData))
        dispatch(setFormVisible(true))
    }

    return (
        <table className="App-table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data?.map(product => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={() => onEditClic(product)}>Modifier</button>
                            <button onClick={() => deleteProduct(product.id ? product.id.toString() : "")}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}