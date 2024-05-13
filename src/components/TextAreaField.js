// TextAreaField.js
import React from 'react';

function TextAreaField({ label, name, icon, value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
      </label>
      <div className="input-container">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TextAreaField;
