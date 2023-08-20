import { FolderIcon } from "../../icons/DashboardIcons";
import cloudinary from 'cloudinary';
import Link from "next/link";

type Folder = {
    name: string,
    path: string,
}

export default async function Albums() {
    const { folders } = await cloudinary.v2.api.root_folders() as { folders: Folder[] };

    return (
        <ul className="menu menu-sm ml-0 max-w-xs w-full">
            <li>
                <details>
                    <summary>
                        <FolderIcon />
                        Albums
                    </summary>
                    <ul>
                        {folders.map((folder, index) => (
                            <li key={index}>
                                <Link href={`/albums/${folder.name}`}>
                                    <FolderIcon
                                        className="w-4 h-4"
                                    />
                                    {folder.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
        </ul>
    );
}
