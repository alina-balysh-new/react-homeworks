function ClickPractice() {
  return (
    <>
      {' '}
      <button
        className="button-transparent"
        onClick={(e) => {
          console.log(e.target)
          // e.target может указывать на разные эл-ты, т.к. сюда записывается элемент, на котором сработало событие. в нашем случае это м.б. кнопка, эмодзи и текст "Поставь лайк"
          console.log(e.currentTarget)
          // e.currentTarget. будет указывать всегда на кнопку, т.к. обработчик написан у тега кнопки
          console.log(e.target.tagName)
          console.log(e.currentTarget.tagName)
        }}>
        <span>👍</span>
        <span>Поставить лайк</span>
      </button>
    </>
  )
}

export default ClickPractice
