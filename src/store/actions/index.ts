import { createAction } from '@reduxjs/toolkit'

const loadUser = createAction('user/loadUser')
const loadProduct = createAction('product/loadProduct')

export { loadUser, loadProduct }
