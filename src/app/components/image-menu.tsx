import { MenuIcon } from "./icons/Menu";
import { FolderPlusIcon } from "./icons/FolderPlus";
import { SearchResult } from "../gallery/page";
import { useModalStore } from "../store/useModalStore";

export default function ImageMenu(
    { image }: { image: SearchResult }
) {
    const { setImage } = useModalStore();

    const openModal = () => {
        const dialog = document.getElementById('dialog');
        if (dialog instanceof HTMLDialogElement) {
            dialog.showModal();
            setImage(image)
        }
    }

    return (
        <>
            <div className="dropdown dropdown-end mb-32 absolute top-2 right-2">
                <button className="btn btn-xs h-8">
                    <MenuIcon />
                </button>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <button onClick={openModal}>
                            <FolderPlusIcon />
                            Add to Album
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
