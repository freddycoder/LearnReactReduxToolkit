import { useAppDispatch } from "../../app/hooks"
import { InfoBulle } from "../../components/InfoBulle"
import { Product } from "../../models/Product"
import { ProductFormModel } from "../../models/ProductFormModel"
import { useDeleteProductMutation, useGetProductsQuery } from "../../services/produit/ProductsApi"
import { setEditProduct, setFormVisible } from "../../services/produit/ProductSlice"

export const ProduitsTable = () => {
    const { data } = useGetProductsQuery({})
    const [deleteProduct] = useDeleteProductMutation({})
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
                    <th><InfoBulle title="Le prix est en dollar canadien" placement="right">Prix</InfoBulle></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data?.map(product => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price} $</td>
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