"use client"
import { useState, useEffect } from "react";
import CloudinaryImage from "../components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import ImageGrid from "../components/image-grid";

export default function FavoritesList(
    { initialResources }: { initialResources: SearchResult[] }
) {
    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <section>
            {resources.length === 0 && (
                <div className="flex flex-col items-center justify-center h-96">
                    <h1 className="text-4xl font-bold text-white">No favorites yet</h1>
                    <p className="text-white">Click the heart icon on an image to add it to your favorites</p>
                </div>
            )}

            <ImageGrid
                images={resources}
                getImage={(imageData) => {
                    return (
                        <CloudinaryImage
                            key={imageData.public_id}
                            image_data={imageData}
                            width="400"
                            height="300"
                            sizes="100vw"
                            alt="Description of my image"
                            onUnheart={(unheartedResource) => {
                                setResources((currentResources) => {
                                    return currentResources.filter((r) => r.public_id !== unheartedResource.public_id)
                                });
                            }}
                        />
                    )
                }}
            />
        </section>
    );
}
