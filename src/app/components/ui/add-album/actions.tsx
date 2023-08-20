"use server"
import { SearchResult } from '@/app/gallery/page';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export async function addToAlbumAction(folder: string, image: SearchResult) {
    await cloudinary.v2.api.create_folder(folder)

    await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${image.public_id}`)
    revalidatePath("/gallery")
}