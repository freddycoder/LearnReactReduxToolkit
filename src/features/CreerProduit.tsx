import { useState } from "react";
import { Product } from "./Product";
import { useCreateProductMutation } from "./ProductsApi";

const CreerProduit = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [postProduct, result] = useCreateProductMutation();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        var product = new Product();
        product.title = title;
        product.description = description;
        product.price = parseInt(price);
        postProduct(product);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreerProduit;