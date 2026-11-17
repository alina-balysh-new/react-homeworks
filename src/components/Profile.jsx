import { useState } from 'react'

function Profile() {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })

  return (
    <>
      <div className="block">
        <h2>Профиль пользователя</h2>
        <div>Имя: {user.name}</div>
        <div>Возраст: {user.age}</div>
        <div>Активен: {user.isActive ? 'да' : 'нет'}</div>
        <div className="buttons-wrapper">
          <button
            className="button-transparent"
            onClick={() =>
              setUser((user) => {
                return {
                  ...user,
                  name: 'Алина',
                }
              })
            }>
            Сменить имя
          </button>
          <button
            className="button-transparent"
            onClick={() =>
              setUser((user) => {
                return {
                  ...user,
                  age: user.age + 1,
                }
              })
            }>
            Увеличить возраст
          </button>
          <button
            className="button-transparent"
            onClick={() =>
              setUser((user) => {
                return {
                  ...user,
                  isActive: !user.isActive,
                }
              })
            }>
            Переключить активность
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile
