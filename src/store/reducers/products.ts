import { createSlice } from '@reduxjs/toolkit'
import { products } from '@/store/data/products.json'

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {},
})

export default productsSlice.reducer
