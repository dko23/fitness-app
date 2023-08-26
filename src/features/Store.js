import { configureStore } from "@reduxjs/toolkit";
import progressReducer from './Slice'

export default configureStore({
    reducer: {
        progress: progressReducer
    }
})