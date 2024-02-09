import { createAction } from '@reduxjs/toolkit'

const loadUser = createAction('user/loadUser')
const loadCart = createAction('cart/loadCart')
const loadProduct = createAction('product/loadProduct')

export { loadUser, loadProduct, loadCart }
