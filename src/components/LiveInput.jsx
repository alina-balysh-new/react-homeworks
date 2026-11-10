import { useState } from 'react'

function LiveInput() {
  const [value, setValue] = useState('initial value')

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  )
}

export default LiveInput
