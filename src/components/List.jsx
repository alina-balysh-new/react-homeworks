function List({ data, setData }) {
  return (
    <ul>
      {data.map((item, idx) => (
        <li key={item.id}>
          <div>{item.name}</div>
          <button
            onClick={() =>
              setData((prevData) => {
                const dataCopy = [...prevData]
                dataCopy[idx] = { ...prevData[idx] }
                dataCopy[idx].name = `!!! ${dataCopy[idx].name}`
                return dataCopy
              })
            }>
            Изменить
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
