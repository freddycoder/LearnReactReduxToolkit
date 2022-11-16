import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { usePutDocumentMutation } from "../../services/document/DocumentApi";
import { selectDocumentSlice } from "../../services/document/DocumentSlice";
import * as yup from 'yup'
import { useState } from "react";
import { DocumentModel } from "../../models/DocumentModel";
import { InputFile } from "../../components/InputFile";
import { blobToBase64 } from "../../util/base64util";

export const DocumentForm = () => {
    const state = useAppSelector(selectDocumentSlice)
    const [putDocument] = usePutDocumentMutation()
    const [errorMessage, setErrorMessage] = useState('')

    const validation = yup.object({
        
    })

    const catchFunction = (error: any) => {
        setErrorMessage(error.message ?? 'An unexpected error has occurred. Please retry.')
        throw error
    }

    const handleSubmit = async (e: any) => {
        const isValid = await validation.isValid(state.editDocument)
        console.log(e)
        console.log(e.target?.files)
        console.log("Envoie du document")
        for (const file of e.target?.files) {
            if (isValid && file != null) {
                setErrorMessage('')
                let document: DocumentModel = {
                    id: state.editDocument?.id,
                    name: file.name,
                    content: await blobToBase64(file),
                }
                await putDocument(document)
                    .unwrap()
                    .then(() => { e.target.value = null })
                    .catch(catchFunction)
            }
            else if (file == null) {
                setErrorMessage('An error occure : No file selected')
            }
            else {
                await validation.validate(state.editDocument).catch(err => {
                    setErrorMessage(err.message)
                })
            }
        }
    }

    return (
        <div>
            {errorMessage ? <div className="form-error">
                <span>{errorMessage}</span>
            </div> : null}
            <form>
                <div className="form-field-container">
                    <InputFile
                        label="File"
                        name="file"
                        onChange={(e) => handleSubmit(e)} />
                </div>
            </form>
        </div>
    )
}