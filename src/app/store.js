import {configureStore} from "@reduxjs/toolkit"
import counterReducer from '../Feature/counterSlice'

export default configureStore({
    reducer:{
        counter: counterReducer,
    },
})