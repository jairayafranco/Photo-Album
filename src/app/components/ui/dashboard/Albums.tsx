import { FolderIcon } from "../../icons/DashboardIcons";
import Link from "next/link";
import { getAlbums } from "../add-album/actions";

export type Folder = {
    name: string,
    path: string,
}

export default async function Albums() {
    const folders = await getAlbums();

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
