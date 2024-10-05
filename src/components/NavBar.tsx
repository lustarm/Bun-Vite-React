import { Button } from "@/components/ui/button"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {

    const HandleLogout = () => {
        localStorage.removeItem("auth")
        location.reload()
    }

    return (
        <nav className="bg-zinc-950 shadow-md font-mono">
            <div className="container mx-auto flex justify-between items-center p-2">
                {/* Logo */}
                <div className="text-xl font-bold text-white">
                    Stylo Swap
                </div>
                {/* User Actions */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Button className="bg-zinc-950 text-white font-semibold">
i
                                </Button>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="px-4 py-2 bg-zinc-950 text-white
                                rounded font-semibold"
                        >
                            logout
                        </Button>

                    </AlertDialogTrigger>
                    <AlertDialogContent className="font-mono bg-zinc-950">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription className="font-semibold text-white">
                                This action will log you out.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={HandleLogout} className="bg-zinc-950">Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </nav>
    );
}

export default Navbar;

