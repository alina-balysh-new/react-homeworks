import { useState } from 'react'

function ToggleText() {
  const [btnVisibility, setBtnVisibility] = useState(true)
  return (
    <>
      <h2 className={btnVisibility ? 'visible' : 'hidden'}>
        Текст, который можно скрыть кнопкой ниже
      </h2>
      <button
        className="btn-new"
        onClick={() => setBtnVisibility((prevState) => !prevState)}
      >
        {btnVisibility ? 'Скрыть' : 'Показать'}
      </button>
    </>
  )
}

export default ToggleText
