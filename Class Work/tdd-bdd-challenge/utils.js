// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return 2 * w + h * 2
}

const circleArea = (r) => {
  return Math.PI * r ** 2
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  const index = shoppingCart.indexOf(item)

  if (index == -1) {
    const newItem = shoppingCart.push(item)
  } else {
    shoppingCart[index].quantity += 1
  }
}

const getNumItemsInCart = () => {
  return length(shoppingCart)
}

const removeItemFromCart = (item) => {
  const index = shoppingCart.indexOf(item)

  if (index > -1) {
    shoppingCart.splice(index, 1)
  }
}

const getTotalCostFromCart = () => {
  let cost = 0
  shoppingCart.forEach((item) => {
    cost += item.price * item.quantity
  })

  return cost
}

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  getTotalCostFromCart,
}
