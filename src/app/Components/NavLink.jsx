"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive =
        href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={
                isActive ? "rounded-full bg-[#18220b] px-5 py-2 text-sm font-semibold text-[#c6ff00]" : "rounded-full px-5 py-2 text-sm text-gray-400 transition hover:bg-[#18220b] hover:text-[#c6ff00]"}
        >
            {children}
        </Link>
    );
};

export default NavLink;