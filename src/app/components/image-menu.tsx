import { MenuIcon } from "./icons/Menu";
import { FolderPlusIcon } from "./icons/FolderPlus";

export default function ImageMenu() {
    return (
        <details className="dropdown dropdown-end mb-32 absolute top-2 right-2">
            <summary className="btn btn-xs h-8">
                <MenuIcon />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                    <a>
                        <FolderPlusIcon />
                        Add to Album
                    </a>
                </li>
            </ul>
        </details>
    );
}
