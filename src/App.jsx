import './App.css'
import Profile from './components/Profile'
import TasksList from './components/TasksList'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <div className="flex-column">
        <Profile />
        <TasksList />
        <Cart />
      </div>
    </>
  )
}

export default App
