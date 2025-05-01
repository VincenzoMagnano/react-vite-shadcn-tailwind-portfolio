import { Link } from "react-router-dom"
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "../ui/sidebar"
import { Folder, Home, User } from "lucide-react"


const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "About",
        url: "/about",
        icon: User
    },
    {
        title: "Works",
        url: "/works",
        icon: Folder
    },
]



export function SidebarMenuComplete() {
    return (
        <>
            <SidebarGroup>
                <SidebarGroupLabel>whoami</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    )
}


