const Navbar = () => {
    return (
        <nav className="bg-white shadow-md font-mono">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">
                    Bun Vite React
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="#home" className="text-gray-600 hover:text-black">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-gray-600 hover:text-black">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-gray-600 hover:text-black">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-600 hover:text-black">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* User Actions */}
                <div>
                    <a href="#login" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

