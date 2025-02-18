import { useState } from 'react'
import './App.css'

// array di articoli
const articoli = ["Laptop", "Smartphone", "Auricolari", "Zaino", "Tastiera meccanica", "Monitor 4K", "Mouse wireless", "Hard disk esterno"];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ul className="lista">
        {articoli.map(articolo => (<li>{articolo}</li>))}
      </ul >
    </>
  )
}

export default App
