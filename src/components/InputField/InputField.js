import React from "react";

function InputField({
    label,
    name,
    icon,
    value,
    onChange,
    autoComplete,
    small,
    placeholder,
}) {
    const handleType = () => {
        if (
            name === "cristaosNoBrasil" ||
            name === "evangelicosNoBrasil" ||
            name === "cristaosPeloMundo" ||
            name === "evangelicosPeloMundo"
        ) {
            return (
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete ? "on" : "off"}
                    maxLength={13}
                />
            );
        } else {
            return (
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete ? "on" : "off"}
                    placeholder={placeholder}
                />
            );
        }
    };

    return (
        <div className={`form-field${small ? " small" : ""}`}>
            <label htmlFor={name}>{label}</label>
            <div className="input-container">
                {handleType()}
            </div>
        </div>
    );
}

export default InputField;
