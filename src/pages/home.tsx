import { useEffect, useState } from "react"

import LoginForm from '@/components/LoginForm'
import NavBar from '@/components/NavBar'

import '../index.css'

const Home = () => {
    const [isLoggedIn, setLogin] = useState(false)
    const [isLoading, setLoading] = useState(true) // Loading state

    useEffect(() => {
        let authToken = localStorage.getItem("auth")
        if (!authToken) {
            setLogin(false)
            setLoading(false)
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
                if (data.message !== "Verified token") {
                    setLogin(false)
                    setLoading(false)
                    return
                }

                setLogin(true)
                setLoading(false) // End loading when done
            })
            .catch((error) => {
                console.log(error)
                setLogin(false)
                setLoading(false) // Handle error and end loading
            });
    }, [])

    if (isLoading) {
        return <></> // Show loading message while verifying
    }

    if (!isLoggedIn) {
        return (
            <>
                <LoginForm />
            </>
        )
    }

    return (
        <>
            <NavBar />
        </>
    )
}

export default Home;

