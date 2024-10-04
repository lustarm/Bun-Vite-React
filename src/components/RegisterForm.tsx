import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Card, CardTitle, CardHeader, CardContent, CardFooter, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const RegisterForm = () => {
    // Hooks
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [inviteCode, setInviteCode] = useState('')

    const navigate = useNavigate()

    const loginPostData = {
        username: username,
        password: password,
        inviteCode: inviteCode,
    }

    const ClickRegister = () => {
        console.log(JSON.stringify(loginPostData));

        // Check if username and password are present
        if (!username || !password || !inviteCode) {
            setError(true);
            setErrorMessage("Please fill out input");
            console.log("Invalid username or password");
            return;
        }

        fetch("http://127.0.0.1:8000/v1/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Ensure headers are set for JSON
            },
            body: JSON.stringify(loginPostData),
        })
            .then((response) => {
                if (response.status === 401) {
                    // Parse the response body as JSON and then set the error message
                    response.json().then(data => {
                        setError(true);
                        setErrorMessage(data.message); // Assuming the message is inside the 'message' field of the JSON
                    });
                    return;
                }

                return response.json(); // Parse the response body as JSON
            })
            .then((data) => {
                if(!data) {
                    return
                }
                // Successful login, store token and reload page
                localStorage.setItem("auth", data.message);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                setErrorMessage("Server error, please try again later!");
            });
    };

    const ClickBack = () => {
        navigate("/")
    }

    return (
        <div className='flex items-center justify-center h-screen font-mono'>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className='text-2xl'>
                        Register
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
                    <div className='grid gap-2'>
                        <Input onChange={e => setInviteCode(e.target.value)}
                            id='invite code' type='invite code'
                            placeholder='invite code' required />
                    </div>
                </CardContent>
                <CardFooter className="space-x-3">
                    <Button className='w-full'
                        onClick={ClickRegister}>
                        Register
                    </Button>
                    <Button className="w-full"
                        onClick={ClickBack}>
                        Back
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )

}

export default RegisterForm
