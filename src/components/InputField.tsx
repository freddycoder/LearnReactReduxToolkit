export interface InputFieldProps {
    label: string
    value: string
    name: string
    onChange?: (e: any) => void
}

export const InputField = ({ label, value, name, onChange }: InputFieldProps) => {
    return (
        <>
            <div className="form-field-name">
                <span>{label}:</span>
            </div>
            <div className="form-field">
                <input type="text" name={name} value={value} onChange={onChange} />
            </div>
        </>
    )
}