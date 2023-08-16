"use server"
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

type SetAsFavoriteAction = {
    publicId: string,
    isFavorite: boolean,
}

export async function setAsFavoriteAction(
    { publicId, isFavorite }: SetAsFavoriteAction
) {
    const result = isFavorite ? "add_tag" : "remove_tag"
    await cloudinary.v2.uploader[result]('favorite', [publicId])
    revalidatePath("/gallery")
}
