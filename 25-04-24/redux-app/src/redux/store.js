import { configureStore } from '@reduxjs/toolkit'
import counterReducered from './slices/counter'
// import counterReducer from './redux/counter/counterSlice'
// import counterReducer from './counter/counterSlice'

export default configureStore({
    reducer:{
        counter: counterReducered
    }
})
