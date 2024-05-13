import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from './Button';
import './Formulario.css';
import { FaGlobe, FaUsers, FaLanguage, FaPrayingHands, FaPeopleCarry, FaInfoCircle, FaCross, FaQuestionCircle, FaChurch, FaHandshake, FaMapMarkedAlt, FaMapPin, FaMapSigns, FaBible } from 'react-icons/fa';

function Formulario() {
  const [formData, setFormData] = useState({
    nomeDoPovo: '',
    pais: '',
    continente: '',
    ondeVivem: '',
    populacao: '',
    idiomaETraducao: '',
    religiao: '',
    relacaoComOCristianismo: '',
    cristaosNoBrasil: '',
    evangelicosNoBrasil: '',
    cristaosPeloMundo: '',
    evangelicosPeloMundo: '',
    introducao: '',
    comoVivem: '',
    emQueAcreditam: '',
    intercessao: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setMessage(''); // Limpa a mensagem
  };

  const handleClear = () => {
    console.log("Limpar clicado");
    setFormData({
      nomeDoPovo: '',
      pais: '',
      continente: '',
      ondeVivem: '',
      populacao: '',
      idiomaETraducao: '',
      religiao: '',
      relacaoComOCristianismo: '',
      cristaosNoBrasil: '',
      evangelicosNoBrasil: '',
      cristaosPeloMundo: '',
      evangelicosPeloMundo: '',
      introducao: '',
      comoVivem: '',
      emQueAcreditam: '',
      intercessao: ''
    });
    setMessage(''); // Limpa a mensagem
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
    setMessage(''); // Limpa a mensagem
  };

  return (
    <div className="form-container">
      <h2 className="form-title"><FaUsers className="form-icon" /> Formulário de Povo</h2>
      <form onSubmit={handleSubmit}>
        <InputField label={<><FaUsers className="form-icon" /> Nome do povo</>} name="nomeDoPovo" icon={<FaUsers />} value={formData.nomeDoPovo} onChange={handleChange} />
        <div className="input-row">
          <InputField label={<><FaMapMarkedAlt className="form-icon" /> País</>} name="pais" icon={<FaMapMarkedAlt />} value={formData.pais} onChange={handleChange} small />
          <InputField label={<><FaMapPin className="form-icon" /> Continente</>} name="continente" icon={<FaMapPin />} value={formData.continente} onChange={handleChange} small />
        </div>
        <InputField label={<><FaMapSigns className="form-icon" /> Onde vivem</>} name="ondeVivem" icon={<FaMapSigns />} value={formData.ondeVivem} onChange={handleChange} />
        <InputField label={<><FaLanguage className="form-icon" /> Idioma e tradução</>} name="idiomaETraducao" icon={<FaLanguage />} value={formData.idiomaETraducao} onChange={handleChange} />
        <InputField label={<><FaPrayingHands className="form-icon" /> Religião</>} name="religiao" icon={<FaPrayingHands />} value={formData.religiao} onChange={handleChange} />
        <InputField label={<><FaChurch className="form-icon" /> Relação com o cristianismo</>} name="relacaoComOCristianismo" icon={<FaChurch />} value={formData.relacaoComOCristianismo} onChange={handleChange} />
        <div className="input-row">
          <InputField label={<><FaBible className="form-icon" /> Cristãos no Brasil</>} name="cristaosNoBrasil" icon={<FaBible />} value={formData.cristaosNoBrasil} onChange={handleChange} />
          <InputField label={<><FaBible className="form-icon" /> Evangélicos no Brasil</>} name="evangelicosNoBrasil" icon={<FaBible />} value={formData.evangelicosNoBrasil} onChange={handleChange} />
        </div>
        <div className="input-row">
          <InputField label={<><FaBible className="form-icon" /> Cristãos pelo mundo</>} name="cristaosPeloMundo" icon={<FaBible />} value={formData.cristaosPeloMundo} onChange={handleChange} />
          <InputField label={<><FaBible className="form-icon" /> Evangélicos pelo mundo</>} name="evangelicosPeloMundo" icon={<FaBible />} value={formData.evangelicosPeloMundo} onChange={handleChange} />
        </div>
        <TextAreaField label={<><FaInfoCircle className="form-icon" /> Introdução</>} name="introducao" placeholder="Introdução..." value={formData.introducao} onChange={handleChange} />
        <TextAreaField label={<><FaQuestionCircle className="form-icon" /> Como vivem</>} name="comoVivem" placeholder="Como vivem..." value={formData.comoVivem} onChange={handleChange} />
        <TextAreaField label={<><FaCross className="form-icon" /> Em que acreditam</>} name="emQueAcreditam" placeholder="Em que acreditam..." value={formData.emQueAcreditam} onChange={handleChange} />
        <TextAreaField label={<><FaHandshake className="form-icon" /> Intercessão</>} name="intercessao" placeholder="Intercessão..." value={formData.intercessao} onChange={handleChange} />
        <div className="button-container">
          <Button type="button" className="clear-button" onClick={handleClear}>Limpar</Button>
          <Button type="submit" className="generate-button">Gerar</Button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Formulario;
