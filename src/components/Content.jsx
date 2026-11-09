export function MainContent() {
  return (
    <main>
      <h1>Основная часть страницы</h1>
      <div>Бла бла бла бла:</div>
      <Section></Section>
    </main>
  )
}

export function Section() {
  return (
    <section>
      <h2>Это очень важная секция</h2>
      <p>Потому что здесь сверстали аж 2 абзаца статического текста</p>
      <p>Такие дела!</p>
    </section>
  )
}
