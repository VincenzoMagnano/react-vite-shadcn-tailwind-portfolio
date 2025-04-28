import { ReactNode } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "@/pages/home/Home"
import About from "@/pages/about/About"
import Works from "@/pages/works/Works"

type AppRouterProps = {
    children?: ReactNode
}

export function AppRouter({ children }: AppRouterProps) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
            </Routes>
            {children}
        </>
    )
}