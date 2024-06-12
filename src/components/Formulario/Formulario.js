import React, { useState } from "react";
import InputField from "../InputField/InputField.js";
import TextAreaField from "../TextAreaField/TextAreaField.js";
import Button from "../Button/Button.js";
import "./Formulario.css";
import {
    FaUsers,
    FaMapMarkedAlt,
    FaMapPin,
    FaMapSigns,
    FaPeopleCarry,
    FaLanguage,
    FaPrayingHands,
    FaBible,
    FaInfoCircle,
    FaQuestionCircle,
    FaCross,
    FaHandshake,
    FaExclamationCircle,
} from "react-icons/fa";
import gerarApresentacao from "../../utils/gerarApresentacao";

function Formulario() {
    const [formData, setFormData] = useState({
        nomeDoPovo: "",
        pais: "",
        continente: "",
        ondeVivem: "",
        populacao: "",
        idiomaETraducao: "",
        religiaoECristianismo: "",
        cristaosNoBrasil: "",
        evangelicosNoBrasil: "",
        cristaosPeloMundo: "",
        evangelicosPeloMundo: "",
        introducao: "",
        comoVivem: "",
        emQueAcreditam: "",
        intercessao: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClear = () => {
        if (
            window.confirm(
                "A ação irá apagar todos os campos, tem certeza que deseja fazer isso?"
            )
        ) {
            setFormData({
                nomeDoPovo: "",
                pais: "",
                continente: "",
                ondeVivem: "",
                populacao: "",
                idiomaETraducao: "",
                religiaoECristianismo: "",
                cristaosNoBrasil: "",
                evangelicosNoBrasil: "",
                cristaosPeloMundo: "",
                evangelicosPeloMundo: "",
                introducao: "",
                comoVivem: "",
                emQueAcreditam: "",
                intercessao: "",
            });
        }
    };

    const handleGenerate = () => {
        const emptyFields = Object.entries(formData)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (emptyFields.length > 0) {
            alert(
                `Campo(s) não preenchido(s): ${emptyFields
                    .join(", ")
                    .replace(/([A-Z])/g, " $1")
                    .toLowerCase()}`
            );
            return;
        }

        gerarApresentacao(formData);
    };

    return ( 
        <div className="form-container">
            <img
                src="https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/utils/intercessao_logo.png"
                className="form-logo"
                alt="Intercessão logo"
            />
            <form>
                <InputField
                    label={
                        <>
                            <FaUsers className="form-icon" /> Nome do povo
                        </>
                    }
                    name="nomeDoPovo"
                    icon={<FaUsers />}
                    value={formData.nomeDoPovo}
                    onChange={handleChange}
                    autoComplete="on"
                    className="form-field"
                />

                <div className="input-row">
                    <InputField
                        label={
                            <>
                                <FaMapMarkedAlt className="form-icon" /> País
                            </>
                        }
                        name="pais"
                        icon={<FaMapMarkedAlt />}
                        value={formData.pais}
                        onChange={handleChange}
                        autoComplete="on"
                        small
                    />

                    <InputField
                        label={
                            <>
                                <FaMapPin className="form-icon" /> Continente
                            </>
                        }
                        name="continente"
                        icon={<FaMapPin />}
                        value={formData.continente}
                        onChange={handleChange}
                        autoComplete="on"
                        small
                    />
                </div>

                <TextAreaField
                    label={
                        <>
                            <FaMapSigns className="form-icon" /> Onde vivem
                        </>
                    }
                    name="ondeVivem"
                    icon={<FaMapSigns />}
                    value={formData.ondeVivem}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <InputField
                    label={
                        <>
                            <FaPeopleCarry className="form-icon" /> População
                        </>
                    }
                    name="populacao"
                    icon={<FaPeopleCarry />}
                    value={formData.populacao}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <TextAreaField
                    label={
                        <>
                            <FaLanguage className="form-icon" /> Idioma e
                            tradução
                        </>
                    }
                    name="idiomaETraducao"
                    icon={<FaLanguage />}
                    value={formData.idiomaETraducao}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <TextAreaField
                    label={
                        <>
                            <FaPrayingHands className="form-icon" /> Religião e Cristianismo
                        </>
                    }
                    name="religiaoECristianismo"
                    icon={<FaPrayingHands />}
                    value={formData.religiaoECristianismo}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <div className="input-row">
                    <InputField
                        label={
                            <>
                                <FaBible className="form-icon" /> Cristãos no
                                Brasil
                            </>
                        }
                        name="cristaosNoBrasil"
                        icon={<FaBible />}
                        value={formData.cristaosNoBrasil}
                        onChange={handleChange}
                    />

                    <InputField
                        label={
                            <>
                                <FaBible className="form-icon" /> Evangélicos no
                                Brasil
                            </>
                        }
                        name="evangelicosNoBrasil"
                        icon={<FaBible />}
                        value={formData.evangelicosNoBrasil}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-row">
                    <InputField
                        label={
                            <>
                                <FaBible className="form-icon" /> Cristãos pelo
                                mundo
                            </>
                        }
                        name="cristaosPeloMundo"
                        icon={<FaBible />}
                        value={formData.cristaosPeloMundo}
                        onChange={handleChange}
                    />

                    <InputField
                        label={
                            <>
                                <FaBible className="form-icon" /> Evangélicos
                                pelo mundo
                            </>
                        }
                        name="evangelicosPeloMundo"
                        icon={<FaBible />}
                        value={formData.evangelicosPeloMundo}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-observation">
                    <FaExclamationCircle className="form-observation-icon" />

                    <div className="form-observation-text">
                        Para quebrar o texto dos campos a seguir em slides,
                        adicione uma linha vazia entre os textos. É recomendado
                        que cada slide não tenha mais do que 14 linhas e que cada bloco de texto tenha no máximo 3 linhas.
                    </div>
                </div>

                <TextAreaField
                    label={
                        <>
                            <FaInfoCircle className="form-icon" /> Introdução
                        </>
                    }
                    name="introducao"
                    placeholder="Introdução..."
                    value={formData.introducao}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <TextAreaField
                    label={
                        <>
                            <FaQuestionCircle className="form-icon" /> Como
                            vivem
                        </>
                    }
                    name="comoVivem"
                    placeholder="Como vivem..."
                    value={formData.comoVivem}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <TextAreaField
                    label={
                        <>
                            <FaCross className="form-icon" /> Em que acreditam
                        </>
                    }
                    name="emQueAcreditam"
                    placeholder="Em que acreditam..."
                    value={formData.emQueAcreditam}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <TextAreaField
                    label={
                        <>
                            <FaHandshake className="form-icon" /> Intercessão
                        </>
                    }
                    name="intercessao"
                    placeholder="Intercessão..."
                    value={formData.intercessao}
                    onChange={handleChange}
                    autoComplete="on"
                />

                <div className="button-container">
                    <Button
                        type="button"
                        className="clear-button"
                        onClick={handleClear}
                    >
                        Limpar
                    </Button>

                    <Button
                        type="button"
                        className="generate-button"
                        onClick={handleGenerate}
                    >
                        Gerar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;
