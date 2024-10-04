import { useEffect, useState } from "react"

import LoginForm from '@/components/LoginForm'
import NavBar from '@/components/NavBar'

import '../index.css'

const Home = () => {
    const [isLoggedIn, setLogin] = useState(false)

    useEffect(() => {
        let authToken = localStorage.getItem("auth")
        if(!authToken) {
            setLogin(false)
            return
        }
        fetch('http://localhost:8000/v1/verify', {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + authToken
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.message !== "Verified token") {
                    setLogin(false)
                    return
                }

                setLogin(true)
            })
            .catch((error) => {
                console.log(error)
                setLogin(false)
                return
            });
    }, [])

    if (!isLoggedIn) {
        return (
            <>
                <LoginForm />
            </>
        )
    }

    return (
        <>
            <NavBar/>
        </>
    )
}

export default Home;
