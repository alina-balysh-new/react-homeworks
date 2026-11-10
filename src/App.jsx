import './App.css'
import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <UserCard
        name="Павел"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Алина"
        role="Frontend-разработчик"
        experience={5}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Тиктокер"
        role="Devops"
        experience={1}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={false}
      />
    </>
  )
}

export default App
