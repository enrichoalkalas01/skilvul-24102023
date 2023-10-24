import { useEffect, useState } from "react"
import Axios from 'axios'
import UniversalCookies from 'universal-cookie'

const Cookie = new UniversalCookies()

export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    useEffect(() => {

    }, [username, password])

    const authProcess = async () => {
        let configAxios = {
            url: "http://localhost:8772/api/v1/auth/login",
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
                username: username,
                password: password
            })
        }

        try {
            let authProcessData = await Axios(configAxios)
            Cookie.set('access_token', authProcessData.data.data.access_token, { expires: new Date(authProcessData.data.data.expire_time) })
            Cookie.set('refresh_token', authProcessData.data.data.refresh_token, { expires: new Date(authProcessData.data.data.expire_time_refresh) })
            setTimeout(() => {
                window.location.href = '/'
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <section className="container" style={{ height: '100vh' }}>
                <div className="row" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div className="col-12">
                        <div className="card p-4">
                            <div className="box-form mb-3">
                                <label className="form-label">Username</label>
                                <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="username" />
                            </div>
                            <div className="box-form mb-3">
                                <label className="form-label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" />
                            </div>
                            <div className="box-form">
                                <button onClick={ authProcess } className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}