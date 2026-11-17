function FormPractice() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Форма отправлена')
        console.log(e.currentTarget)
      }}>
      <label htmlFor="name">Введие имя</label>
      <input id="name" type="text" />
      <input type="submit" value="Отправить" className="button-transparent" />
    </form>
  )
}

export default FormPractice
