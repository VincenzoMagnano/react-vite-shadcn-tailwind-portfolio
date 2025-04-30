
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Link } from 'react-router-dom'
import { SidebarIcon } from './SideBarIcon'
import { FolderIcon, HomeIcon, UserIcon } from 'lucide-react'

const SidebarMenuComplete = () => {
    return (
        <>
            <SidebarMenu>
                <SidebarGroup>
                    <SidebarGroupLabel>whoami</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/" className="flex items-center gap-2">
                                    {/* <HomeIcon className="w-5 h-5 transition-all group-data-[state=collapsed]/sidebar:w-6 group-data-[state=collapsed]/sidebar:h-6" />
                                           */}
                                    <SidebarIcon icon={<HomeIcon />} />
                                    <span>
                                        HOME
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/about">
                                    {/* <UserIcon className="w-4 h-4" /> */}
                                    <SidebarIcon icon={<UserIcon />} />
                                    <span>ABOUT</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/works">
                                    {/* <FolderIcon className="w-4 h-4" /> */}
                                    <SidebarIcon icon={<FolderIcon />} />
                                    <span>WORKS</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarMenu>
        </>
    )
}

export default SidebarMenuComplete
