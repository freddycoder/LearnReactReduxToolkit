import { pointer } from "@testing-library/user-event/dist/types/pointer";
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

    const [isVisible, setIsVisible] = useState(false);

    const handleOnClick = (e: any) => {
        setIsVisible(preIsVisibleValue => !preIsVisibleValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4 className="form-title" onClick={handleOnClick}>Ajouter un produit</h4>
                {isVisible ? (
                    <div className="form-field-container">
                        <div className="form-field-name">
                            <span>Titre:</span>
                        </div>
                        <div className="form-field">
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-field-name">
                            <span>Description:</span>
                        </div>
                        <div className="form-field">    
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="form-field-name">
                            <span>Prix:</span>
                        </div>
                        <div className="form-field">
                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="form-field">
                            <button type="submit">Ajouter</button>
                        </div>
                    </div>
                ) : null}
            </form>
        </div>
    )
}

export default CreerProduit;