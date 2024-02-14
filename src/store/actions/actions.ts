import { createAction } from '@reduxjs/toolkit'

const loadCart = createAction('cart/loadCart')
const loadUser = createAction('user/loadUser')
const loadProduct = createAction('product/loadProduct')

export { loadProduct, loadCart, loadUser }
