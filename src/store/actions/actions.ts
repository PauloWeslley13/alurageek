import { createAction } from '@reduxjs/toolkit'

const loadCart = createAction('cart/loadCart')
const loadUser = createAction('user/loadUser')
const loadProduct = createAction('product/loadProduct')
const loadCategories = createAction('categories/loadCategories')
const loadCategory = createAction('category/loadCategory')

export { loadProduct, loadCart, loadUser, loadCategories, loadCategory }
