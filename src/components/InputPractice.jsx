function InputPractice() {
  return (
    <input
      type="text"
      onChange={(e) => console.log(e.target.value)}
      onFocus={() => console.log('Поле получило фокус')}
      onBlur={() => console.log('Поле потеряло фокус')}
      onKeyDown={(e) => e.key === 'Enter' && console.log('Нажат Enter')}
    />
  )
}

export default InputPractice
