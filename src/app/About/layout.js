"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({children}) =>{
    const pathname = usePathname();
    return(
        <>
            <ul>
                {
                    pathname !== "/About/Company" ? <li>Logo here</li> : <li>No Logo</li>
                }
                <li>
                    <Link href="/About/Company">Company</Link>
                </li>
                <li>
                    <Link href="/About/Mission">Mission</Link>
                </li>
            </ul>
            {children}
        </>
    )
}
export default Layout;