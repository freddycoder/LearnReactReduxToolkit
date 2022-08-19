import CreerProduit from './CreerProduit';
import { useGetProductsQuery } from '../services/ProductsApi';
import { ProduitsTable } from './ProduitsTable';

const CrudForfaitErabliereApi = () => {
    const { data, error, isLoading } = useGetProductsQuery({})

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
                    <ProduitsTable />
                </div>
            ) : null
        }</div>
    )
}

export default CrudForfaitErabliereApi