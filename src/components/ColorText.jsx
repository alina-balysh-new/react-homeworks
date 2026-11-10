import { useState } from 'react'

function ColorText() {
  const [color, setColor] = useState('red')
  return (
    <>
      <h2 className={color + ' header'}>Текст с меняющимся фоном</h2>
      <button className="btn-new red" onClick={() => setColor('red')}>
        Розовый фон
      </button>
      <button className="btn-new blue" onClick={() => setColor('blue')}>
        Синий фон
      </button>
    </>
  )
}

export default ColorText
