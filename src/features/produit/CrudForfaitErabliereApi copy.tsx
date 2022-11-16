import { ProduitForm } from './ProduitForm';
import { useGetProductsQuery } from '../../services/produit/ProductsApi';
import { ProduitsTable } from './ProduitsTable';

export const CrudForfaitErabliereApi = () => {
    const { data, error, isLoading } = useGetProductsQuery({})

    if (error) {
        console.log(error)
    }

    return (<div>
        {
            error ? (
                <div>Sorry... An error occure <a href="/">Retry</a></div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                <div>
                    <ProduitForm />
                    <ProduitsTable />
                </div>
            ) : null
        }</div>
    )
}
