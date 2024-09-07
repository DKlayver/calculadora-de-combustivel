import { useState } from 'react'
import fuelLogo from './assets/bomba-de-combustivel.png'
import './App.css'

function App() {

  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')

  function handleClick(){
    if(alcool == '' || gasolina == ''){
      return alert("Insira os valores de Alcool e Gasolina!")
    }
  
    var valor = alcool/gasolina;
    var msg = '';
    if(valor < 0.7) {
      msg = "Melhor abastecer com Álcool"
    }else{
      msg = "Melhor abastecer com Gasolina"
    }
    return alert(msg)
  }

  return (
    <>
      <header>
        <img src={fuelLogo} alt='fuel'></img>
        <h1>Qual a melhor opção?</h1>
      </header>
      
      <main>
        <div className='container'>
          <label>Álcool (Preço por litro)</label>
          <input type='number' value={alcool} onChange={(e) => {setAlcool(e.target.value)}}></input>

          <label>Gasolina (Preço por litro)</label>
          <input type='number' value={gasolina} onChange={(e) => {setGasolina(e.target.value)}}></input>
          
          <button onClick={handleClick}>Calcular</button>
        </div>
      </main>
    </>
  )
}

export default App
