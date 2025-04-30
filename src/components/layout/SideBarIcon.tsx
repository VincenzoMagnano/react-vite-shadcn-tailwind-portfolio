import { useSidebar } from "@/components/ui/sidebar"


interface SidebarIconProps {
    icon: React.ReactElement | string
    className?: string
}

export function SidebarIcon({ icon , className = ""}: SidebarIconProps) {
    const { state } = useSidebar()

    const size = state === "collapsed" ? "w-8 h-8" : "w-6 h-6"

    return (
        <div className={`transition-all flex items-center justify-center ${size}`}>
            {typeof icon === "string" ? (
                <img src={icon} alt="Icon" className={`object-contain w-full h-full ${className} `} />
            ) : (
                icon
            )}
        </div>
    )
}