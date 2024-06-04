import React from "react";
import "./TextAreaField.css";

function TextAreaField({
    label,
    name,
    value,
    onChange,
    placeholder,
    autoComplete,
}) {
    const handleKeyDown = (e) => {
        const { value } = e.target;
        const newValue = value + e.key;
        if (newValue.split("\n").length > 15) {
            e.preventDefault();
        }
    };

    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <div className="input-container">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    autoComplete={autoComplete || "off"}
                    className="form-textarea"
                />
            </div>
        </div>
    );
}

export default TextAreaField;
