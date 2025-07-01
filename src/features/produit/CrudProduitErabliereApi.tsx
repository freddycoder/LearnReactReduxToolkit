import { ProduitForm } from './ProduitForm';
import { useGetProductsQuery } from '../../services/produit/ProductsApi';
import { ProduitsTable } from './ProduitsTable';

export const CrudProduitErabliereApi = () => {
    const { data, error, isLoading } = useGetProductsQuery({})

    if (error) {
        console.log(error)
    }

    let content;
    if (error) {
        content = <div>Sorry... An error occure <a href="/">Retry</a></div>;
    } else if (isLoading) {
        content = <div>Loading...</div>;
    } else if (data) {
        content = (
            <div>
                <ProduitForm />
                <ProduitsTable />
            </div>
        );
    } else {
        content = null;
    }

    return (
        <div>
            {content}
        </div>
    );
}
