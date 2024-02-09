import { createAction } from '@reduxjs/toolkit'

const loadCart = createAction('cart/loadCart')
const loadProduct = createAction('product/loadProduct')
const loadUser = createAction('user/loadUser')

export { loadProduct, loadCart, loadUser }
