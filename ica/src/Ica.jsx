import './App.css';
import React from "react";
import { useState } from "react";
import Final from './Final';

function Ica() {
   
    const [fofinha, setFofinha] = useState(false);
    const [linda, setLinda] = useState(false);
    const [chatinha, setChatinha] = useState(false);
    const [engraçada, setEngraçada] = useState(false);
    const [doidinha, setDoidinha] = useState(false);
    const [estressante, setEstressante] = useState(false);
    const [ansiosa, setAnsiosa] = useState(false);
    const [curiosa, setCuriosa] = useState(false);

    const [end, setEnd] = useState('end');
    const [finish, setFinish] = useState('finish');


    const onClickLabel = (e) => {
        const isChecked = e.target.checked;
        const item = e.target.id;

        if (item === 'fofinha') {
            setFofinha(isChecked)
        } else if (item === 'linda') {
            setLinda(isChecked) 
        } else if (item === 'chatinha') {
            setChatinha(isChecked)
        } else if (item === 'engraçada') {
            setEngraçada(isChecked)
        } else if (item === 'doidinha') {
            setDoidinha(isChecked) 
        } else if (item === 'estressante') {
            setEstressante(isChecked)
        } else if (item === 'ansiosa') {
            setAnsiosa(isChecked)
        } else if (item === 'curiosa') {
            setCuriosa(isChecked)
        }
    };

    const checagem = () => {
        if (chatinha === false) {
            alert('Chatinha deve ser marcado 🙂')
        } if (estressante === true) {
            alert('Você não é estressante, besta ❤️')
        } if (linda === false) {
            alert('Tu é linda menina, rum 😒')
        } if (ansiosa === false) {
            alert('A pessoa mais ansiosa que eu conheço, marca isso aí')
        } if (fofinha === false) {
            alert('Fo-fi-nha pode marcar')
        } if (doidinha === false) {
            alert('Às vezes tu é maluquinha viu 😇')
        } if (curiosa === false) {
            alert('A curiosidade vive matando essa gatinha rumhum')
        } else {
            setEnd('normal')
            setFinish('end');
        }
    }

    return(
    <><div>
            <p className='sub'>Criando uma Ica ❤️:</p>
            <div className="make">
                <label className="att" htmlFor="fofinha">
                    Fofinha
                    <input onClick={onClickLabel} type="checkbox" name="fofinha" id="fofinha" />
                </label>
                <label className="att" htmlFor="linda">
                    Linda
                    <input onClick={onClickLabel} type="checkbox" name="linda" id="linda" />
                </label>
                <label className="att" htmlFor="chatinha">
                    Chatinha
                    <input onClick={onClickLabel} type="checkbox" name="chatinha" id="chatinha" />
                </label>
                <label className="att" htmlFor="engraçada">
                    Engraçada
                    <input onClick={onClickLabel} type="checkbox" name="engraçada" id="engraçada" />
                </label>
                <label className="att" htmlFor="doidinha">
                    Doidinha
                    <input onClick={onClickLabel} type="checkbox" name="doidinha" id="doidinha" />
                </label>
                <label className="att" htmlFor="estressante">
                    Estressante
                    <input onClick={onClickLabel} type="checkbox" name="estressante" id="estressante" />
                </label>
                <label className="att" htmlFor="ansiosa">
                    Ansiosa
                    <input onClick={onClickLabel} type="checkbox" name="ansiosa" id="ansiosa" />
                </label>
                <label className="att" htmlFor="curiosa">
                    Curiosa
                    <input onClick={onClickLabel} type="checkbox" name="curiosa" id="curiosa" />
                </label>
            </div>
            <button className={ finish } onClick={() => { checagem(); } } type="button">
                Pronto
            </button>
        </div>
        <div className={ end }>
            <Final  />
        </div>
        </>
      )
}

export default Ica;