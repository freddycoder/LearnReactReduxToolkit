import { useGetDocumentsQuery } from '../../services/document/DocumentApi';
import { DocumentForm } from './DocumentForm';
import { DocumentsTable } from './DocumentsTable';

export const CrudDocument = () => {
    const { data, error, isLoading } = useGetDocumentsQuery({})

    if (error) {
        console.log(error)
    }

    return (<div>
        {
            error ? (
                <div>Sorry... An error occure <a href="/">Retry</a></div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                <div>
                    <DocumentForm />
                    <DocumentsTable />
                </div>
            ) : null
        }</div>
    )
}
