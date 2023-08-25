"use client"; //Dynamic - correct way to pass down server props

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi"

interface SidebarProps {
    children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar