import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { InputField } from "../components/InputField";
import { Product } from "../models/Product";
import { useCreateProductMutation } from "../services/ProductsApi";
import { selectProductSlice } from "../services/ProductSlice";

export const ProduitForm = () => {
    const state = useAppSelector(selectProductSlice)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const [postProduct, result] = useCreateProductMutation()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        let product: Product = {
            title: title,
            description: description,
            price: parseInt(price)
        }
        await postProduct(product).unwrap()
        setTitle('')
        setDescription('')
        setPrice('')
    }

    const [isVisible, setIsVisible] = useState(false)

    const handleOnClick = (e: any) => {
        setIsVisible(preIsVisibleValue => !preIsVisibleValue)
    }

    return (
        <div>
            <h4 className="form-title" onClick={handleOnClick}>{state.productFormTitle}</h4>
            <form onSubmit={handleSubmit}>
                {isVisible ? (
                    <div className="form-field-container">
                        <InputField label="Titre"       value={title}       onChange={(e) => setTitle(e.target.value)} />
                        <InputField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <InputField label="Prix"        value={price}       onChange={(e) => setPrice(e.target.value)} />
                        <div className="form-field">
                            <button type="submit">{state.productFormButtonText}</button>
                        </div>
                    </div>
                ) : null}
            </form>
        </div>
    )
}