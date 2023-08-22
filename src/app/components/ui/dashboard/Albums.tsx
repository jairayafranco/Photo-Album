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
        <details>
            <summary className="flex gap-4">
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
    );
}
