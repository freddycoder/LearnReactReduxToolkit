import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { InputField } from "../../components/InputField";
import { Product } from "../../models/Product";
import { useCreateProductMutation, useUpdateProductMutation } from "../../services/produit/ProductsApi";
import { selectProductSlice, setDescription, setEditProduct, setFormVisible, setPrice, setTitle } from "../../services/produit/ProductSlice";
import * as yup from 'yup'
import { useState } from "react";

export const ProduitForm = () => {
    const state = useAppSelector(selectProductSlice)
    const dispatch = useAppDispatch()
    const [postProduct] = useCreateProductMutation()
    const [updateProduct] = useUpdateProductMutation()
    const [errorMessage, setErrorMessage] = useState('')

    const validation = yup.object({
        title: yup.string().required().max(255),
        description: yup.string().required().max(2000),
        price: yup.number().required().min(0)
    })

    const cleanInfo = () => {
        setErrorMessage('')
        dispatch(setEditProduct({
            title: "",
            description: "",
            price: ""
        }))
    }

    const catchFunction = (error:any) => {
        setErrorMessage(error.message ?? 'An unexpected error has occurred. Please retry.')
        throw error
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const isValid = await validation.isValid(state.editProduct)
        if (isValid) {
            setErrorMessage('')
            let product: Product = {
                id: state.editProduct?.id,
                title: state.editProduct?.title,
                description: state.editProduct?.description,
                price: parseInt(state.editProduct?.price ?? "")
            }
            if (product.id == null) {
                await postProduct(product).unwrap()
                .catch(catchFunction)
                .then(payload => {
                    cleanInfo()
                    return payload
                })
            }
            else {
                await updateProduct(product).unwrap()
                .catch(catchFunction)
                .then(payload => {
                    cleanInfo()
                    dispatch(setFormVisible(false))
                    return payload
                })
            }
        }
        else {
            await validation.validate(state.editProduct).catch(err => {
                setErrorMessage(err.message)
            })
        }
    }

    const handleVisibilityClic = (e: any) => {
        const visible = !state.formVisible
        dispatch(setFormVisible(visible))
        if (!visible) {
            cleanInfo()
            setEditProduct(undefined)
        }
        else {
            dispatch(setEditProduct({
                title: "",
                description: "",
                price: ""
            }))
        }
    }

    return (
        <div>
            <h4 className="form-title" onClick={handleVisibilityClic}>{state.productFormTitle}</h4>
            {errorMessage ? <div className="form-error">
                <span>{errorMessage}</span>
            </div> : null}
            <form onSubmit={handleSubmit}>
                {state.formVisible ? (
                    <div className="form-field-container">
                        <InputField
                            label="Titre"
                            value={state.editProduct?.title ?? ""}
                            name="title"
                            onChange={(e) => dispatch(setTitle(e.target.value))} />
                        <InputField
                            label="Description"
                            value={state.editProduct?.description ?? ""}
                            name="description"
                            onChange={(e) => dispatch(setDescription(e.target.value))} />
                        <InputField
                            label="Prix"
                            value={state.editProduct?.price?.toString() ?? ""}
                            name="price"
                            onChange={(e) => dispatch(setPrice(e.target.value))} />
                        <div className="form-field">
                            <button type="submit">{state.productFormButtonText}</button>
                        </div>
                    </div>
                ) : null}
            </form>
        </div>
    )
}