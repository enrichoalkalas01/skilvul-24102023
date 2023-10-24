import { useSelector } from "react-redux"

import {
    BrowserRouter,
    Routes, Route
} from 'react-router-dom'

// Pages
import Homepages from './pages/Homepages'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from "./pages/404NotFound"

export default function App() {
    const storeAuth = useSelector(state => state.auth)
    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* Routes General ( yang bisa di akses semua tipe user ) */}
                    <Route path='/' element={ <Homepages /> } />
                    {
                        !storeAuth.authStatus ?
                            // Routes General ( tapi akan dihilangkan ketika authstatus true )
                            <Route path='/login' element={ <Login /> } />
                        :
                            // Routes Private ( akan bisa diakses ketika authstatus true )
                            <Route path='/dashboard' element={ <Dashboard /> } />
                    }

                    {/* Routes Auto ( ketika routes nya tidak di define, maka akan digantikan oleh ini ) */}
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}