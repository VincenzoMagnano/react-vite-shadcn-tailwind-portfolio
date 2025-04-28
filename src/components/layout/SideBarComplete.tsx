import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import Topbar from "./Topbar"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { HomeIcon, UserIcon, FolderIcon } from "lucide-react"

type SidebarCompleteProps = {
    children: ReactNode
}

const SideBarComplete = ({ children }: SidebarCompleteProps) => {
    return (
        <>
            <SidebarProvider>
                <div className="flex min-h-screen">
                    <Sidebar>
                        <SidebarHeader>
                            <h1 className="text-xl font-bold">LOGO</h1>
                        </SidebarHeader>
                        <SidebarContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link to="/" className="flex items-center gap-2">
                                            <HomeIcon className="w-4 h-4" />
                                            <span>
                                                Home
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link to="/about">
                                            <UserIcon className="w-4 h-4" />
                                            <span>About</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link to="/works">
                                        <FolderIcon className="w-4 h-4" />
                                            <span>Works</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarContent>
                    </Sidebar>
                    <div className="flex flex-col flex-1">
                        <Topbar />
                        <h1 className="text-2xl font-bold ml-3 mt-2">PORTFOLIO</h1>

                        <main className="flex-1 p-6">
                            {children}
                        </main>

                    </div>
                </div>
            </SidebarProvider>
        </>
    )
}

export default SideBarComplete
