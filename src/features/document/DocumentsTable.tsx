import { useState } from "react"
import { DeleteDialog } from "../../components/DeleteDialog"
import { useGetDocumentsQuery, useDeleteDocumentMutation } from "../../services/document/DocumentApi"
import { DocumentModel } from "../../models/DocumentModel"
import { Box, Button } from "@mui/material"
import { positions } from "@mui/system"


export const DocumentsTable = () => {
    const { data } = useGetDocumentsQuery({})

    const [deleteProduct] = useDeleteDocumentMutation({})
    const [openSingleDeleteDialog, setOpenSingleDeleteDialog] = useState(false);
    const [singleDeleteDocument, setSingleDeleteDocument] = useState<DocumentModel>()

    const [openDeleteAllDocumentsDialog, setOpenDeleteAllDocumentsDialog] = useState(false);

    return (
        <>
            <DeleteDialog
                open={openSingleDeleteDialog}
                onClose={() => setOpenSingleDeleteDialog(false)}
                title="Supprimer un document"
                content="Voulez-vous vraiment supprimer ce document ?"
                onConfirm={(document) => {
                    deleteProduct(document.id ? document.id.toString() : "")
                    setOpenSingleDeleteDialog(false)
                    setSingleDeleteDocument(undefined)
                }}
                element={singleDeleteDocument}
            />

            <DeleteDialog
                open={openDeleteAllDocumentsDialog}
                onClose={() => setOpenDeleteAllDocumentsDialog(false)}
                title="Supprimer tous les documents"
                content="Voulez-vous vraiment supprimer tous les documents ?"
                onConfirm={() => {
                    data?.forEach(document => {
                        deleteProduct(document.id ? document.id.toString() : "")
                    })
                    setOpenDeleteAllDocumentsDialog(false)
                }}
                element={undefined}
            />

            {
                data?.length !== 0 &&
                    <Button 
                        variant="contained"
                        color="error"
                        sx={{
                            
                        }}
                        onClick={() => setOpenDeleteAllDocumentsDialog(true)}>
                            Supprimer tous les documents
                    </Button>
            }
            

            <table className="App-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Size</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(document => (
                        <tr key={document.id}>
                            <td>{document.name}</td>
                            <td>{document.description}</td>
                            <td>{document.size}</td>
                            <td>
                                <button onClick={() => {
                                    setSingleDeleteDocument(document)
                                    setOpenSingleDeleteDialog(true)
                                }}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}