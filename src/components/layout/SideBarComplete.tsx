import { Sidebar, SidebarContent, SidebarHeader, SidebarMenuButton, SidebarProvider, useSidebar } from "@/components/ui/sidebar"
import Topbar from "./Topbar"
import { ReactNode } from "react"
import { SidebarIcon } from "@/components/layout/SideBarIcon"
import SidebarFooterComplete from "./SidebarFooterComplete"
import SidebarMenuComplete from "./SidebarMenuComplete"
import PortfolioIcon from "@/assets/portfolio-svgrepo-com.svg"
import { SidebarLogo } from "./SidebarLogo"

type SidebarCompleteProps = {
    children: ReactNode
}

const SideBarComplete = ({ children }: SidebarCompleteProps) => {
   /*  const { state } = useSidebar() */

    return (
        <>
            <SidebarProvider
                style={{
                    "--sidebar-width": "15rem",
                    "--sidebar-width-mobile": "15rem",
                }}
            >
                <div className="flex min-h-screen">
                    <Sidebar
                        collapsible="icon"
                        variant="floating"
                        className="group/sidebar"
                    >
                        <SidebarHeader>
                            <SidebarMenuButton
                                size="lg"
                                className="bg-gray-300 flex justify-center transition-all p-5"
                            >
                                <SidebarLogo/>
                               {/*  {state === "collapsed"
                                ? <SidebarIcon icon={PortfolioIcon}/> 
                                : <span className="font-bold text-gray-500 p-0.5 text-lg">VMD</span>}
                                 */}
                            </SidebarMenuButton>
                        </SidebarHeader>
                        <SidebarContent>
                            <SidebarMenuComplete />
                        </SidebarContent>
                        <SidebarFooterComplete />
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
