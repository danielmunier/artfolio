import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout;  