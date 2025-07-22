import { HomeLayout } from "@/modules/home/ui/layouts/home-layout"

interface Layoutprops {
    children: React.ReactNode
}

const Layout = ( { children } : Layoutprops) => {
 return (
    <HomeLayout>
        {children}
    </HomeLayout>
 )
}

export default Layout