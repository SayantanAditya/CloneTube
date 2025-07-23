"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"

const items = [
    {
        title : "Home",
        url : "/",
        icon : HomeIcon
    },
    {
        title : "Subsciptions",
        url : "/feed/subsciptions",
        icon : PlaySquareIcon,
        auth : true,
    },
    {
        title : "Trending",
        url : "/feed/trending",
        icon : FlameIcon,    
    },

]
export const MainSection = () =>{
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                             tooltip={item.title}
                             asChild
                             isActive = {false}
                             onClick={() => {}}
                            >

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}