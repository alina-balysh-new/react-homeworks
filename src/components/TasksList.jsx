import { useState } from 'react'

function TasksList() {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой'])
  return (
    <>
      <div className="block">
        <h2>Список задач</h2>
        <ul>
          {tasks.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="buttons-wrapper">
          <button
            className="button-transparent"
            onClick={() => setTasks((tasks) => [...tasks, 'Новая задача'])}>
            Добавить задачу
          </button>
          <button
            className="button-transparent"
            onClick={() =>
              setTasks((tasks) => [...tasks.slice(0, tasks.length - 1)])
            }>
            Удалить последнюю задачу
          </button>
        </div>
      </div>
    </>
  )
}

export default TasksList
