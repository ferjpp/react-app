import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState<number>(0)

  const persona = {
    nombre: "Twilla",
    edad: 22
  }

  const personas = [
    { nombre: "Pedro", edad: 20 },
    { nombre: "Fernando", edad: 22 },
    { nombre: "Alejandro", edad: 23 },
  ]

  return (
    <div className='p-10'>
      <h1 className='text-5xl font-bold underline text-blue-800 w-fit'>Hola mundo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='bg-green-700 text-white px-4 py-2 font-bold rounded-full mt-5 hover:text-gray-100 hover:scale-110 transition-all'>
          count is {count}
        </button>

        {/* Esta es la impresión de un objeto */}
        <p>{persona.nombre}: {persona.edad}</p>

        {/* Esta es la impresión de un array  */}
        {personas.map((fulano, index) => <p key={index}>Hola, {fulano.nombre}, tienes {fulano.edad}</p>)}

      </div>
    </div>
  )
}

export default App
