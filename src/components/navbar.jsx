import {} from "@/components/ui/button"

const Navbar = () => {
    const WebsiteHeading = "real or ai";

    return(
        <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/60 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(17,48,105,0.06)]">
            <div className="flex justify-between items-center w-full px-6 md:px-12 py-4 md:py-6 mx-auto">
                <div className="text-lg font-bold tracking-tighter text-[#113069] uppercase">
                    {WebsiteHeading}
                </div>
            </div>
        </nav>
    );
}

export default Navbar