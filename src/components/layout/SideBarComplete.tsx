import { Sidebar, SidebarContent, SidebarHeader, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar"
import Topbar from "./Topbar"
import { ReactNode } from "react"
import SidebarFooterComplete from "./SidebarFooterComplete"

import { SidebarLogo } from "./SidebarLogo"
import { SidebarMenuComplete } from "./SidebarMenuComplete"

type SidebarCompleteProps = {
    children: ReactNode
}

const SideBarComplete = ({ children }: SidebarCompleteProps) => {


    return (
        <>
            <SidebarProvider>
                <div className="flex min-h-screen">
                    <Sidebar
                        collapsible="offcanvas"
                        variant="floating"
                        className="group/sidebar"
                    >
                        <SidebarHeader>
                            <SidebarMenuButton
                                size="lg"
                                className="bg-gray-300 flex justify-center transition-all p-5"
                            >
                                <SidebarLogo />

                            </SidebarMenuButton>
                        </SidebarHeader>
                        <SidebarContent>
                            <SidebarMenuComplete />
                        </SidebarContent>
                        <SidebarFooterComplete />
                    </Sidebar>
                    <div className="flex flex-col flex-1">
                        <Topbar />
                        

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
