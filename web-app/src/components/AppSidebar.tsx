import { Home, Layout } from "lucide-react"
import { FigmaIcon, DesignGraphicIcon } from "./Icons"
import { Link } from "react-router"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar"
import { Logo } from "./Logo"
import { useTheme } from "../context/ThemeContext"
import { Sun, Moon } from "lucide-react"
import { useSidebar } from "./ui/sidebar"

export function AppSidebar() {
    const { theme, toggleTheme } = useTheme()
    const { toggleSidebar } = useSidebar()

    return (
        <Sidebar side="right" variant="floating" collapsible="offcanvas" className="border-none">
            <SidebarContent className="bg-white/95 dark:bg-black/95 backdrop-blur-md">
                <SidebarGroup>
                    <div className="flex items-center justify-between px-4 py-6">
                        <Link to="/" onClick={() => toggleSidebar()} className="text-black dark:text-white flex items-center gap-1">
                            <Logo className="h-8 w-auto fill-current" />
                        </Link>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white transition-colors"
                                aria-label="Alternar tema"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5" />
                                ) : (
                                    <Moon className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    <SidebarGroupContent>
                        <SidebarMenu className="px-4 gap-6 items-end mt-8">
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg" className="justify-end hover:bg-transparent">
                                    <Link to="/" onClick={() => toggleSidebar()} className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                                        <Home className="w-5 h-5 mr-4" /> Início
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg" className="justify-end hover:bg-transparent">
                                    <Link to="/category/ui-ux" onClick={() => toggleSidebar()} className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                                        <Layout className="w-5 h-5 mr-4" /> UI/UX
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg" className="justify-end hover:bg-transparent">
                                    <Link to="/category/figma" onClick={() => toggleSidebar()} className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                                        <FigmaIcon className="w-5 h-5 mr-4" /> Figma
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg" className="justify-end hover:bg-transparent">
                                    <Link to="/category/visual" onClick={() => toggleSidebar()} className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-wide">
                                        <DesignGraphicIcon className="w-5 h-5 mr-4" /> Design gráfico
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
