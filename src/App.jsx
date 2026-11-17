import './App.css'
import ClickPractice from './components/ClickPractice'
import InputPractice from './components/InputPractice'
import FormPractice from './components/FormPractice'
import ActionButton from './components/ActionButton'

function App() {
  return (
    <>
      <div className="flex-column">
        <ClickPractice />
        <InputPractice />
        <FormPractice />
        <ActionButton
          text="Сохранить"
          eHandler={() => console.log('Сохранено')}
        />
        <ActionButton text="Удалить" eHandler={() => console.log('Удалено')} />
      </div>
    </>
  )
}

export default App
