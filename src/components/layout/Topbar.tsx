import { SidebarTrigger } from "../ui/sidebar";

export default function Topbar() {
    return (
        <header className="flex items-center justify-between p-4 bg-background border-b">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Vincenzo Magnano Dev</h1>
        </header>
    )
}