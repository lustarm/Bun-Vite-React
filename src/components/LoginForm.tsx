import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import { Label } from '@/components/ui/label'

const LoginForm = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className='text-2xl'>
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <div className='grid gap-2'>
                        <Input id='username' type='username' placeholder='Username' required />
                    </div>
                    <div className='grid gap-2'>
                        <Input id='password' type='password' placeholder='password' required />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='w-full'>Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginForm
