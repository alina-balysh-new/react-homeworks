function StatusBadge({ isAvailable }) {
  return <p>{isAvailable ? 'Доступен для проекта' : 'Сейчас занят'}</p>
}

export default StatusBadge
