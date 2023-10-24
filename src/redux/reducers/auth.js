import { createSlice } from '@reduxjs/toolkit'
import UniversalCookies from 'universal-cookie'

const Cookie = new UniversalCookies()

const initialState = {
    authStatus: Cookie.get('refresh_token') ? true : false,
    access_token: Cookie.get('access_token') ? Cookie.get('access_token') : null,
    refresh_token: Cookie.get('refresh_token') ? Cookie.get('refresh_token') : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
})

export const {  } = authSlice.actions

export default authSlice.reducer