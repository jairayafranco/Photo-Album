import { HeartIcon, ImageIcon, FolderIcon } from "../../icons/DashboardIcons";
import Navigate from "./Navigate";

const menu = [
    {
        name: "Gallery",
        icon: <ImageIcon />,
    },
    {
        name: "Albums",
        icon: <FolderIcon />,
    },
    {
        name: "Favorites",
        icon: <HeartIcon />,
    },
]

export default function Sidebar(
    { children }: { children: React.ReactNode }
) {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-300">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full bg-base-300 text-base-content flex flex-col gap-3">
                    {menu.map((item, index) => (
                        <li key={index} >
                            <Navigate item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
