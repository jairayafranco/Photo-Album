"use client"
import { CldImage } from 'next-cloudinary';
import { HeartIcon, FullHeartIcon } from '../components/icons/DashboardIcons';
import { setAsFavoriteAction } from './actions';
import { useTransition } from 'react'
import { SearchResult } from './page';

export default function CloudinaryImage(
    props: any & SearchResult,
    path: string
) {
    const [transition, startTransition] = useTransition();
    const { image_data } = props;
    const isFavorite = image_data.tags.includes('favorite');

    return (
        <div className="relative">
            <CldImage
                {...props}
                src={image_data.public_id}
            />
            {
                isFavorite
                    ? (
                        <FullHeartIcon
                            className="absolute top-2 right-2 cursor-pointer text-red-500"
                            onClick={() => {
                                startTransition(() => {
                                    setAsFavoriteAction({
                                        publicId: image_data.public_id,
                                        isFavorite: false,
                                        path
                                    })
                                });
                            }}
                        />
                    )
                    : (
                        <HeartIcon
                            className="absolute top-2 right-2 cursor-pointer hover:text-red-500"
                            onClick={() => {
                                startTransition(() => {
                                    setAsFavoriteAction({
                                        publicId: image_data.public_id,
                                        isFavorite: true,
                                        path
                                    })
                                });
                            }}
                        />
                    )
            }
        </div>
    )
}
