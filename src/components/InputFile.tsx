export interface InputFileProps {
    label: string
    name: string
    onChange?: (e: any) => void
}

export const InputFile = ({ label, name, onChange }: InputFileProps) => {
    return (
        <>
            <div className="form-field-name">
                <span>{label}:</span>
            </div>
            <div className="form-field">
                <input type="file" multiple={true} name={name} onChange={onChange} />
            </div>
        </>
    )
}