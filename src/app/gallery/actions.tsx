"use server"
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

type SetAsFavoriteAction = {
    publicId: string,
    isFavorite: boolean,
    path: string
}

export async function setAsFavoriteAction(
    { publicId, isFavorite, path }: SetAsFavoriteAction
) {
    const result = isFavorite ? "add_tag" : "remove_tag"
    await cloudinary.v2.uploader[result]('favorite', [publicId])
    await new Promise((resolve) => setTimeout(resolve, 1000))
    revalidatePath(path)
}
