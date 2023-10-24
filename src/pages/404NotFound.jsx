import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function NotFound() {
    const storeAuth = useSelector(state => state.auth)

    useEffect(() => {
        setTimeout(() => {
            if ( storeAuth.authStatus ) {
                // Kalau Status nya sudah login
                window.location.href = '/'
            } else {
                // Kalau status nya belum login
                window.location.href = '/login'
            }
        }, 2000)
    }, [])

    return(
        <>
            <span>404 NotFound Here..</span>
        </>
    )
}