import { useState } from 'react'

function Counter({}) {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h2>Счетчик: {counter}</h2>
      <button
        className="btn-new"
        onClick={() => setCounter((prevCount) => prevCount + 1)}
      >
        Увеличить
      </button>
    </>
  )
}

export default Counter
