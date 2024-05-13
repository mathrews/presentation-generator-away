// InputField.js
import React from 'react';

function InputField({ label, name, icon, value, onChange, small }) {
  return (
    <div className={`form-field${small ? ' small' : ''}`}>
      <label htmlFor={name}>
        {label}
      </label>
      <div className="input-container">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputField;
