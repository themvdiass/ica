import './App.css';
import Ica from './Ica';

import photoIca from './img/ica.jpeg'

function App() {
  return (
    <div className="App">
      <div>
        <img className="photoIca" src={photoIca} />
        <p className='title'>Uma pessoa muito especial</p>
        <p className='for'>Feito para Ianca Maciel</p>
      </div>
      <div>
        <p className='present'>
          Oi pessoinha! Pra começar, isso é uma coisa que eu queria fazer, não só por ti, mas por mim também. Cansei de fazer texto, é muito comum, então resolvi fazer um site. E também eu precisava treinar um pouco porque nunca mais tinha feito nada. Vamos lá então...
        </p>
        <img src="" alt="" />
      </div>
      <Ica/>
    </div>
  );
}

export default App;
