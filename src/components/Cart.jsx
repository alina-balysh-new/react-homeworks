import { useState } from 'react'

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  return (
    <>
      <div className="block">
        <h2>Корзина товаров</h2>
        {cart.map((item, idx) => (
          <div key={idx} className="product">
            <div>
              {item.title} (Кол-во: {item.count})
            </div>
            <div className="product-btns-wrapper">
              <button
                className="button-transparent"
                onClick={() =>
                  setCart((prevCart) => {
                    const updCart = [...prevCart]
                    updCart[idx] = {
                      ...updCart[idx],
                      count: updCart[idx].count + 1,
                    }
                    return updCart
                  })
                }>
                +1
              </button>
              <button
                className="button-transparent"
                onClick={() =>
                  setCart((prevCart) =>
                    prevCart.filter(
                      (product, productIdx) => productIdx !== idx,
                    ),
                  )
                }>
                Удалить
              </button>
            </div>
          </div>
        ))}

        <div className="buttons-wrapper">
          <button className="button-transparent" onClick={() => setCart([])}>
            Очистить корзину
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart
