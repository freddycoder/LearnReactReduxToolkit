import { useDeleteProductMutation, useGetProductsQuery } from "../services/ProductsApi"
import { setEditProduct } from "../services/ProductSlice"

export const ProduitsTable = () => {
    const { data, error, isLoading } = useGetProductsQuery({})
    const [ deleteProduct, deleteResult ] = useDeleteProductMutation({})

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
                            <button onClick={() => setEditProduct(product)}>Modifier</button>
                            <button onClick={() => deleteProduct(product.id ? product.id.toString() : "")}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}