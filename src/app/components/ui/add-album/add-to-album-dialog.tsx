"use client"
import { useEffect, useState } from "react";
import { useModalStore } from "@/app/store/useModalStore";
import { addToAlbumAction, getAlbums } from "./actions";
import { Folder } from "../dashboard/Albums";

export default function AddToAlbumDialog() {
    const [albumName, setAlbumName] = useState("")
    const [folders, setFolders] = useState<Folder[]>([])
    const [selectedFolder, setSelectedFolder] = useState("")
    const { image } = useModalStore()

    useEffect(() => {
        getAlbums().then((folders) => {
            setFolders(folders)
        })
    }, [])

    return (
        <dialog id="dialog" className="modal">
            <form method="dialog" className="modal-box">
                <section className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Create New Album</h3>
                </section>
                <p className="py-4">
                    Type an album name to add this image to it.
                </p>
                <div className="form-control">
                    <input
                        type="text"
                        value={albumName}
                        onChange={(e) => setAlbumName(e.target.value)}
                        placeholder="Album Name"
                        className="input input-bordered"
                    />
                </div>
                <div className="modal-action">
                    <button
                        className="btn btn-primary"
                        onClick={async () => {
                            if (albumName.trim() === "") {
                                alert("Please enter an album name")
                                return
                            }
                            await addToAlbumAction(albumName, image)
                            setAlbumName("")
                        }}
                    >
                        Create Album
                    </button>
                </div>

                <section className="my-2">
                    <h3 className="font-bold text-lg">Add To Existing Album</h3>

                    <select
                        className="select select-bordered w-full"
                        onChange={(e) => setSelectedFolder(e.target.value)}
                    >
                        {folders.map((folder, index) => (
                            <option
                                key={index}
                                value={folder.path}
                                className="capitalize"
                            >
                                {folder.name}
                            </option>
                        ))}
                    </select>

                    <div className="modal-action">
                        <button className="btn btn-primary" onClick={async () => {
                            if (selectedFolder.trim() === "") {
                                alert("Please select an album")
                                return
                            }
                            await addToAlbumAction(selectedFolder, image)
                            setSelectedFolder("")
                        }}>
                            Add to Album
                        </button>
                    </div>
                </section>

            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
