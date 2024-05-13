// src/components/TextAreaField.js

import React from 'react';
import PropTypes from 'prop-types';
import './TextAreaField.css'; // Importar estilos

function TextAreaField({ label, name, placeholder, icon }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <textarea className="form-textarea" name={name} placeholder={placeholder} />
    </div>
  );
}

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};

export default TextAreaField;
