import { configureStore } from '@reduxjs/toolkit'

import auth from './reducers/auth'
import content from './reducers/content'

export const store = configureStore({
    reducer: {
        auth,
        content,
    }
})

