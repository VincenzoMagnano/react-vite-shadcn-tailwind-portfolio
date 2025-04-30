import { useSidebar } from "@/components/ui/sidebar"
import { SidebarIcon } from "@/components/layout/SideBarIcon"
import PortfolioIcon from "@/assets/portfolio-svgrepo-com.svg"

interface SidebarLogoProps{
    className?: string
}

export function SidebarLogo({className = ""}:SidebarLogoProps) {
    const { state } = useSidebar()

    return (
        <div className={`flex justify-center items-center py-4 ${className}`}>
            {state === "collapsed" ? (
                <SidebarIcon 
                icon={PortfolioIcon}
                className="p-1 transition-all"
                />
            ) : (
                <span className="text-2xl font-bold tracking-tight text-gray-800 transition-all">
                    VMD
                </span>
            )}
        </div>
    )
}