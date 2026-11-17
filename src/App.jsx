import './App.css'
import { useState, useRef } from 'react'
import List from './components/List'

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Alina' },
    { id: 2, name: 'Buba' },
    { id: 3, name: 'Silviya' },
  ])

  const idCounter = useRef(4)
  const inputRef = useRef(null)

  return (
    <>
      <div className="flex-column">
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const newItem = {
                id: idCounter.current,
                name: inputRef.current.value.trim(),
              }
              idCounter.current++

              setData((prevData) => [...prevData, newItem])

              inputRef.current.value = ''
            }
          }}
        />
        <button
          onClick={() => {
            inputRef.current.focus()
          }}>
          Фокус
        </button>
        <List data={data} setData={setData} />
      </div>
    </>
  )
}

export default App
