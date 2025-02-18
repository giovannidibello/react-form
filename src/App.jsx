import { useState } from 'react'
import './App.css'

// array di articoli
const articoli = ["Laptop", "Smartphone", "Auricolari", "Zaino", "Tastiera meccanica", "Monitor 4K", "Mouse wireless", "Hard disk esterno"];

function App() {

  const [listaArticoli, setListaArticoli] = useState(articoli);
  const [nuovoArticolo, setNuovoArticolo] = useState('');

  const aggiungiArticolo = event => {
    event.preventDefault();
    const listaAggiornata = [...listaArticoli, nuovoArticolo];
    setListaArticoli(listaAggiornata);
  }

  const rimuoviArticolo = i => {
    const listaAggiornata = listaArticoli.filter((nuovoArticolo, index) => {
      return index !== i
    });
    setListaArticoli(listaAggiornata);
  }


  return (
    <>
      <form onSubmit={aggiungiArticolo}>
        <input type="text" value={nuovoArticolo}
          onChange={e => { setNuovoArticolo(e.target.value) }} />
        <button>Invia</button>
      </form>


      <ul className="lista">
        {listaArticoli.map((articolo, i) => (<li key={i}>{articolo}
          <button onClick={() => rimuoviArticolo(i)}> <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>))}
      </ul >
    </>
  )
}

export default App
