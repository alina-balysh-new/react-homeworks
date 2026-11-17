function ActionButton({ text, eHandler }) {
  return (
    <>
      <button onClick={eHandler}>{text}</button>
    </>
  )
}

export default ActionButton
