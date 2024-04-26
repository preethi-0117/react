import { configureStore } from '@reduxjs/toolkit'
import counterReducered from './slices/counter'
import remaindReducer from './slices/remaind'

export default configureStore({
    reducer:{
        counter: counterReducered,
        remaind: remaindReducer
    }
})
