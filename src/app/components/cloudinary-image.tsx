"use client"
import { CldImage, CldImageProps } from 'next-cloudinary';
import { HeartIcon, FullHeartIcon } from './icons/DashboardIcons';
import { setAsFavoriteAction } from '../gallery/actions';
import { useState, useTransition } from 'react'
import { SearchResult } from '../gallery/page';
import ImageMenu from './image-menu';

export default function CloudinaryImage(props: {
    image_data: SearchResult,
    onUnheart?: (unheartedResource: SearchResult) => void
} & Omit<CldImageProps, "src">,
) {
    const [transition, startTransition] = useTransition();
    const { image_data, onUnheart } = props;
    const [isFavorite, setIsFavorite] = useState(image_data.tags.includes('favorite'));

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
                            className="absolute top-2 left-2 cursor-pointer text-red-500"
                            onClick={() => {
                                onUnheart?.(image_data);
                                setIsFavorite(false);
                                startTransition(() => {
                                    setAsFavoriteAction({
                                        publicId: image_data.public_id,
                                        isFavorite: false,
                                    })
                                });
                            }}
                        />
                    )
                    : (
                        <HeartIcon
                            className="absolute top-2 left-2 cursor-pointer text-white hover:text-red-500"
                            onClick={() => {
                                onUnheart?.(image_data);
                                setIsFavorite(true);
                                startTransition(() => {
                                    setAsFavoriteAction({
                                        publicId: image_data.public_id,
                                        isFavorite: true,
                                    })
                                });
                            }}
                        />
                    )
            }
            <ImageMenu />
        </div>
    )
}
