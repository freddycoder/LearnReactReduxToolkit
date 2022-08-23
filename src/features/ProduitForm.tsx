import { useAppDispatch, useAppSelector } from "../app/hooks";
import { InputField } from "../components/InputField";
import { Product } from "../models/Product";
import { useCreateProductMutation, useUpdateProductMutation } from "../services/ProductsApi";
import { selectProductSlice, setDescription, setEditProduct, setFormVisible, setPrice, setTitle } from "../services/ProductSlice";

export const ProduitForm = () => {
    const state = useAppSelector(selectProductSlice)
    const dispatch = useAppDispatch()
    const [postProduct, postResult] = useCreateProductMutation()
    const [updateProduct, updateResult] = useUpdateProductMutation()

    const cleanInfo = () => {
        dispatch(setEditProduct({
            title: "",
            description: "",
            price: ""
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        let product: Product = {
            id: state.editProduct?.id,
            title: state.editProduct?.title,
            description: state.editProduct?.description,
            price: parseInt(state.editProduct?.price ?? "")
        }
        console.log(product)
        if (product.id == null) {
            await postProduct(product).unwrap()
            cleanInfo()
        } 
        else {
            await updateProduct(product).unwrap()
            cleanInfo()
            dispatch(setFormVisible(false))
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
            <form onSubmit={handleSubmit}>
                {state.formVisible ? (
                    <div className="form-field-container">
                        <InputField label="Titre"       value={state.editProduct?.title ?? ""}             onChange={(e) => dispatch(setTitle(e.target.value))} />
                        <InputField label="Description" value={state.editProduct?.description ?? ""}       onChange={(e) => dispatch(setDescription(e.target.value))} />
                        <InputField label="Prix"        value={state.editProduct?.price?.toString() ?? ""} onChange={(e) => dispatch(setPrice(e.target.value))} />
                        <div className="form-field">
                            <button type="submit">{state.productFormButtonText}</button>
                        </div>
                    </div>
                ) : null}
            </form>
        </div>
    )
}