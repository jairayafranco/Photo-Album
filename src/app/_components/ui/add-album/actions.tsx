"use server"
import { SearchResult } from '@/app/gallery/page';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';
import { Folder } from '../dashboard/Albums';

export async function addToAlbumAction(folder: string, image: SearchResult) {
    await cloudinary.v2.api.create_folder(folder)

    let parts = image.public_id.split("/")
    if (parts.length > 1) {
        parts = parts.slice(1)
    }
    const newPublicId = `${folder}/${parts.join("/")}`

    await cloudinary.v2.uploader.rename(image.public_id, newPublicId)
    revalidatePath("/gallery")
}

export async function getAlbums() {
    const { folders } = await cloudinary.v2.api.root_folders() as { folders: Folder[] };
    return folders;
}