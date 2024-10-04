import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Card, CardTitle, CardHeader, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Navigate } from "react-router-dom"
// import { Label } from '@/components/ui/label'


const LoginForm = () => {
    // Hooks
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const loginPostData = {
        username: username,
        password: password,
    }

    const ClickLogin = async () => {
        console.log(JSON.stringify(loginPostData))
        if (!username || !password) {
            setError(true)
            setErrorMessage("Invalid username or password")
            console.log("invalid username or password")
            return
        }
        await fetch("http://127.0.0.1:8000/v1/login", {
            method: "POST",
            body: JSON.stringify(loginPostData)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Invalid username or password") {
                    setError(true)
                    setErrorMessage(data.message)
                    return
                }
                localStorage.setItem("auth", data.message)
                location.reload()
            })
            .catch((error) => {
                console.log(error)
                setError(true)
                setErrorMessage("Server error please try again later!")
            })
    }

    const ClickRegister = () => {
        navigate("/register")
    }

    return (
        <div className='flex items-center justify-center h-screen font-mono'>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className='text-2xl'>
                        Login
                    </CardTitle>
                    {
                        error === true &&
                        <CardDescription className="font-semibold">
                            {errorMessage}
                        </CardDescription>
                    }
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <div className='grid gap-2'>
                        <Input onChange={e => setUsername(e.target.value)}
                            id='username' type='username'
                            placeholder='Username' required />
                    </div>
                    <div className='grid gap-2'>
                        <Input onChange={e => setPassword(e.target.value)}
                            id='password' type='password'
                            placeholder='password' required />
                    </div>
                </CardContent>
                <CardFooter className="space-x-3">
                    <Button className='w-full'
                        onClick={ClickLogin}>
                        Sign in
                    </Button>
                    <Button className='w-full'
                        onClick={ClickRegister}>
                        Register
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginForm
