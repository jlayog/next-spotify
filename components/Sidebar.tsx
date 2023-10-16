"use client"; //Dynamic - correct way to pass down server props

//importing necessary components
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";

//defining the props of the component
interface SidebarProps {
    children: React.ReactNode;
    songs: Song[]
};
const Sidebar: React.FC<SidebarProps> = ({
    children,
    songs
}) => {
    //getting the pathname from the navigation
    const pathname = usePathname();
    //creating an array of objects containing the necessary props for the SidebarItems
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                    "
            >
                <Box className="">
                    <div className="
                        flex 
                        flex-col 
                        gap-y-4 
                        px-5 
                        py-4
                        "
                    >
                        {routes.map((item) => (
                            <SidebarItem
                                key={item.label}
                                {...item}
                            />
                        ))}
                        
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library songs={songs} />
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    )
}

//exporting the component
export default Sidebar