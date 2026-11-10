import { useState } from 'react'

function SiblingComponent() {
  const [text, setText] = useState('Initial value')
  return (
    <>
      <h1>Component "SiblingComponent", text: "{text}"</h1>
      <button onClick={() => setText('REDEV')}>Изменить text</button>
    </>
  )
}

export default SiblingComponent
