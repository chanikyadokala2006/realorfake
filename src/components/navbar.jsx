import { Button} from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Navbar = () => {

    const WebsiteHeading = "real or ai";

    return(
        <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/60 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(17,48,105,0.06)]">
            
            <div className="flex justify-between items-center w-full px-12 py-6 max-w-480 mx-auto">
                <div className="text-lg font-bold tracking-tighter text-[#113069] uppercase">
                    {WebsiteHeading}
                </div>
            <div className="hidden md:flex items-center space-x-8">
                
                <Tabs defaultValue = "Home">
                    <TabsList variant = "line">
                        <TabsTrigger className="text-[#113069] font-semibold pb-1 transition-all duration-300"
                                     value = "Home">Home</TabsTrigger>
                        <TabsTrigger className="text-[#445d99] font-medium hover:text-[#113069] transition-all duration-300"
                                     value = "Analytics">Analytics</TabsTrigger>
                        <TabsTrigger className="text-[#445d99] font-medium hover:text-[#113069] transition-all duration-300" 
                                     value = "Reports">Reports</TabsTrigger>
                    </TabsList>
                </Tabs>
            
            </div>
            



            <Button className= "bg-primary px-6 py-2 rounded-md font-medium tracking-tight ">Export</Button>
            </div>
        </nav>
    );
}

export default Navbar