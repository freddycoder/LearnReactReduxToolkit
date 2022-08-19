export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: any) => void;
}

export const InputField = ({label,value,onChange}: InputFieldProps) => {
    return (
        <>
            <div className="form-field-name">
                <span>{label}:</span>
            </div>
            <div className="form-field">
                <input type="text" value={value} onChange={onChange} />
            </div>
        </>
    )
}