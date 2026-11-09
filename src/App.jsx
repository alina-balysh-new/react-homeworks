import './App.css'

const Header = () => {
  return <header>Учебный проект на React</header>
}

const MainContent = () => {
  return (
    <main>
      <h1>Основная часть страницы</h1>
      <div>Бла бла бла бла:</div>
      <Section></Section>
    </main>
  )
}

const Section = () => {
  return (
    <section>
      <h2>Это очень важная секция</h2>
      <p>Потому что здесь сверстали аж 2 абзаца статического текста</p>
      <p>Такие дела!</p>
    </section>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <MainContent>
        <Section></Section>
      </MainContent>
      <Footer></Footer>
    </div>
  )
}

const Footer = () => {
  return <footer>2026</footer>
}

export default App
