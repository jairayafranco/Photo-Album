import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard(
    { children }: { children: React.ReactNode }
) {
    return (
        <>
            <Navbar />
            <Sidebar>
                {children}
            </Sidebar>
        </>
    );
}
