import { useState } from 'react'
import ChildComponent from './ChildComponent'
import SiblingComponent from './SiblingComponent'

function ParentComponent() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1>Счетчик: {counter}</h1>
      <div className="flex-column" display="flex" flex-direction="column">
        <button
          className="btn-new green"
          onClick={() => setCounter((prev) => prev + 1)}>
          Увеличить
        </button>
        <button
          className="btn-new green"
          onClick={() => setCounter((prev) => (prev > 0 ? prev - 1 : prev))}>
          Уменьшить
        </button>
        <button className="btn-new red" onClick={() => setCounter(0)}>
          Сбросить
        </button>
        <button
          className="btn-new"
          onClick={() => setCounter(Math.floor(Math.random() * 10) + 1)}>
          Случаное зн-е
        </button>
      </div>

      <ChildComponent name="Пользователь" counter={counter} />
      <SiblingComponent />
    </>
  )
}

export default ParentComponent
