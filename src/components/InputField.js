// src/components/InputField.js

import React from 'react';
import { FaUser } from 'react-icons/fa';

function InputField({ label, name }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <div className="input-container">
        <input type="text" id={name} name={name} />
      </div>
    </div>
  );
}

export default InputField;
