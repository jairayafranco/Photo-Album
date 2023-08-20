"use client"
import { useState } from "react";
import { useModalStore } from "@/app/store/useModalStore";
import { addToAlbumAction } from "./actions";

export default function AddToAlbumDialog() {
    const [albumName, setAlbumName] = useState("")
    const { image } = useModalStore()

    return (
        <dialog id="dialog" className="modal">
            <form method="dialog" className="modal-box">
                <section className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Add to Album</h3>
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
                        Add to Album
                    </button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
