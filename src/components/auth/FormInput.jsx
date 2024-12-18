import React from 'react';

function FormInput({ label, type, id, placeholder, required, onChange }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
            />
        </div>
    );
}

export default FormInput;
