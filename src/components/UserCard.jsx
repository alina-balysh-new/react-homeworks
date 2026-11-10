import Card from './Card'
import StatusBadge from './StatusBadge'

function UserCard({ name, role, experience, location, isAvailable }) {
  return (
    <>
      <Card>
        <h3>{name}</h3>
        <p>
          <b>{role}</b>
        </p>
        <p>
          Опыт работы: {experience} {getYearWord(experience)}
        </p>
        <p>
          {location.city}, {location.country}
        </p>
      </Card>
      <StatusBadge isAvailable={isAvailable} />
    </>
  )
}

const getYearWord = (number) => {
  let numToStr = number.toString()
  let numEnd = numToStr[numToStr.length - 1]

  if (number >= 11 && number <= 14) return 'лет'
  switch (numEnd) {
    case '1':
      return 'год'
    case '2':
    case '3':
    case '4':
      return 'года'
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      return 'лет'
  }
}

export default UserCard
