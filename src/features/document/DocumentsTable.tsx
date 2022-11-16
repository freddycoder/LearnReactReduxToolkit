import { useGetDocumentsQuery, useDeleteDocumentMutation } from "../../services/document/DocumentApi"


export const DocumentsTable = () => {
    const { data } = useGetDocumentsQuery({})
    const [deleteProduct] = useDeleteDocumentMutation({})

    return (
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
                            <button onClick={() => deleteProduct(document.id ? document.id.toString() : "")}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}