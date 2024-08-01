import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './usuario/usuarioSlice'

export const store = configureStore({
  reducer: {
    user: usuarioReducer,
  },
})