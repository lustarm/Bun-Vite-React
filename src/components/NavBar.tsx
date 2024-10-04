import { Button } from "@/components/ui/button"

const Navbar = () => {

    const HandleLogout = () => {
        localStorage.removeItem("auth")
        location.reload()
    }

    return (
        <nav className="bg-white shadow-md font-mono">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">
                    Bun Vite React
                </div>
                {/* User Actions */}
                <div>
                    <Button className="px-4 py-2 bg-black text-white
                        rounded hover:bg-red-600"
                        onClick={HandleLogout}
                    >
                        logout
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

