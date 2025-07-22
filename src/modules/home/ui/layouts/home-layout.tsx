import { SidebarProvider } from "@/components/ui/sidebar"
import { HomeNavbar } from "../components/home-navbar"

interface HomeLayoutprops {
    children: React.ReactNode
}

export const HomeLayout = ( { children } : HomeLayoutprops) => {
 return (
    <SidebarProvider>
        <div className="w-full">
            <HomeNavbar />
            <div className="flex min-h-screen pt-[4rem]">
              {children}
            </div>
        </div>
    </SidebarProvider>
 )
}

