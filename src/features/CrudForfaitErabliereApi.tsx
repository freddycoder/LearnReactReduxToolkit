import CreerProduit from './CreerProduit';
import { useDeleteProductMutation, useGetProductsQuery } from './ProductsApi';

const CrudForfaitErabliereApi = () => {
    const { data, error, isLoading } = useGetProductsQuery({})
    const [ deleteProduct, deleteResult ] = useDeleteProductMutation({})

    if (error) {
        console.log(error)
    }

    return (<div>
        {
            error ? (
                <div>Sorry... An error occure</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                <div>
                    <CreerProduit />
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
                            {data.map(product => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => deleteProduct(product.id ? product.id.toString() : "")}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : null
        }</div>
    )
}

export default CrudForfaitErabliereApi