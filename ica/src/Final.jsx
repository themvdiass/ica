import './App.css';
import React from "react";
import ica2 from './img/ica2.jpeg'
import ica3 from './img/ica3.jpeg'
import ica4 from './img/ica4.jpeg'
import ica5 from './img/ica5.jpeg'
import ica6 from './img/ica6.jpeg'

function Final() {

    return(
            <div>
                <p className='words'>
                    Viuuu, não foi tão dificil! Demorei um pouquinho pra fazer, só fiz porque era pra ti mesmo kkkk.
                </p>
                <div className='box'>
                    <img className="imgIca" src={ ica2 } alt="" />
                    <img className="imgIca" src={ ica3 } alt="" />
                </div>
                <p className='words'>
                    Algumas coisas estavam bemmm na cara, tipo, tu sabe que tu é <strong>fofinha</strong>, e eu já disse que acho esse teu jeito lindo, também gosto que as vezes tu é <strong>doidinha</strong>, fala umas coisas <strong>engraçadas</strong>, e as vezes me manda uns videos de batalha de rima que eu nunca tinha visto. Gosto quando penso que tu lembra de mim pra me mandar essas coisas. DO mesmo jeito quando faz um tempo que a gente n se fala que tu aparece mandando mensagem sem eu esperar... ❤️
                </p>
                <div className='box'>
                    <img className="imgIca" src={ ica4 } alt="" />
                    <img className="imgIca" src={ ica5 } alt="" />
                </div>
                <p className='words'>
                    Sem contar os teus doramas, acho que faz parte da tua alma já kkkk. Quando eu penso em alguma coisa que tu gosta de fazer eu lembro logo dos doramas (que por sinal nunca tive tempo/disposição pra assistir). Sobre você ser <strong>linda</strong> eu acho que nem preciso explicar, todo dia te lembro disso, tenho até que parar, senão vai achar que sou teu fã.
                </p>
                <div className='box'>
                    <img className="imgIca" src={ ica6 } alt="" />
                </div>

                <p className='words'>
                    <strong>Ansiosa</strong> e <strong>curiosa</strong>, só 24h por dia, mas acho que é normal, principalmente pra alguém tão ocupada e esforçada que nem você. Enfim, não quero deixar muitooo longo porque senão vai ficar só texto. Desculpa ser chato às vezes. Principalmente esses dias eu tava muito ansioso com tudo.
                    Então lá vai mais uma coisinha pra ti, basta colar em um tradutor, especialmente para uma dorameira...
                </p>
                    <p className='ff'>정말 사랑해요, 내 삶의 일부가 되어줘서 고마워요</p>

            </div>
    )
}

export default Final;