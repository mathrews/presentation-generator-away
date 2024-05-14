import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Button from './Button';
import './Formulario.css';
import { FaUsers, FaMapMarkedAlt, FaMapPin, FaMapSigns, FaPeopleCarry, FaLanguage, FaPrayingHands, FaChurch, FaBible, FaInfoCircle, FaQuestionCircle, FaCross, FaHandshake } from 'react-icons/fa';
import gerarApresentacao from '../utils/gerarApresentacao';

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

  const [generatedFormData, setGeneratedFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClear = () => {
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
  };

  const handleGenerate = () => {
    setGeneratedFormData(formData);
    gerarApresentacao(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div className="form-container">
      <h2 className="form-title"><FaUsers className="form-icon" /> Formulário de Povo</h2>
      <form onSubmit={handleSubmit}>
        <InputField label={<><FaUsers className="form-icon" /> Nome do povo</>} name="nomeDoPovo" icon={<FaUsers />} value={formData.nomeDoPovo} onChange={handleChange} autoComplete={generatedFormData?.nomeDoPovo} />
        <div className="input-row">
          <InputField label={<><FaMapMarkedAlt className="form-icon" /> País</>} name="pais" icon={<FaMapMarkedAlt />} value={formData.pais} onChange={handleChange} autoComplete={generatedFormData?.pais} small />
          <InputField label={<><FaMapPin className="form-icon" /> Continente</>} name="continente" icon={<FaMapPin />} value={formData.continente} onChange={handleChange} autoComplete={generatedFormData?.continente} small />
        </div>
        <InputField label={<><FaMapSigns className="form-icon" /> Onde vivem</>} name="ondeVivem" icon={<FaMapSigns />} value={formData.ondeVivem} onChange={handleChange} autoComplete={generatedFormData?.ondeVivem} />
        <InputField label={<><FaPeopleCarry className="form-icon" /> População</>} name="populacao" icon={<FaPeopleCarry />} value={formData.populacao} onChange={handleChange} autoComplete={generatedFormData?.populacao} />
        <InputField label={<><FaLanguage className="form-icon" /> Idioma e tradução</>} name="idiomaETraducao" icon={<FaLanguage />} value={formData.idiomaETraducao} onChange={handleChange} autoComplete={generatedFormData?.idiomaETraducao} />
        <InputField label={<><FaPrayingHands className="form-icon" /> Religião</>} name="religiao" icon={<FaPrayingHands />} value={formData.religiao} onChange={handleChange} autoComplete={generatedFormData?.religiao} />
        <InputField label={<><FaChurch className="form-icon" /> Relação com o cristianismo</>} name="relacaoComOCristianismo" icon={<FaChurch />} value={formData.relacaoComOCristianismo} onChange={handleChange} autoComplete={generatedFormData?.relacaoComOCristianismo} />
        <div className="input-row">
          <InputField label={<><FaBible className="form-icon" /> Cristãos no Brasil</>} name="cristaosNoBrasil" icon={<FaBible />} value={formData.cristaosNoBrasil} onChange={handleChange} autoComplete={generatedFormData?.cristaosNoBrasil} />
          <InputField label={<><FaBible className="form-icon" /> Evangélicos no Brasil</>} name="evangelicosNoBrasil" icon={<FaBible />} value={formData.evangelicosNoBrasil} onChange={handleChange} autoComplete={generatedFormData?.evangelicosNoBrasil} />
        </div>
        <div className="input-row">
          <InputField label={<><FaBible className="form-icon" /> Cristãos pelo mundo</>} name="cristaosPeloMundo" icon={<FaBible />} value={formData.cristaosPeloMundo} onChange={handleChange} autoComplete={generatedFormData?.cristaosPeloMundo} />
          <InputField label={<><FaBible className="form-icon" /> Evangélicos pelo mundo</>} name="evangelicosPeloMundo" icon={<FaBible />} value={formData.evangelicosPeloMundo} onChange={handleChange} autoComplete={generatedFormData?.evangelicosPeloMundo} />
        </div>
        <TextAreaField label={<><FaInfoCircle className="form-icon" /> Introdução</>} name="introducao" placeholder="Introdução..." value={formData.introducao} onChange={handleChange} autoComplete={generatedFormData?.introducao} />
        <TextAreaField label={<><FaQuestionCircle className="form-icon" /> Como vivem</>} name="comoVivem" placeholder="Como vivem..." value={formData.comoVivem} onChange={handleChange} autoComplete={generatedFormData?.comoVivem} />
        <TextAreaField label={<><FaCross className="form-icon" /> Em que acreditam</>} name="emQueAcreditam" placeholder="Em que acreditam..." value={formData.emQueAcreditam} onChange={handleChange} autoComplete={generatedFormData?.emQueAcreditam} />
        <TextAreaField label={<><FaHandshake className="form-icon" /> Intercessão</>} name="intercessao" placeholder="Intercessão..." value={formData.intercessao} onChange={handleChange} autoComplete={generatedFormData?.intercessao} />
        <div className="button-container">
          <Button type="button" className="clear-button" onClick={handleClear}>Limpar</Button>
          <Button type="button" className="generate-button" onClick={handleGenerate}>Gerar</Button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
