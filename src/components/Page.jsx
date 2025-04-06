import { Navigation } from "./NavBar/NavBar"
// import pkbLogo from "../assets/svg/pkb.svg"
export const Page = ({ children }) => {
    return (
        <>
            <header >
                <Navigation /* Logo={pkbLogo}  */ Title="PokeDex" />
            </header>
            <main className="grow">
                {children}
            </main>

            <footer class="bg-white rounded-lg shadow-sm">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    
                    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center ">© 2025 <a href="https://flowbite.com/" class="hover:underline">PortalesWebII-AJ</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}